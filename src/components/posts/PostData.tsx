import { IconButton } from "@chakra-ui/button";
import { Heading, HStack, Text, VStack } from "@chakra-ui/layout";
import { ArrowBackIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "./Post.type";

const PostData: React.FC<{ post: Post }> = ({ post }: { post: Post }) => {
  return (
    <VStack boxShadow="lg" w="100%" p={[3, 6]} bg="white">
      <HStack w="100%">
        <Link to={`/`}>
          <IconButton variant="ghost" aria-label="Go Back" icon={<ArrowBackIcon />} />
        </Link>
        <Heading size="lg">{post.title}</Heading>
      </HStack>
      <Text fontSize="xl" p={[2, 3]}>
        {post.body}
      </Text>
    </VStack>
  );
};

export default PostData;
