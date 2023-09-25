import {
  Card,
  Text,
  Badge,
  Button,
  Group,
  Box,
  Progress,
  Avatar,
} from "@mantine/core";
import Router from "next/router";
import medal from "@/assets/medal.png";
import Image from "next/image";

export default function FacultyLabCard({
  logo,
  title,
  dec,
  courseCode,
  progress,
  redirectLab,
  redirectAnalysis,
  BG_color,
}) {
  return (
    <Box
      style={{
        backgroundColor: BG_color,
        padding: "20px",
        borderRadius: "10px",
        width: "500px",
        margin: "8px",
        display: "flex",
      }}
    >
      <div style={{ width: "70%" }}>
        <div style={{ display: "flex" }}>
          <Image src={logo} alt="Norway" height={50} />
          <div style={{ marginLeft: "20px" }}>
            <Text
              style={{ fontWeight: "700", color: "#fff", fontSize: "20px" }}
            >
              {title}
            </Text>
            <Text
              style={{ fontWeight: "400", color: "#fff", fontSize: "12px" }}
            >
              {courseCode}
            </Text>
          </div>
        </div>
        <div style={{ marginTop: "10px", width: "90%" }}>
          <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: "12px",
              paddingLeft: "5px",
            }}
          >
            {dec}
          </Text>
        </div>
        <Box
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.20)",
            borderRadius: "10px",
            padding: "8px 0px 10px 10px",
            marginTop: "10px",
          }}
        >
          <div>
            <Text
              style={{
                fontWeight: "600",
                color: "#fff",
                fontSize: "15px",
              }}
            >
              Details
            </Text>
            <div style={{ display: "flex" }}>
              <div>
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                >
                  Year : II
                </Text>
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                >
                  Term : Even 2024
                </Text>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                >
                  Branch : AIDS
                </Text>
                <Text
                  style={{
                    fontWeight: "500",
                    color: "#fff",
                    fontSize: "12px",
                  }}
                >
                  Section : A
                </Text>
              </div>
            </div>
          </div>
        </Box>
        <div style={{ marginTop: "20px" }}>
          <Button
            style={{
              backgroundColor: "#fff",
              borderRadius: "50px",
              color: "#000",
            }}
            radius={"xl"}
            onClick={() => Router.push(redirectLab)}
            loading={false}
            loaderProps={{ color: "#0368FF" }}
          >
            Open Lab
          </Button>
          <Button
            style={{
              marginLeft: "5px",
              backgroundColor: "#fff",
              borderRadius: "50px",
              color: "#000",
            }}
            radius={"xl"}
            onClick={() => Router.push(redirectAnalysis)}
            loading={false}
            loaderProps={{ color: "#fff" }}
          >
            Lab Analysis
          </Button>
        </div>
      </div>
      <div style={{ textAlign: "center", width: "30%", margin: "auto" }}>
        <Box
          style={{
            padding: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.20)",
            borderRadius: "10px",
            margin: "auto",
            width: "100px",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              color: "#fff",
              fontSize: "15px",
              marginTop: "15px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            200{" "}
          </Text>
          <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: "13px",
              marginTop: "15px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Students
          </Text>
        </Box>
        <Box
          style={{
            padding: "10px",
            backgroundColor: "rgba(255, 255, 255, 0.20)",
            borderRadius: "10px",
            margin: "auto",
            marginTop: "10px",
            width: "100px",
          }}
        >
          <Text
            style={{
              fontWeight: "800",
              color: "#fff",
              fontSize: "15px",
              marginTop: "15px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            9{" "}
          </Text>
          <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: "13px",
              marginTop: "15px",
              textAlign: "center",
              margin: "auto",
            }}
          >
            Practicals
          </Text>
        </Box>
      </div>
    </Box>
  );
}
