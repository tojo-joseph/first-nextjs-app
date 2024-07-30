export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Pos</h1>
      <p>{params.slug} </p>
    </main>
  );
}
