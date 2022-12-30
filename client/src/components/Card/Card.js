import React from "react";
import "./Card.css";
import moment from "moment";
import { MdDelete } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { deleteOne } from "../../app/features/memorie/postSlice";
import { useDispatch } from "react-redux";

const Card = ({ post, userId }) => {
  const dispatch = useDispatch()
  return (
    <div class="card h-100">
      <img src={post.image} class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.body.substring(0, 20)}</p>
        <p>{moment(post.createdAt).fromNow()}</p>
      </div>
      <div class="row" style={{ padding: "10px" }}>
        <div class="col d-flex justify-content-start">
          <AiFillLike fontSize={"20px"} /> like
        </div>
        {userId === post.user && (
          <div class="col d-flex justify-content-end" onClick={ ()=>dispatch(deleteOne(post._id))
          }>
            <MdDelete fontSize={"20px"} /> Delete
          </div>
        )}
      </div>
    </div>
  );
};
// style={{
//   position: 'absolute',
//    right: '10px',
//    fontSize:"15px",
//    fontWeight:"bold",
//   top:'460px'
// }}
export default Card;
