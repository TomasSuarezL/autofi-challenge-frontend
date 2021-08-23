import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentAdded } from "../store/postsSlice";

const NewComment = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.posts);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      commentAdded({
        id:
          Math.max.apply(
            Math,
            comments.map(function (o) {
              return o.id;
            })
          ) + 1, // This is a quick and dirty way to find a unique ID to use as key
        postId: comments[0].postId, // This isn't a great way to obtain the postID either
        name: name,
        email: email,
        body: body,
      })
    );
    setName("")
    setEmail("")
    setBody("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack mt={[2,3,4]} p={[2,3,6]} border="1px" borderColor="gray.100" spacing={[2,3,4]} align="start">
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="test@test.com"
            size="md"
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            placeholder="Comment title"
            size="md"
            value={name}
            onChange={(event) => setName(event.currentTarget.value)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Comment</FormLabel>
          <Input
            type="text"
            placeholder="Comment body"
            size="md"
            value={body}
            onChange={(event) => setBody(event.currentTarget.value)}
          />
        </FormControl>
        <Button type="submit">Post Comment</Button>
      </VStack>
    </form>
  );
};

export default NewComment;
