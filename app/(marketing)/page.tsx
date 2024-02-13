"use client"

import Link from "next/link"
import { useState } from 'react'; 

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"


const IndexPage = () => { // Changed to an arrow function 
  const [isOpen, setIsOpen] = useState(false);
  const latexCitation = `@misc{quantsci2024,
    author = {Costa, Kleyton and Modenesi, Bernardo},
    title = {Quantitative methods for science and engineering},
    year = {2024},
    url = {https://quantsci.org}}`;

  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow on X
          </Link>
          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Quantitative methods for science and engineering
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            quantsci is a open-source project that provides a set of tools for
            quantitative methods in science and engineering.

          </p>
          <div className="space-x-4">
            <Link
              href="/docs"
              className={cn(buttonVariants({size: "lg" }))}
            >
              Explore
            </Link>
            <Link
              href="/blog/manifesto"
              className={cn(buttonVariants({size: "lg" }))}
            >
              Manifesto
            </Link>
            <button 
            className={cn(buttonVariants({ size: "lg" }))} // Adjust styling as needed
            onClick={() => setIsOpen(!isOpen)}
            >
                  Cite this Project
            </button>

            {/* Modal */}
            {isOpen && (
              <div className="modal"> 
                <div className="modal-content">
                  <span className="close-button" onClick={() => setIsOpen(false)}>
                    &times;
                  </span>
                  <pre>{latexCitation}</pre> 
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
};

export default IndexPage;
