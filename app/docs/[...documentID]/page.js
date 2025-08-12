import ContentDisplay from "@/components/ContentDisplay";
import { allDocumentsContent } from "@/lib/docs";

export default async function DocumentPage({ params }) {
  const documentIDArray = params.documentID;
  const documentID = documentIDArray[documentIDArray.length - 1];
  // console.log(documentID);
  const data = await allDocumentsContent(documentID);
  // console.log(data);

  return <ContentDisplay data={data} />;
}
