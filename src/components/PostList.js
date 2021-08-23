import { Box, Heading, Stack, StackDivider, Text, VStack } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PostList = () => {
  const { posts } = useSelector((state) => state.posts);

  return (
    <VStack p={[3, 4, 6]} spacing={[2, 3, 4]}>
      {posts.map((p) => {
        return (
          <Box boxShadow="lg" w="100%" bg={"white"} key={p.id}>
            <Link to={`/${p.id}`}>
              <Stack  p={[3, 6]} direcion={["row"]}>
                <Text>{p.id}</Text>
                <Heading size="md">{p.title}</Heading>
              </Stack>
            </Link>
          </Box>
        );
      })}
    </VStack>
  );
};

export default PostList;
