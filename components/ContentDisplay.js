import { getDocumentsContent } from "@/lib/docs";
import Link from "next/link";
import Tags from "./Tags";

export default async function ContentDisplay({ id }) {
  const documentContent = await getDocumentsContent(id);
  // console.log(documentContent);
  const { title, author, date, tags, category, contentHtml } = documentContent;

  return (
    <article className="prose dark:prose-invert">
      <h1 className="text-base">{title}</h1>
      <div>
        <span>Published On: {date}</span> by{" "}
        <Link href={`/authors/${author}`}>{author}</Link> under the{" "}
        <Link href={`/categories/${category}`}>{category}</Link> category.
      </div>
      <div>
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => <Tags key={tag} tag={tag} />)}
      </div>

      <div className="lead" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}
