import { useForm } from "react-hook-form";
import Post from "../mockdata/Post";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm();
  const onSubmit =  (data) => {
    const newPost = {
        id: Post.length + 1,
        title: data.title,
        description: data.description
    }
    Post.push(newPost)
    navigate('/')
  };

  return (
    <div style={{ margin: "50px 200px" }}>
      <div className="mt-4">
        <h3>Create Post</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Name Course</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter Title Post Blog"
              name="title"
              {...register("title")}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description Post Blog"
              name="description"
              {...register("description")}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
