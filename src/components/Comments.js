import { Box, Heading, StackDivider, VStack } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import Comment from "./Comment";
import NewComment from "./NewComment";

const Comments = () => {
  const { comments } = useSelector((state) => state.posts);

  return (
    <Box boxShadow="lg" w="100%" p={[3, 6]} bg="white">
      <Heading size="lg" mx={[2, 3, 4]} mb={[3,4]}>
        Comments
      </Heading>
      <VStack spacing={[3, 4]} p={[2, 3, 4]} align="start" divider={<StackDivider borderColor="gray.200" />}>
        {comments.map((c) => {
          return (
            <Comment key={c.id} comment={c}/>
          );
        })}
      </VStack>
      <NewComment />
    </Box>
  );
};

export default Comments;
