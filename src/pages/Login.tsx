import React, { useState } from "react";
import { auth } from "../firebase";
import {
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { Box, Input, Button, Center, Text } from "@chakra-ui/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      const token = await user.getIdToken();
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Center height="100vh" flexDirection="column">
      <Text fontSize="3xl" as="b">
        Welcome to the GameHub !
      </Text>
      <br></br>
      <h1>Log In Page</h1>
      <br></br>
      <Box
        maxW="md"
        p="4"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="base"
        textAlign="center"
      >
        <form onSubmit={handleSubmit} className="login-form">
          <Input
            type="email"
            placeholder="Your Email"
            mb="4"
            isRequired
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Your Password"
            mb="4"
            isRequired
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" colorScheme="teal" size="md">
            Log In
          </Button>
        </form>
        <br></br>
        <p>
          Need to Signup? <Link to="/signup">Signup</Link>
        </p>
      </Box>
    </Center>
  );
};

export default Login;
