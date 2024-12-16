
import React from 'react'
import Link from 'next/link'
import { socialLinks } from '@/lib/constants'

export function Contact() {
  return (
    <section className="padding-y" id='contact'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {socialLinks.map(({ label, href, icon }, index) => (
            <Link
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-light-blue transition-colors"
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

