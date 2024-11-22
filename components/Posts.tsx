import { PostItem } from "./PostItem";

type Props = {
  posts: any[];
  handleDelete: (value: any[]) => void;
  handleUpdatePost: (value: any[]) => void;
};

const Posts = ({ posts, handleDelete, handleUpdatePost }: Props) => {
  return (
    <ol>
      {posts.map((post: any) => (
        <PostItem
          key={post.id}
          post={post}
          handleDelete={handleDelete}
          handleUpdate={handleUpdatePost}
        />
      ))}
    </ol>
  );
};

export { Posts };
