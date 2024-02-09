import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      date
      content
      id
      databaseId
      author {
        node {
          name
        }
      }
      categories {
        nodes {
          slug
          name
        }
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
`;

export const LIST_POST = gql`
  query FetchPosts($first: Int = 80) {
    posts(first: $first) {
      nodes {
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        slug
        title
        date
      }
    }
  }
`;

export const LIST_COMMENTS = gql`
  query ListComments($id: ID!) {
    post(id: $id, idType: DATABASE_ID) {
      id
      title
      comments(first: 100) {
        nodes {
          id
          content
          date
          parentId
          author {
            node {
              name
            }
          }
        }
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      success
      comment {
        id
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation DeleteComment($input: ID!) {
    deleteComment(input: $input) {
      deletedId
    }
  }
`;
