import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query getPostBySlug($id: ID!) {
    post(id: $id, idType: SLUG) {
      title
      date
      content
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
