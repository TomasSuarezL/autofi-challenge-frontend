import { Box, Heading, StackDivider, VStack } from "@chakra-ui/layout";
import React from "react";
import { useAppSelector } from "../../store/hooks";
import CommentData from "./Comment";
import { Comment } from "./Comment.type";
import NewComment from "./NewComment";

const Comments = () => {
  const { comments } = useAppSelector((state) => state.posts);

  return (
    comments && (
      <Box boxShadow="lg" w="100%" p={[3, 6]} bg="white">
        <Heading size="lg" mx={[2, 3, 4]} mb={[3, 4]}>
          Comments
        </Heading>
        <VStack
          spacing={[3, 4]}
          p={[2, 3, 4]}
          align="start"
          divider={<StackDivider borderColor="gray.200" />}
        >
          {comments.map((c: Comment) => {
            return <CommentData key={c.id} comment={c} />;
          })}
        </VStack>
        <NewComment />
      </Box>
    )
  );
};

export default Comments;
