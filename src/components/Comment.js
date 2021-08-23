import { Avatar } from "@chakra-ui/avatar";
import { Stack, VStack, Text, Heading } from "@chakra-ui/layout";
import React from "react";

const Comment = ({ comment }) => {
  return (
    <Stack direction={["column", "column", "row"]} w="100%">
      <VStack flex={"1"}>
        <Avatar name={comment.email} />
        <Text>{comment.email}</Text>
      </VStack>
      <VStack flex={"2"} align="start">
        <Heading size="sm">{comment.name}</Heading>
        <Text >{comment.body}</Text>
      </VStack>
    </Stack>
  );
};

export default Comment;
