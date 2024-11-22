const BASE_URL = "https://673dfa890118dbfe8609a017.mockapi.io";

export const getAllPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export async function getDataById(id: string) {
  const response = await fetch(`${BASE_URL}/posts/${id}`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return await response.json();
}

export const deletePost = async (id: any) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return await response.json();
};

export const addPost = async (newPost: any) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return await response.json();
};

export const updatePost = async ({ title, body, id }: any) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ title, body }),
  });

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return await response.json();
};

// For fetch by search params, i did it with static filter instead

// export const getPostsBySearch = async (search: string) => {
//   const url = new URL(`${BASE_URL}/posts`);
//   url.searchParams.append("title", search);
//   const response = await fetch(url, {
//     method: "GET",
//     headers: { "content-type": "application/json" },
//   });

//   if (!response.ok) throw new Error("Unable to fetch posts.");

//   return response.json();
// };
