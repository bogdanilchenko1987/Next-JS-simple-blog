"use client";

import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { addPost, getAllPosts } from "../services/getPosts";
import { Posts } from "@/components/Posts";
import { PostsSearch } from "@/components/PostsSearch";
import { Form } from "@/components/Form";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = (id: any) => {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  };

  const handleUpdate = (upd: any) => {
    // ПРАВИЛЬНО ЗРОБИТИ СЕТПОСТ В ДЕЛІТ І ДЕСЬ ЩЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    setPosts(posts.map((post) => (post.id === upd.id ? upd : post)));
  };

  // ПРАВИЛЬНО ЗРОБИТИ СЕТПОСТ В ДЕЛІТ І ДЕСЬ ЩЕ!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const handleAddPost: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const form: any = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const newpost = await addPost(data);
    setPosts([...posts, newpost]);
    form.reset();
    setIsActive(false);
  };

  const changeFilter = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  const filteredContacts = () => {
    const filterlowerCase = search.toLowerCase();
    return posts.filter((post) =>
      post.title.toLowerCase().includes(filterlowerCase)
    );
  };

  return (
    <>
      <h1>Blog page</h1>
      {!isActive && (
        <div className="btn-container">
          <button className="button" onClick={() => setIsActive(true)}>
            Add post
          </button>
        </div>
      )}

      <div>
        {isActive && (
          <Form
            btnName="Add post"
            onSubmit={handleAddPost}
            title={""}
            post={""}
          />
        )}
      </div>
      <br />
      {!isActive && <PostsSearch onSearch={changeFilter} search={search} />}
      {loading ? (
        <h3>Loading....</h3>
      ) : (
        <Posts
          posts={filteredContacts()}
          handleDelete={handleDelete}
          handleUpdatePost={handleUpdate}
        />
      )}
    </>
  );
}
