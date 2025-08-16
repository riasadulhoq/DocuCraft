import ContentDisplay from "@/components/ContentDisplay";

export default function DocumentPage({ params }) {
  const contentIdArray = params.contentId;
  // console.log(contentIdArray);
  const contentId = contentIdArray[contentIdArray.length - 1];
  // console.log(contentId);

  return <ContentDisplay id={contentId} />;
}
