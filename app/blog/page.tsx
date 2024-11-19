import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error("Unable to fetch posts!");

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Simple Blog",
  description: "My Next JS blog page",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1>Blog page</h1>

      <ol>
        {posts.map((post: any) => (
          <li key={post.id}>
            <i>
              <Link href={`blog/${post.id}`}>{post.title}</Link>
            </i>
          </li>
        ))}
      </ol>
    </>
  );
}
