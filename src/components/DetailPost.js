import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Post from "../mockdata/Post";
import Comment from "../mockdata/Comment";

const DetailPost = () => {
  const param = useParams();
  const navigate = useNavigate();
  const data = Post.find((post) => post.id === parseInt(param.id));

  const [comment, setComment] = useState("");

  const handleChangComment = (e) => {
    setComment(e.target.value);
  };

  const handlePostComment = () => {
    const newComment = {
      content: comment,
      id_blog: parseInt(param.id),
    };
    Comment.push(newComment);
    document.getElementById("myForm").reset();
    navigate(`/${param.id}`);
  };

  return (
    <div className="container my-5">
      <div
        style={{ maxWidth: "700px", top: "-80px", paddingTop: "100px" }}
        className="mx-auto text-secondary position-relative"
      >
        <div className="text-center mb-4">
          <img
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            alt=""
            style={{
              width: "120px",
              border: "5px solid #eee",
              backgroundColor: "white",
            }}
            className="rounded-circle mx-auto text-center"
          />
          <div>
            <small>
              <Link href="#" className="text-primary">
                Page of{" "}
              </Link>
              <Link href="#" className="text-primary">
                Minh Thắng
              </Link>
            </small>
          </div>
          <h1 className="text-center font-weight-bold text-dark">
            {data.title}
          </h1>
          <div>
            <small className="text-dark">
              {`Written by `}
              <Link href="#" className="text-primary">
                Hoàng Minh Thắng
              </Link>
            </small>
          </div>
        </div>

        <p className="my-2">{data.description}</p>
        <br />
        <br />

        <br />
        <Link to={`/edit/${parseInt(param.id)}`} className="btn btn-success">
          Edit Post
        </Link>


        <div className="my-4">
          <h2>Comment</h2>
          <p>-----------------------------------------</p>
          <ul>
            {Comment.map((com, index) => (
              <li key={index}>{com.content}</li>
            ))}
          </ul>
          <div className="form-group">
            <form id="myForm">
              <input
                type="text"
                className="form-control"
                id="content"
                placeholder="Enter Comment"
                name="content"
                onChange={handleChangComment}
              />
            </form>
          </div>
          <button
            className="btn btn-primary"
            style={{ marginTop: "8px" }}
            onClick={handlePostComment}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPost;
