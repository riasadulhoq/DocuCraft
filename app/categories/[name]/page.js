import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/docs";
import { getDocsByCategory } from "@/utils/doc-util";

export default function CategoriesPage({ params }) {
  const { name } = params;
  const docs = getDocuments();
  const categoryDocs = getDocsByCategory(docs, name);
  // console.log(categoryDocs[0].id);

  return <ContentDisplay id={categoryDocs[0].id} />;
}
