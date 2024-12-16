import { logo } from "@/assets/index";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";


export function Header() {

  return (
    <header className="sticky inset-0 bg-black/30 backdrop-blur-sm border-b border-white/10 z-50">

      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="42 Blockchain logo"
            width={120}
            height={53}
            priority
          />
        </Link>
        <nav className="flex gap-4">
          {
            navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:text-light-blue transition-colors text-lg">
                {link.label}
              </Link>
            ))
          }
        </nav>
      </div>

    </header>
  )
}
