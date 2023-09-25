import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import Head from "next/head";

import Router from "next/router";

export default function AuthenticationTitle() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div style={{ paddingTop: "15vh" }}>
        <Container size={420} my={40}>
          <Title
            align="center"
            sx={(theme) => ({
              fontFamily: `Greycliff CF, ${theme.fontFamily}`,
              fontWeight: 900,
            })}
          >
            Welcome back!
          </Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
            Do not have an account yet?{" "}
            <Anchor
              size="sm"
              component="button"
              style={{Color : "#0368FF"}}
              onClick={() => Router.push("/auth/createAccount")}
            >
              Create account
            </Anchor>
          </Text>

          <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              fullWidth
              mt="xl"
              style={{backgroundColor : "#0368FF"}}
              onClick={() => Router.push("/student/labs")}
            >
              Sign in
            </Button>
          </Paper>
          <Text align="center" mt={20}>
            {`Go to Faculty `}
            <Anchor
              component="button"
              style={{Color : "#0368FF"}}
              onClick={() => Router.push("/auth/facultyLogin")}
            >
              Login
            </Anchor>
          </Text>
        </Container>
      </div>
    </>
  );
}
