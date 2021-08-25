import React, { useEffect } from "react";
import { Container, Heading } from "@chakra-ui/layout";
import PostList from "./PostList";
import { fetchPosts } from "../../store/postsSlice";
import { Spinner } from "@chakra-ui/spinner";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Posts = () => {
  const dispatch = useAppDispatch();
  const { isLoading, posts } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return !isLoading ? (
    <Container maxW="container.xl" p={[2, 4, 5]}>
      <Heading textAlign="center" size={"lg"}>
        Posts
      </Heading>
      {posts && <PostList />}
    </Container>
  ) : (
    <Spinner />
  );
};

export default Posts;
