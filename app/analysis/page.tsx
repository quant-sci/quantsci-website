import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Analysis | graphnet",
  description: "Algorithm for graph analysis",
  // other metadata
};

// Card component
const Card = ({ title, imageSrc, href }: {
  title: string;
  imageSrc: string;
  href: string;
}) => (
  <Link href={href} passHref>
    <div className="max-w-lg rounded overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
      {imageSrc && (
        <div className="relative h-40 w-full">
          <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" className="rounded-t" />
        </div>
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  </Link>
);

const Analysis = () => {
  return (
    <>
      <div className="z-10 w-full max-w-3xl px-10 xl:px-0">
        <h1 className="text-4xl font-bold text-gray-900">Graph Analysis</h1>
        <p className="mt-2 text-gray-600">
          Graph analysis with degree metrics, centrality metrics, community detection and visualizations.
        </p>

        {/* Three clickable cards side by side */}
        <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card title="Metrics" imageSrc="/video/bfs_video.gif" href="/page1" />
          <Card title="Properties" imageSrc="/video/bfs_video.gif" href="/page2" />
          <Card title="Centrality Measures" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Similarity" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Embedding" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Visualization" imageSrc="/video/bfs_video.gif" href="/page3" />
        </div>
      </div>
    </>
  );
};

export default Analysis;
