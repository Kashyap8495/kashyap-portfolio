import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (
      typeof name !== 'string' ||
      typeof email !== 'string' ||
      typeof message !== 'string' ||
      !name.trim() ||
      !/^\S+@\S+\.\S+$/.test(email.trim()) ||
      !message.trim()
    ) {
      return NextResponse.json({ success: false, error: 'Invalid form data' }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, error: 'Contact service is not configured' },
        { status: 503 }
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'patelkashyap134@gmail.com', // your email
      subject: `New message from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
