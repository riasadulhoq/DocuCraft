import Link from "next/link";
import Tags from "./Tags";
export default function ContentDisplay({ data }) {
  const { title, author, date, tags, category, contentHtml } = data;
  console.log(data);
  return (
    <article className="prose dark:prose-invert">
      <h1 className="text-base">{title}</h1>
      <div>
        <span>Published On: {date}</span> by{" "}
        <Link href={`/author/${author}`}>{author}</Link> under the{" "}
        <Link href={`/category/${category}`}>{category}</Link> category.
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
