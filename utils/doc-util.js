export function getDocsByCategory(docs, category) {
  return docs.filter((doc) => doc.category === category);
}

export function getDocsByAuthor(docs, author) {
  return docs.filter((doc) => encodeURI(doc.author) === author);
}

export function getDocsByTags(docs, tag) {
  return docs.filter(
    (doc) => doc.tags.some((inputTag) => encodeURI(inputTag) === tag)
    // (doc) => doc.tags.some((inputTag) => inputTag === tag)
  );
}

export function getDocsByType(pathName, docs) {
  if (pathName.includes("categories")) {
    const category = pathName.split("/")[2];
    return getDocsByCategory(docs, category);
  } else if (pathName.includes("authors")) {
    const author = pathName.split("/")[2];
    return getDocsByAuthor(docs, author);
  } else if (pathName.includes("tags")) {
    const tag = pathName.split("/")[2];
    return getDocsByTags(docs, tag);
  }
  return docs;
}
