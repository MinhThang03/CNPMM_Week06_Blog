import { useForm } from "react-hook-form";
import Post from "../mockdata/Post";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditPost = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, setValue } = useForm();
  const param = useParams();
  const data = Post.find((post) => post.id === parseInt(param.id));

  useEffect(() => {
    setValue("title", data.title);
    setValue("description", data.description);
  }, []);

  const onSubmit = (data) => {
    const postId = Post.findIndex((post) => post.id === parseInt(param.id));
    const newPost = {
      id: parseInt(param.id),
      title: data.title,
      description: data.description,
    };
    Post[postId] = newPost
    navigate("/");
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

export default EditPost;
