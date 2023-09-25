import React, { useState } from "react";
// import {} from "@tabler/icons-react";
import facultyNavData from "@/Components/faculty/facultyNavData";
import SideNav from "@/Components/SideNav";
import Labs from "@/screens/students/Labs";
import BackNav from "@/Components/BackNav";
import Header from "@/Components/Header";
import {
  Button,
  useMantineColorScheme,
  Input,
  Select,
  Text,
  Badge,
  Modal,
  Title,
  ScrollArea,
  ActionIcon
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import { IconPlayerPlayFilled } from "@tabler/icons-react";

export default function LabAnalysis() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <>
      <Modal
        opened={openModel}
        onClose={() => setOpenModel(false)}
        centered
        withCloseButton={false}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        <div style={{ padding: "10px" }}>
          <Title style={{ textAlign: "left", fontSize: "20px",marginBottom : "10px" }}>
            Submitted Code
          </Title>
          <Prism language="cpp">
            {`#include <iostream>
using namespace std;

int main() {
  int x = 20;
  int y = 18;
  if (x > y) {
    cout << "x is greater than y";
  }  
  return 0;
}
`}
          </Prism>
          <ActionIcon
                    variant="filled"
                    color="green"
                    style={{ width: "40px",marginTop : "10px" }}
                  >
                    <IconPlayerPlayFilled size="1rem" />
                  </ActionIcon>
        </div>
      </Modal>
      <div style={{ overflowY: "scroll", height: "100vh", width: "100%" }}>
        <div style={{ marginTop: "60px", width: "95%" }}>
          <BackNav dataTrack={[]} />
          <Header
            title="Lab Analysis : C++"
            dec={"Setting of the this portal reflected all over the platform"}
          />
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                display: "flex",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            >
              <Input
                placeholder="Search by Student Name, Reg No & Phone No"
                style={{
                  width: "500px",
                  marginRight: "10px",
                }}
              />
              <Button style={{ marginRight: "20px" }}>Search</Button>
              <Select
                withAsterisk
                // value="pr_1"
                placeholder="Select Practical"
                // error="Select Department"
                data={[
                  { value: "pr_1", label: "Practical 1 : Hello World" },
                  {
                    value: "pr_2",
                    label: "Practical 2 : Variables decelerations",
                  },
                  { value: "pr_3", label: "Practical 3 : If & Else Statement" },
                  { value: "pr_4", label: "Practical 4 : Declaring Functions" },
                  { value: "pr_5", label: "Practical 5 : Loops" },
                  { value: "pr_6", label: "Practical 6 : Arrays" },
                  { value: "pr_7", label: "Practical 7" },
                  { value: "pr_8", label: "Practical 8" },
                  { value: "pr_9", label: "Practical 9" },
                  { value: "pr_10", label: "Practical 10" },
                ]}
              />
              <Select
                withAsterisk
                // value="all"
                placeholder="Select Problem"
                style={{ marginLeft: "20px" }}
                // error="Select Department"
                data={[
                  { value: "all", label: "All" },
                  { value: "p_1", label: "Problem 1" },
                  { value: "p_2", label: "Problem 2" },
                  { value: "p_3", label: "Problem 3" },
                  { value: "p_4", label: "Problem 4" },
                  { value: "p_5", label: "Problem 5" },
                  { value: "p_6", label: "Problem 6" },
                  { value: "p_7", label: "Problem 7" },
                  { value: "p_8", label: "Problem 8" },
                  { value: "p_9", label: "Problem 9" },
                  { value: "p_10", label: "Problem 10" },
                ]}
              />
            </div>
          </div>
          <div>
            <Analysis />
            <SingleStudentsAnalysis setOpenModel={setOpenModel} />
          </div>
          <div
            style={{
              margin: "auto",
              textAlign: "center",
              width: "100%",
              margin: "20px",
            }}
          >
            <Button style={{ margin: "auto", textAlign: "center" }}>
              Load More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

const SingleStudentsAnalysis = ({ setOpenModel }) => {
  return (
    <>
      <table
        style={{
          borderCollapse: "separate",
          width: "100%",
          borderSpacing: "0 10px",
        }}
      >
        <tr style={{ textAlign: "center", padding: "20px" }}>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Student Name
            </Text>
          </th>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Reg No.
            </Text>
          </th>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Date
            </Text>
          </th>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Time
            </Text>
          </th>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Status
            </Text>
          </th>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              Pass TC
            </Text>
          </th>
          <th>
            <Text
              style={{
                fontWeight: "800",
                fontSize: "15px",
                marginBottom: "10px",
              }}
            >
              View Submissions
            </Text>
          </th>
        </tr>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
          return (
            <tr
              style={{
                textAlign: "center",
                backgroundColor: "#25262B",
              }}
            >
              <td style={{ padding: "10px" }}>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>
                  Lorem Ipsum
                </Text>
              </td>
              <td style={{ padding: "10px" }}>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>
                  22030041
                </Text>
              </td>
              <td style={{ padding: "10px" }}>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>
                  12 Dec 2023
                </Text>
              </td>
              <td style={{ padding: "10px" }}>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>
                  24:45:04
                </Text>
              </td>
              <td style={{ padding: "10px" }}>
                <Badge color="green">Executed</Badge>
              </td>
              <td style={{ padding: "10px" }}>
                <Text style={{ fontWeight: "500", fontSize: "15px" }}>25</Text>
              </td>
              <td style={{ padding: "10px" }}>
                <Button onClick={() => setOpenModel(true)}>
                  View Submissions
                </Button>
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

const Analysis = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          padding: "20px",
          borderRadius: "10px",
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <div style={{ width: "50%" }}>
          <Text
            style={{
              fontWeight: "800",
              fontSize: "15px",
              marginBottom: "5px",
            }}
          >
            Lab Analysis
          </Text>
          <div>
            <Badge color="white"> Total Students : 50</Badge>
          </div>
          <Text
            style={{
              fontWeight: "800",
              fontSize: "15px",
              marginBottom: "5px",
              marginTop: "10px",
            }}
          >
            Executions
          </Text>
          <div>
            <Badge color="green">Successfully : 24</Badge>
            <Badge style={{ marginLeft: "10px" }} color="red">
              Failed : 24
            </Badge>
          </div>
          <div style={{ marginTop: "5px" }}>
            <Badge color="yellow">Partially : 24</Badge>
            <Badge style={{ marginLeft: "10px" }} color="white">
              Not Executed : 24
            </Badge>
          </div>
        </div>
      </div>
    </>
  );
};
