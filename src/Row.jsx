export default function Row({ name, author, published }) {
  return (
    <div className="row">
      {name} - {author} - {published ? "Yes" : "No"}
    </div>
  );
}
