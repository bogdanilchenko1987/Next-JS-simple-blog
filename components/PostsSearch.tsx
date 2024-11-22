"use client";
type Props = {
  onSearch: (value: any) => void;
  search: any;
};

const PostsSearch = ({ onSearch, search }: Props) => {
  return (
    <label className="label" htmlFor="search">
      <b>Find post:</b>
      <input
        type="text"
        name="search"
        placeholder="search"
        value={search}
        onChange={onSearch}
      />
    </label>
  );
};

export { PostsSearch };

// ------------------------------
// request to back-end for search parameter

// "use client";

// import { getPostsBySearch } from "@/app/services/getPosts";
// import { FormEventHandler, useState } from "react";

// type Props = {
//   onSearch: (value: any[]) => void;
// };

// const PostsSearch = ({ onSearch }: Props) => {
//   const [search, setSearch] = useState("");

//   const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
//     e.preventDefault();
//     try {
//       const posts = await getPostsBySearch(search);

//       onSearch(posts);
//     } catch (error) {
//       onSearch([]);
//       console.log(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="search"
//         placeholder="search"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// };

// export { PostsSearch };
