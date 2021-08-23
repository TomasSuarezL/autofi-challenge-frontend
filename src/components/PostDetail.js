import { Container, VStack } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchComments } from "../store/postsSlice";
import Comments from "./Comments";
import Post from "./Post";

const PostDetail = () => {
  let history = useHistory();
  let { idPost } = useParams();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
      dispatch(fetchComments(idPost));
  }, [dispatch, idPost]);

  if (!posts) {
    history.push("/");
    return false
  }

  return (
    <Container maxW={"container.lg"} >
      <VStack w="100%" p={[4, 8]} spacing={[3,4,6]}>
        <Post post={posts.filter((p) => p.id.toString() === idPost)[0]} />
        {!isLoading ? <Comments /> : <Spinner/>}
      </VStack>
    </Container>
  );
};

export default PostDetail;
