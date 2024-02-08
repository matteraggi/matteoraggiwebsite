const PostPageContent = ({ post }: { post: any }) => {
  return (
    <section className="container">
      <div className="post-header-section">
        <div className="post-title">
          <h1 className="post-header">{post.title}</h1>
          <img
            src={post.featuredImage.node.sourceUrl}
            style={{
              width: "70%",
              height: "auto",
              marginBottom: "2rem",
            }}
            alt={post.title}
          />
          <p style={{ fontStyle: "italic" }}>
            {post.author.node.name} - {post.date.slice(0, 10)}
          </p>
        </div>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </section>
  );
};

export default PostPageContent;
