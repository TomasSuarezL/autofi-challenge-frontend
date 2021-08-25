import { Comment } from "../components/comments/Comment.type";
import { Post } from "../components/posts/Post.type";

export const getPosts: () => Promise<Post[]> = async (page = 1) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`);
  return await response.json();
};

export const getPostComments: (idPost: string) => Promise<Comment[]> = async (idPost) => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}/comments`);
  return await response.json();
};
