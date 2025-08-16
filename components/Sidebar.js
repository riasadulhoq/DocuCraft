"use client";

import {
  getDocsByAuthor,
  getDocsByCategory,
  getDocsByTags,
} from "@/utils/doc-util";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar({ docs }) {
  const [rootsGroup, setRootsGroup] = useState([]);
  const [nonRootsGroup, setNonRootsGroup] = useState({});

  const pathName = usePathname();

  // console.log(pathName);
  useEffect(() => {
    let tempDocs = docs;
    if (pathName.includes("/categories")) {
      const category = pathName.split("/")[2];
      // console.log(category);
      tempDocs = getDocsByCategory(tempDocs, category);
      // console.log(tempDocs);
    } else if (pathName.includes("/authors")) {
      const author = pathName.split("/")[2];
      // console.log(author);
      tempDocs = getDocsByAuthor(tempDocs, author);
      // console.log(tempDocs);
    } else if (pathName.includes("/tags")) {
      const tag = pathName.split("/")[2];
      // console.log(tag);
      tempDocs = getDocsByTags(tempDocs, tag);
      // console.log(tempDocs);
    }

    const roots = tempDocs.filter((doc) => !doc.parent);
    //   console.log({ roots });
    const nonRootsArray = tempDocs.filter((doc) => doc.parent);
    //   console.log(nonRootsArray);
    const nonRoots = Object.groupBy(nonRootsArray, ({ parent }) => parent);
    //   console.log(nonRoots);

    const nonRootsKeys = Reflect.ownKeys(nonRoots);
    // console.log(nonRootsKeys);

    nonRootsKeys.forEach((key) => {
      const foundInRoots = roots.find((root) => root.id === key);
      // console.log(foundInRoots);
      if (!foundInRoots) {
        const foundInDocs = docs.find((doc) => doc.id === key);
        // console.log(foundInDocs);
        roots.push(foundInDocs);
      }
    });

    roots.sort((a, b) => {
      if (a.order < b.order) {
        return -1;
      } else if (a.order > b.order) {
        return 1;
      } else {
        return 0;
      }
    });

    setRootsGroup([...roots]);
    setNonRootsGroup({ ...nonRoots });
  }, [pathName]);

  return (
    <nav className="lg:block my-10">
      <ul>
        <div className="relative mt-3 pl-2">
          <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
          <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
          <div className="absolute left-2 h-6 w-px bg-emerald-500"></div>
          {rootsGroup.map((rootNode) => (
            <li key={rootNode.id} className="relative">
              <Link
                href={`/docs/${rootNode.id}`}
                aria-current="page"
                className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              >
                <span className="truncate">{rootNode.title}</span>
              </Link>
              {nonRootsGroup[rootNode.id] && (
                <ul role="list" className="border-l border-transparent">
                  {nonRootsGroup[rootNode.id].map((subRoot) => (
                    <li key={subRoot.id}>
                      <Link
                        href={`/docs/${rootNode.id}/${subRoot.id}`}
                        className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-900 transition dark:text-white"
                      >
                        <span className="truncate">{subRoot.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
}
