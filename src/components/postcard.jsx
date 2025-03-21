import LikeButton from "./LikeButton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        marginBottom: "10px",
        maxWidth: "400px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src={post.profilePic}
          alt="Profile"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
        <strong>{post.username}</strong>
      </div>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
