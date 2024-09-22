export function formatDate(date: string) {
  console.log("date: ", date);
  // return new Date(date).toString();
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
