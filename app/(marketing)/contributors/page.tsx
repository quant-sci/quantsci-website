import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export const metadata = {
  title: "Contributors",
}

import Image from 'next/image'; // Assuming you'll use the Next.js Image component

export default function ContributorsPage() {
  const contributors = [
    {
      name: 'Kleyton da Costa',
      photo: '/images/avatars/kleytondacosta.webp',
      description: 'Economist and MSc Student in Computer Science at PUC-Rio, Brazil. Machine Learning Researcher and Research Engineer.',
      link: 'https://kleytondacosta.com',
    },
    {
      name: 'Bernardo Modenesi',
      photo: '/images/avatars/bernardomodenesi.png',
      description: 'Data Science & AI Research Fellow at the Michigan Institute for Data Science (MIDAS), holding a Ph.D. in Economics, with a joint degree in Statistics, from the University of Michigan',
      link: 'https://sites.google.com/view/bmodenesi',
    },
    // Add more contributors as needed
  ];

  return (
    <section className="container flex flex-col gap-6 py-8 md:max-w-[64rem] md:py-12 lg:py-24">
      <div className="mx-auto flex w-full flex-col gap-4 md:max-w-[58rem]">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Contributors
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Meet the individuals who make this project possible.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {contributors.map((contributor) => (
          <div key={contributor.name} className="contributor-card">
            <div className="image-container mb-4"> 
              <Image
                src={contributor.photo}
                alt={contributor.name}
                width={150} // Set desired image dimensions
                height={150}
                className="rounded-full" 
              />
            </div>
            <h3 className="text-xl font-bold">{contributor.name}</h3>
            <p className="text-muted-foreground">{contributor.description}</p>
            <div className="space-x-4">
            <Link href={contributor.link} className={cn(buttonVariants({ size: "sm" }))}>
              Website
            </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
