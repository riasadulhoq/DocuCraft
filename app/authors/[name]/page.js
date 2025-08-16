import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/docs";
import { getDocsByAuthor } from "@/utils/doc-util";

export default function AuthorPage({ params }) {
  const { name } = params;
  const docs = getDocuments();
  const authorDocs = getDocsByAuthor(docs, name);
  // console.log(authorDocs[0].id);

  return <ContentDisplay id={authorDocs[0].id} />;
}
