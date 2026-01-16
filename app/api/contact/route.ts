// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer, { Transporter } from 'nodemailer'

interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

interface MailOptions {
  from: string
  to: string
  subject: string
  html: string
  text: string
  replyTo: string
}

// Simple rate limiting
const rateLimit = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60000 // 1 minute
const MAX_REQUESTS = 3 // Max 3 requests per minute

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown'
    const now = Date.now()
    
    // Check rate limit
    const requests = rateLimit.get(ip) || []
    const recentRequests = requests.filter(time => now - time < RATE_LIMIT_WINDOW)
    
    if (recentRequests.length >= MAX_REQUESTS) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    
    recentRequests.push(now)
    rateLimit.set(ip, recentRequests)

    const formData: ContactFormData = await request.json()

    // Validate required fields
    if (!formData.name?.trim() || !formData.email?.trim() || 
        !formData.subject?.trim() || !formData.message?.trim()) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      )
    }
    // Add debugging to your POST function
// console.log('GMAIL_USER exists:', !!process.env.GMAIL_USER)
// console.log('GMAIL_APP_PASSWORD exists:', !!process.env.GMAIL_APP_PASSWORD)
// console.log('All environment variables:', Object.keys(process.env).filter(key => key.includes('GMAIL')))

    // Check if environment variables are set
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('Missing email configuration')
      return NextResponse.json(
        { error: 'Server configuration error. Please try again later.' },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter: Transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Email options
    const mailOptions: MailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: formData.email,
      subject: `New Contact Form: ${formData.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; color: white;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">From your portfolio website</p>
          </div>
          
          <div style="background-color: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e2e8f0; border-top: none;">
            <div style="background-color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <h2 style="color: #4a5568; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Sender Information</h2>
              <p><strong style="color: #2d3748;">👤 Name:</strong> ${formData.name}</p>
              <p><strong style="color: #2d3748;">📧 Email:</strong> ${formData.email}</p>
              <p><strong style="color: #2d3748;">📋 Subject:</strong> ${formData.subject}</p>
            </div>
            
            <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
              <h2 style="color: #4a5568; margin-top: 0; border-bottom: 2px solid #667eea; padding-bottom: 10px;">Message</h2>
              <div style="background-color: #f7fafc; padding: 15px; border-radius: 6px; border-left: 4px solid #667eea; margin: 15px 0;">
                ${formData.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #718096; font-size: 14px;">
              <p>💡 <strong>Quick actions:</strong></p>
              <p style="margin: 10px 0;">
                <a href="mailto:${formData.email}" style="color: #667eea; text-decoration: none; background-color: #ebf4ff; padding: 8px 16px; border-radius: 6px; display: inline-block; margin-right: 10px;">
                  ✉️ Reply to ${formData.name}
                </a>
              </p>
              <p style="margin-top: 20px;">
                This message was sent from your portfolio contact form at <strong>${new Date().toLocaleString()}</strong>
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `New Contact Form Submission
=================================

From: ${formData.name} (${formData.email})
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from your portfolio contact form at ${new Date().toLocaleString()}
Reply to: ${formData.email}`,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully',
        data: {
          name: formData.name,
          email: formData.email,
          timestamp: new Date().toISOString()
        }
      },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.error('Error sending email:', error)
    
    let errorMessage = 'Failed to send message. Please try again later.'
    
    if (error instanceof Error) {
      errorMessage = error.message
      
      // Provide more user-friendly error messages
      if (errorMessage.includes('Invalid login')) {
        errorMessage = 'Email configuration error. Please check server settings.'
      } else if (errorMessage.includes('ECONNREFUSED')) {
        errorMessage = 'Network error. Please check your connection.'
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    )
  }
}

// Add OPTIONS method for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    }
  )
}