import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const CommentsSection = (props: any) => {
  const postDbId = props.postDbId;
  return (
    <div>
      <CommentList id={postDbId}/>
      <CommentForm id={postDbId} />
    </div>
  );
};

export default CommentsSection;
