export function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-US", options);
}
export function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]+>/g, "");
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}