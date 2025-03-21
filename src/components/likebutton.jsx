import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      style={{
        backgroundColor: liked ? "red" : "gray",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
      }}
    >
      {liked ? "Liked ❤️" : "Like"}
    </button>
  );
};

export default LikeButton;
