import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, propertyType, message } = body

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('Contact Form Submission:', {
      firstName,
      lastName,
      email,
      phone,
      propertyType,
      message,
      timestamp: new Date().toISOString()
    })

    // Try to send email if Resend is configured
    let emailSent = false
    if (resend && process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: 'AcreLink Contact Form <onboarding@resend.dev>',
          to: ['karlienraley@gmail.com'], // Using verified email address
          subject: `New Contact Form Submission from ${firstName} ${lastName}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Property Type:</strong> ${propertyType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          `,
          replyTo: email
        })
        emailSent = true
        console.log('Email sent successfully via Resend')
      } catch (emailError) {
        console.error('Resend email error:', emailError)
        // Continue without failing the form submission
      }
    } else {
      console.log('RESEND_API_KEY not configured - email not sent')
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        emailSent: emailSent
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
