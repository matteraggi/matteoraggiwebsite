import { useQuery } from "@apollo/client";
import { LIST_COMMENTS } from "../../lib/service";
import { CircularProgress } from "@mui/material";
import CommentBlock from "./CommentBlock";

const CommentList = (props: any) => {
  const postId = props.id;
  const { loading, error, data } = useQuery(LIST_COMMENTS, {
    variables: {
      id: postId,
    },
  });

  if (loading)
    return (
      <p className="padding-top loading-screen">
        <CircularProgress />
      </p>
    );
  if (error) return <p className="padding-top">Error :( </p>;

  console.log(data);
  const commentsFound = Boolean(data?.post.comments.nodes.length);
  if (!commentsFound) {
    return <p>Nessun commento trovato.</p>;
  }

  return (
    <div>
      <div>
        {data.post.comments.nodes.map(
          (comment: any) =>
            comment.parentId === null && <CommentBlock data={comment} />
        )}
      </div>
    </div>
  );
};

export default CommentList;
