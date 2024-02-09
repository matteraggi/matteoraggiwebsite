const CommentBlock = (props: any) => {
  const comment = props.data;
  return (
    <div className="single-comment">
      <h4>{comment.author.node.name}</h4>
      <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
    </div>
  );
};

export default CommentBlock;
