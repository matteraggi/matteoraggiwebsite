import { useMutation } from "@apollo/client";
import { CREATE_COMMENT } from "../../lib/service";

const CommentForm = (props: any) => {
  const postId = props.id;
  const [mutateFunction, { loading, error }] = useMutation(CREATE_COMMENT);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    let data = {
      author: event.target.author.value,
      authorEmail: event.target.email.value,
      content: event.target.comment.value.replace(/\n/g, "<br>"),
      commentOn: postId,
    };
    mutateFunction({
      variables: {
        input: data,
      },
    });
    event.target.reset();
  };

  return (
    <div className="comment-form-section">
      <h4>Condividi la tua opinione:</h4>
      <form onSubmit={handleSubmit} name="commentForm" className="comment-form">
        <label htmlFor="author">Nome: </label>
        <input type="text" id="author" name="author" required />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="comment">Commento: </label>
        <textarea id="comment" name="comment" required />

        <input type="hidden" name="postId" id="postId" value={postId} />

        {loading ? (
          <button type="submit" className="comment-button">
            Invio in corso...
          </button>
        ) : (
          <button type="submit" className="comment-button">
            Invia
          </button>
        )}
        {error && <p>Errore: {error.message}</p>}
      </form>
    </div>
  );
};

export default CommentForm;
