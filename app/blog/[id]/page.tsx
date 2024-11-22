import { getDataById } from "@/app/services/getPosts";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
// why you must do   const { id } = await params;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getDataById(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params }: Props) {
  const { id } = await params;
  const post = await getDataById(id);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
