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

    // Always log the submission
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
          from: 'AcreLink Contact Form <noreply@acrelinkllc.com>',
          to: ['info@acrelinkllc.com'], // You can change this to your preferred email
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

    // Send confirmation email to the user
    if (resend && process.env.RESEND_API_KEY && emailSent) {
      try {
        await resend.emails.send({
          from: 'AcreLink <noreply@acrelinkllc.com>',
          to: [email],
          subject: 'Thank you for contacting AcreLink',
          html: `
            <h2>Thank you for contacting AcreLink!</h2>
            <p>Hi ${firstName},</p>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <p><strong>Your message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
            <p>If you have any urgent questions, please don't hesitate to reach out.</p>
            <p>Best regards,<br>The AcreLink Team</p>
          `
        })
        console.log('Confirmation email sent to user')
      } catch (confirmationError) {
        console.error('Confirmation email error:', confirmationError)
        // Don't fail the main submission for confirmation email issues
      }
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
