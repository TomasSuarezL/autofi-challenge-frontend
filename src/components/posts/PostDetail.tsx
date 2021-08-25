import { Container, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchComments } from "../../store/postsSlice";
import Comments from "../comments/Comments";
import PostData from "./PostData";
import { Post } from "./Post.type";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const PostDetail = () => {
  let history = useHistory();
  let { idPost } = useParams<{ idPost: string }>();
  const dispatch = useAppDispatch();
  const { posts, isLoading } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchComments(idPost));
  }, [dispatch, idPost]);

  if (!posts) {
    history.push("/");
    return <div />;
  }

  return (
    <Container maxW={"container.lg"}>
      <VStack w="100%" p={[4, 8]} spacing={[3, 4, 6]}>
        <PostData post={posts.filter((p: Post) => p.id.toString() === idPost)[0]} />
        {!isLoading ? <Comments /> : <Spinner />}
      </VStack>
    </Container>
  );
};

export default PostDetail;
