import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Heading } from "@chakra-ui/layout";
import PostList from "./PostList";
import { fetchPosts } from "../store/postsSlice";
import { Spinner } from "@chakra-ui/spinner";

const Posts = () => {
  const dispatch = useDispatch();
  const {isLoading, posts} = useSelector((state) => state.posts);

  useEffect(() => {
      dispatch(fetchPosts());
  }, [dispatch]);

  return !isLoading ? (
    <Container maxW="container.xl" p={[2,4,5]}>
      <Heading textAlign="center" size={"lg"}>Posts</Heading>
      {posts && <PostList />}
    </Container>
  ) : <Spinner/> ;
};

export default Posts;
