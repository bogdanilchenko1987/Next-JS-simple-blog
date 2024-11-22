type Props = {
  post: any;
  title: any;
  onSubmit: (value: any) => void;
  btnName: string;
};

const Form = ({ post, title, onSubmit, btnName }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <b>Title: </b>
        <input
          type="text"
          placeholder="New title"
          name="title"
          required
          defaultValue={title}
        />
      </label>
      <br />
      <label>
        <b>Post: </b>
        <input
          type="text"
          placeholder="New post"
          name="body"
          required
          defaultValue={post}
        />
      </label>
      <br />
      <button type="submit">{btnName}</button>
    </form>
  );
};

export { Form };
