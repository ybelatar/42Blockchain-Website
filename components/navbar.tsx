"use client";

import Link from 'next/link'
import { navLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar({ className }: { className: string }) {
  return (
    <nav
      className={cn("flex gap-4", className)}>
      {
        navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="hover:text-light-blue active:text-light-blue transition-colors md:text-lg">
            {link.label}
          </Link>
        ))
      }
    </nav >
  )
}
