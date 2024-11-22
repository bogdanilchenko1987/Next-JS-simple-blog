"use client";

import { deletePost, updatePost } from "@/app/services/getPosts";
import Link from "next/link";
import { FormEventHandler, useState } from "react";
import { Form } from "./Form";

type Props = {
  post: any;
  handleDelete: (value: any[]) => void;
  handleUpdate: (value: any) => void;
};

const PostItem = ({ post, handleDelete, handleUpdate }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const postDelete = async (id: any) => {
    const res = await deletePost(id);

    handleDelete(res.id);
  };

  const postUpdate: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);

    const { title, body } = Object.fromEntries(formData.entries());
    const id = post.id;

    try {
      const data = await updatePost({
        title,
        body,
        id,
      });

      handleUpdate(data);
      form.reset();
      setIsActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      <i>
        <Link href={`blog/${post.id}`}>{post.title}</Link>
      </i>
      {!isActive && (
        <div>
          <button className="button" onClick={() => postDelete(post.id)}>
            Delete
          </button>
          <button className="button" onClick={() => setIsActive(true)}>
            Update
          </button>
        </div>
      )}

      {isActive && (
        <Form
          btnName="Update Post"
          onSubmit={postUpdate}
          title={post.title}
          post={post.body}
        />
      )}
      <hr />
    </li>
  );
};

export { PostItem };
