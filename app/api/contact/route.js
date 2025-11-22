import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

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
