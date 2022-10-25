import { useNavigate } from "react-router-dom";
import Post from "../mockdata/Post";

import { Link } from "react-router-dom";

const ListPost = () => {
    const navigate = useNavigate()
    const handleRemove = async (idRemove) => {
        const postId = Post.findIndex((post) => post.id === parseInt(idRemove));
        Post.splice(postId, 1)
        navigate('/')
    }
  return (
    <div>
      {Post.map((post, index) => (
        <div className="mt-4" key={index} style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                  <div
                    className="card"
                    style={{ width: "60rem", marginBottom: "10px" }}
                  >
                    <div className="card-body">
                      <h4 className="card-title">{post.title}</h4>
                      <small className="text-muted cat">
                        <i className="far fa-clock text-info"></i>
                        60 minutes
                        <i className="fas fa-users text-info"></i> 5 portions
                      </small>
                      <p className="card-text">{post.description}</p>
                      <Link to={`/${post.id}`} className="btn btn-info">
                        Read Detail
                      </Link>
                    </div>
                    <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                      <div className="views">Last updated 3 mins ago</div>
                      <div className="stats">
                          <button className="btn btn-danger" onClick={() => handleRemove(post.id)}>
                            Delete
                          </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListPost;
