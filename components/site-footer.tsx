import * as React from "react"

import { cn } from "@/lib/utils"
import Image from "next/image"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <Image src="/images/logo1.png" alt="logo" width={30} height={30} />
        </div>
        <div className="flex items-center gap-4">
          <a
            href="
            https://quantsci.org"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium"
          >
            © 2024 quantsci.org
          </a>
      </div>
      </div>
    </footer>
  )
}
