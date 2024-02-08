import { LIST_POST } from "../../lib/service";
import { PostBlock } from "./PostBlock";
import { useQuery } from "@apollo/client";
import CircularProgress from "@mui/material/CircularProgress";

const Blogpost = () => {
  const { loading, error, data } = useQuery(LIST_POST);

  if (loading)
    return (
      <p className="padding-top loading-screen">
        <CircularProgress />
      </p>
    );
  if (error) return <p className="padding-top">Error :( </p>;

  const postsFound = Boolean(data?.posts.nodes.length);
  if (!postsFound) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="blog-box">
      <div className="container-blog">
        <h3 className="text-xl">All my posts ({data.posts.nodes.length})</h3>
        <div className="post-grid">
          {data.posts.nodes.map((post: any) => (
            <PostBlock key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogpost;
