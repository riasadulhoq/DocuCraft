import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/docs";
import { getDocsByTags } from "@/utils/doc-util";

export default function TagsPage({ params }) {
  const { name } = params;
  const docs = getDocuments();
  const tagDocs = getDocsByTags(docs, name);
  console.log(tagDocs[0].id);

  return <ContentDisplay id={tagDocs[0].id} />;
}
