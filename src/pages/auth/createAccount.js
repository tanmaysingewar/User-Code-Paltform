import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Stepper,
  NumberInput,
  Radio,
  Textarea,
  Progress, Popover, Box,PinInput, Center
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import Router from "next/router";
import { useState } from "react";

import { IconX, IconCheck } from '@tabler/icons-react';

export default function AuthenticationTitle() {
  const [active, setActive] = useState(0);

  const data = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];

  const enrollerYear = [
    { value: "1", label: "First" },
    { value: "2", label: "Second" },
    { value: "3", label: "Third" },
    { value: "4", label: "Fourth" },
  ];
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  return (
    <>
      <Stepper
        active={active}
        onStepClick={setActive}
        breakpoint="sm"
        style={{ width: "60%", margin: "auto", marginTop: "50px" }}
      >
        <Stepper.Step label="First step" description="Create an account">
          <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
              })}
              style={{width : "100%",marginTop : "50px"}}
            >
              Step 1 : Create new account!
            </Title>
          <Container size={420} >
            
            <Text color="dimmed" size="sm" align="center" mt={5}>
              Join the new journey{" "}
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <TextInput
                label="Name"
                placeholder="you@mantine.dev"
                required
                mt="md"
              />
              <TextInput
                label="Email"
                placeholder="you@mantine.dev"
                required
                mt="md"
              />
              {/* <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt="md"
              /> */}
              <PasswordInputAdvance />
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button style={{backgroundColor : "#0368FF"}} onClick={nextStep}>Next step</Button>
              </Group>
            </Paper>
          </Container>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Additional details">
          <Container size={550} my={40} style={{ paddingTop: "5vh" }}>
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
              })}
            >
              Step 2 : Additional details!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
              Tell us more about yourself{" "}
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Group>
                <Radio.Group
                  name="gender"
                  label="Select your gender"
                  withAsterisk
                  style={{ width: "50%" }}
                  mt="md"
                >
                  <Group mt="xs">
                    <Radio value="react" label="Male" />
                    <Radio value="svelte" label="Female" />
                  </Group>
                </Radio.Group>
                <DateInput
                defaultLevel={"year"}
                mt="md"
                label={"Date of Birth"}
                placeholder="Enter your DOB"
                required
                style={{ width: "240px" }}
                error="Enter date"
              />
              </Group>

              {/* <TextInput label="Date of Birth" type='Date' placeholder="you@mantine.dev" required  mt="md"/> */}
              <NumberInput
                defaultValue={1}
                placeholder="Your enrolled year"
                label="In which year you studying"
                withAsterisk
                mt="md"
              />
              <NumberInput
                defaultValue={1}
                placeholder="Your age"
                label="Current semester"
                withAsterisk
                mt="md"
              />
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep} style={{backgroundColor : "#0368FF"}}>Next step</Button>
              </Group>
            </Paper>
          </Container>
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Academic Details">
        <Container size={550} my={40} style={{ paddingTop: "5vh" }}>
            <Title
              align="center"
              sx={(theme) => ({
                fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                fontWeight: 900,
              })}
            >
              Step 3 : Academic Details!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
              Tell us more about your academic details{" "}
            </Text>
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
              <Group>
                
              <NumberInput
                type="number"
                placeholder="Enrollment Numeber"
                label="Enrollment Numeber"
                withAsterisk
                mt="md"
                style={{ width: "50%" }}
              />
               <NumberInput
                type="number"
                placeholder="Class Roll Number"
                label="Class Roll Number"
                withAsterisk
                mt="md"
                style={{ width: "45%" }}
              />
              </Group>

              {/* <TextInput label="Date of Birth" type='Date' placeholder="you@mantine.dev" required  mt="md"/> */}
              <Group>
                
              <NumberInput
                type="number"
                placeholder="Parents Phone Number"
                label="Parents Phone Number"
                withAsterisk
                mt="md"
                style={{ width: "50%" }}
              />
               <NumberInput
                type="number"
                placeholder="Student Phone Number"
                label="Student Phone Number"
                withAsterisk
                mt="md"
                style={{ width: "45%" }}
              />
              </Group>
              <Textarea
                placeholder="Address"
                label="Enter the Address"
                withAsterisk
                mt="md"
              />
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep} style={{backgroundColor : "#0368FF"}}>Next step</Button>
              </Group>
            </Paper>
          </Container>
        </Stepper.Step>
        <Stepper.Completed>
          <div style={{textAlign : "center", marginTop :"60px"}}>
          <Title>You have successfully joined [Name]</Title>
          <Text color="dimmed" size="sm" align="center" mt={5}>
              Enter the pin send to your mail ID{" "}
            </Text>
            <Center style={{marginTop : "20px"}}>
            <PinInput error={false} />
            </Center>
            <Button style={{marginTop : "20px",backgroundColor : "#0368FF"}} onClick={() => Router.push
            ("/auth/login")} >Submit & Continue </Button>
          </div>
        </Stepper.Completed>
      </Stepper>
    </>
  );
}



function PasswordRequirement({ meets, label }){
  return (
    <Text
      color={meets ? 'teal' : 'red'}
      sx={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />} <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function PasswordInputAdvance() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Box maw={340} mx="auto" style={{marginTop : "10px"}}>
      <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
        <Popover.Target>
          <div
            onFocusCapture={() => setPopoverOpened(true)}
            onBlurCapture={() => setPopoverOpened(false)}
          >
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="Your password"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
            />
          </div>
        </Popover.Target>
        <Popover.Dropdown>
          <Progress color={color} value={strength} size={5} mb="xs" />
          <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
          {checks}
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
}