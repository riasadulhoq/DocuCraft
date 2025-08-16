import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {
  //   console.log(postsDirectory);
  const fileNames = fs.readdirSync(postsDirectory);

  //   console.log(fileNames);

  const allDocuments = fileNames.map((fileName) => {
    const id = fileName.replace(".md", "");
    const fullPath = path.join(postsDirectory, fileName);
    // console.log(fullPath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    // console.log(matterResult);
    return {
      id,
      ...matterResult.data,
    };
  });

  return allDocuments.sort((a, b) => {
    if (a.order < b.order) {
      return -1;
    } else if (a.order > b.order) {
      return 1;
    } else {
      return 0;
    }
  });
}

export async function getDocumentsContent(id) {
  const filePath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
