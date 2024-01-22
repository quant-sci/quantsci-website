import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tools and Resources | graphnet",
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

const Theorems = () => {
  return (
    <>
      <div className="z-10 w-full max-w-3xl px-10 xl:px-0">
        <h1 className="text-4xl font-bold text-gray-900">Tools and Resources</h1>
        <p className="mt-2 text-gray-600">
          The main tools and resources for graph analysis and evaluation
        </p>

        {/* Three clickable cards side by side */}
        <div className="grid mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card title="NetworkX" imageSrc="/tools/networkx.png" href="/page1" />
          <Card title="PyG" imageSrc="/tools/pyg.png" href="/page2" />
          <Card title="DGL" imageSrc="/tools/dgl.png" href="/page2" />
          <Card title="graphtool" imageSrc="/tools/graphtool.png" href="/page2" />
          <Card title="SNAP" imageSrc="/tools/snap.png" href="/page2" />
          <Card title="neo4j" imageSrc="/tools/neo4j.png" href="/page2" />
          <Card title="graphql" imageSrc="/tools/graphql.png" href="/page2" />
          <Card title="graphX" imageSrc="/tools/graphx.png" href="/page2" />
        </div>
      </div>
    </>
  );
};

export default Theorems;
