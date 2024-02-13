import { DocsConfig } from "types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Explore",
      href: "/docs",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
        },
      ],
    },
    {
      title: "Graphnet",
      items: [
        {
          title: "Introduction",
          href: "/docs/graphnet",
        },
        {
          title: "Algorithms",
          href: "/docs/graphnet/algorithms",
        },
        {
          title: "Models",
          href: "/docs/graphnet/models",
        },
        {
          title: "Analysis",
          href: "/docs/graphnet/analysis",
        },
        {
          title: "Graph Neural Networks",
          href: "/docs/graphnet/gnn",
        },
        {
          title: "Theorems and Proofs",
          href: "/docs/graphnet/theorems",
        },
        {
          title: "Real Worlds Examples",
          href: "/docs/graphnet/examples",
        },
        {
          title: "Tools",
          href: "/docs/graphnet/tools",
        },
      ],
    },
    {
      title: "Responsible AI",
      items: [
        {
          title: "Introduction",
          href: "/docs/responsibleai",
        },
      ],
    },
    {
    title: "Causal Inference in ML",
    items: [
      {
        title: "Introduction",
        href: "/docs/causalml",
      },
    ],
    },
  ],
}
