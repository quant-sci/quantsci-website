import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

export default function Card({
  title,
  button,
  demo,
  large,
}: {
  title: string;
  button: ReactNode;
  demo: ReactNode;
  large?: boolean;
}) {
  return (
    <div
      className={`relative col-span-1 h-96 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-md ${
        large ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex h-60 items-center justify-center">{demo}</div>
      <div className="mx-auto max-w-md text-center">
        <h2 className="bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-xl font-bold text-transparent [text-wrap:balance] md:text-3xl md:font-normal">
          {title}
        </h2>
        <div className="mt-2">{button}</div>
        <div className="h-px bg-gray-200 my-3" />
        <div className="prose-sm mt-3 leading-normal text-gray-500 [text-wrap:balance] md:prose">
        </div>
      </div>
    </div>
  );
}
