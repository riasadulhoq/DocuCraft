# DocuCraft

DocuCraft is a Markdown Documentation Generator built with [Next.js](https://nextjs.org/). It allows you to organize, search, and display documentation written in Markdown files, with support for categories, tags, and authors. The project features a modern UI, instant search, and dynamic navigation.

## Features

- Organize docs by categories, tags, and authors
- Fast, debounced search with instant results
- Responsive sidebar navigation
- Markdown rendering with syntax highlighting
- Dark mode support

## Project Structure

```
docucraft/
├── app/                # Next.js app directory (routing, layouts, pages)
│   ├── layout.js
│   ├── page.js
│   └── error.js
├── components/         # React components (Header, Sidebar, Search, etc.)
│   ├── Header.js
│   ├── Sidebar.js
│   ├── Search.js
│   └── ...
├── docs/               # Markdown documentation files (*.md)
├── lib/                # Library code (data fetching, markdown parsing)
│   └── docs.js
├── public/             # Static assets (favicon, images)
├── styles/             # Global and component styles
│   └── globals.css
├── utils/              # Utility functions (grouping, filtering, etc.)
│   └── doc-util.js
├── README.md
└── package.json
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
