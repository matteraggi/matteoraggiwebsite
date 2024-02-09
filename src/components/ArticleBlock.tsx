import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_POST_BY_SLUG } from "../../lib/service";
import PostPageContent from "./PostPageContent";
import { CircularProgress } from "@mui/material";

const ArticleBlock = () => {
  const { slug } = useParams();
  const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
    variables: {
      id: slug,
    },
  });

  const postFound = Boolean(data?.post);

  /*const postsFound = Boolean(data?.post.content);
  if (!postsFound) {
    return <p>Post not loaded.</p>;
  }
  */

  return (
    <div className="padding-top-">
      <Link to="/blog">
        <img
          src="/arrow.svg"
          style={{ width: "50px", height: "auto", marginLeft: "35px" }}
        />
      </Link>
      {loading ? (
        <p className="padding-top loading-screen">
          <CircularProgress />
        </p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : !postFound ? (
        <p>Post could not be found.</p>
      ) : (
        <PostPageContent post={data.post} />
      )}
    </div>
  );
};

export default ArticleBlock;
