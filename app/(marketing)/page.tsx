import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

async function getGitHubStars(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/kleyt0n/graphnet",
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${env.GITHUB_ACCESS_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    )

    if (!response?.ok) {
      return null
    }

    const json = await response.json()

    return parseInt(json["stargazers_count"]).toLocaleString()
  } catch (error) {
    return null
  }
}

export default async function IndexPage() {
  const stars = await getGitHubStars()

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
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Contributors
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <Link href="https://github.com/Kleyt0n/optymus" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-function-square"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"/><path d="M9 11.2h5.7"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Optimization</h3>
                <p className="text-sm text-muted-foreground">
                <b>optymus</b> is a Python library for optimization methods with focus on research.
                </p>
              </div>
            </div>
          </Link>
          <Link href="/docs/graphnet" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-waypoints"><circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Graphs and Geometric Deep Learning</h3>
                <p className="text-sm text-muted-foreground">
                <b>graphnet</b> is an open repository for graphs and geometric deep learning.
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/Kleyt0n/optymus" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Responsible AI</h3>
                <p className="text-sm text-muted-foreground">
                  A comprehensive guide to responsible AI in theory and practive. 
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/Kleyt0n/optymus" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-right-left"><path d="m16 3 4 4-4 4"/><path d="M20 7H4"/><path d="m8 21-4-4 4-4"/><path d="M4 17h16"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Machine Learning and Causal Inference</h3>
                <p className="text-sm text-muted-foreground">
                  A comprehensive guide to machine learning and causal inference.
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/Kleyt0n/optymus" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-triangle-right"><path d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Computational Geometry</h3>
                <p className="text-sm text-muted-foreground">
                  <b>compute-geometry</b> is a Python library for computational geometry with examples and models.
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/Kleyt0n/optymus" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-candlestick-chart"><path d="M9 5v4"/><rect width="4" height="6" x="7" y="9" rx="1"/><path d="M9 15v2"/><path d="M17 3v2"/><rect width="4" height="8" x="15" y="5" rx="1"/><path d="M17 13v3"/><path d="M3 3v18h18"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Quantitative Finance</h3>
                <p className="text-sm text-muted-foreground">
                  <b>quantspace</b> is a python library for quantitative finance integrating traditional methods and AI-based solutions.
                </p>
              </div>
            </div>
          </Link>
          <Link href="https://github.com/Kleyt0n/optymus" className="group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-line-chart"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Time Series Forecasting</h3>
                <p className="text-sm text-muted-foreground">
                  We are building a comprehensive guide to time series analysis and forecasting in Python.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            <b>quantsci</b> also have a blog where we share our knowledge and
            experience across different fields. We are always
            looking for new contributors to help us build the best open-source
            project for quantitative methods in science and engineering.
          </p>
        </div>
      </section>
    </>
  )
}
