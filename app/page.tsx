import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/kleyt0n/graphtoviz",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <a
          href="https://twitter.com/kleytondacosta"
          target="_blank"
          rel="noreferrer"
          className="mx-auto mb-5 flex max-w-fit animate-fade-up items-center justify-center space-x-2 overflow-hidden rounded-full bg-black-50 px-7 py-2 transition-colors hover:bg-blue-200"
        >
          <Twitter className="h-5 w-5 text-[#ffffff]" />
          <p className="text-sm font-semibold text-[#ffffff]">
            Introducing graphnet
          </p>
        </a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Exploring the World of Graphs
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          An extensive collection of graph algorithms, visualizations and more
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
            href="https://github.com/kleyt0n/graphnet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
            <p>
              <span className="hidden sm:inline-block">Star on</span> GitHub{" "}
              <span className="font-semibold">{nFormatter(stars)}</span>
            </p>
          </a>
        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, button, demo, large }) => (
          <Card
            key={title}
            title={title}
            button={button}
            demo={demo}
            large={large}
          />
        ))}
      </div>
    </>
  );
}

const features = [
  {
    title: "Graph Algorithms",
    button: (
      <a
        href="/algorithms"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
      <Image
        src="video/bfs_video.gif"
        alt="Deploy with Vercel"
        width={320}
        height={30}
        unoptimized
      />
    </a>
    ),
    large: false,
  },
  {
    title: "Graph Models",
    button: (
      <a
        href="/graphmodels"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://pub.mdpi-res.com/electronics/electronics-10-01894/article_deploy/html/images/electronics-10-01894-g001.png?1628483356"
          alt="Deploy with Vercel"
          width={420}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Graph Analysis",
    button: (
      <a
        href="/analysis"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://networkpages.nl/wp-content/uploads/2023/05/Closeness.png"
          alt="Deploy with Vercel"
          width={320}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Theorems and Proofs",
    button: (
      <a
        href="/theorems"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://researchoutreach.org/wp-content/uploads/2019/05/2880px-Four_Colour_Planar_Graph.jpg"
          alt="Deploy with Vercel"
          width={420}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Real World Examples",
    button: (
      <a
        href="/realworld"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Internet_map_1024_-_transparent%2C_inverted.png"
          alt="Deploy with Vercel"
          width={220}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Graph Neural Networks",
    button: (
      <a
        href="/gnn"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://miro.medium.com/v2/resize:fit:1072/0*VO6JuDN7Ee1nefPL.png"
          alt="Deploy with Vercel"
          width={320}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Graph Transformers",
    button: (
      <a
        href="/gt"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg495FZQZ12yMiNhU8C7XUKEJ88H5_v2PPrzhwcDOVnSaVEtdCXaL7py-LzwZZkybKwIaePLHKpdmD6qALfskdjeaA8ML9QYHMwWkxz2ZnhWYqoV1PpnNgbRRfm0pSVYJVrtUpONyyF5PfswJ_QoxD-9vI9F3rF6VQbIRDDIbgvOFc35vTEF9uxizKNpli9/s320/image1.gif"
          alt="graph transformers"
          width={220}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Tools and Resources",
    button: (
      <a
        href="/tools"
        className="inline-block rounded-full border border-gray-300 bg-white px-5 py-2 text-sm text-gray-600 shadow-md transition-colors hover:border-gray-800"
      >
        Explore
      </a>
    ),
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="/tools/tools.png"
          alt="Deploy with Vercel"
          width={320}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
];
