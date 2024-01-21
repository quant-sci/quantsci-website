import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real World | graphnet",
  description: "Algorithm for graph analysis",
  // other metadata
};

// Card component
const Card = ({ title, imageSrc, href }) => (
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

const RealWorld = () => {
  return (
    <>
      <div className="z-10 w-full max-w-3xl px-10 xl:px-0">
        <h1 className="text-4xl font-bold text-gray-900">Real World Examples</h1>
        <p className="mt-2 text-gray-600">
          A collection of real world examples of graph networks.
        </p>

        {/* Three clickable cards side by side */}
        <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card title="Social Networks" imageSrc="/video/bfs_video.gif" href="/page1" />
          <Card title="Web Graphs" imageSrc="/video/bfs_video.gif" href="/page2" />
          <Card title="Transportation" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Biological" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Information" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Technological" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Economic" imageSrc="/video/bfs_video.gif" href="/page3" />
          <Card title="Ecological" imageSrc="/video/bfs_video.gif" href="/page3" />
        </div>
      </div>
    </>
  );
};

export default RealWorld;
