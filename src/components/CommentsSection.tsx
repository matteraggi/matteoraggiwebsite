import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const CommentsSection = (props: any) => {
  const postDbId = props.postDbId;
  return (
    <div className="post-comments">
      <CommentList id={postDbId} />
      <CommentForm id={postDbId} />
    </div>
  );
};

export default CommentsSection;
