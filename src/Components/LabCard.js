import { Card, Text, Badge, Button, Group, Box, Progress } from "@mantine/core";
import Router from "next/router";
import medal from "../assets/medal.png";
import Image from "next/image";

export default function LabCard({
  logo,
  title,
  dec,
  courseCode,
  progress,
  redirectLab,
  redirectTest,
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
        <Text style={{ fontWeight: "700", color: "#fff", fontSize: "15px", marginTop : "5px" }}>
            Faculty Name : Lorem Ipsum
          </Text>
          <Text style={{ fontWeight: "500", color: "#fff", fontSize: "12px" }}>
            {dec}
          </Text>
          
          <Text
            style={{
              fontWeight: "700",
              color: "#fff",
              fontSize: "13px",
              marginTop: "10px",
            }}
          >
            Progress : {progress}%
          </Text>
          <Progress
            size="xs"
            radius="xl"
            sections={[{ value: progress, color: "#fff", label: "40%" }]}
            style={{
              marginTop: "5px",
              backgroundColor: "rgba(255, 255, 255, 0.51)",
            }}
          />
        </div>
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
          {/* <Button
            style={{
              borderRadius: "20px",
              backgroundColor: "#fff",
              color: "#000",
              marginLeft: "5px",
            }}
            onClick={() => Router.push(redirectTest)}
          >
            Take a Test
          </Button> */}
        </div>
      </div>
      <div style={{marginTop : 'auto',textAlign : "center",width : "30%"}}>
        <Image src={medal} alt="Norway" height={60} style={{textAlign : 'center'}}  />
        <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: "13px",
              marginTop: "15px",
              textAlign : "center",
              margin : "auto"
            }}
          >You Earned </Text>
        <Text
            style={{
              fontWeight: "700",
              color: "#fff",
              fontSize: "15px",
              marginTop: "15px",
              textAlign : "center",
              margin : "auto"
            }}
          >BEGINNER</Text>
           <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: "13px",
              marginTop: "15px",
              textAlign : "center",
              margin : "auto"
            }}
          >medal </Text>
         <Box style={{
          padding : "10px",
          backgroundColor : "rgba(255, 255, 255, 0.20)",
          borderRadius : "10px",
          margin : "auto",
          marginTop : "10px",
          width : "100px",
         }}>
         <Text
            style={{
              fontWeight: "800",
              color: "#fff",
              fontSize: "15px",
              marginTop: "15px",
              textAlign : "center",
              margin : "auto"
            }}
          >200 </Text>
          <Text
            style={{
              fontWeight: "500",
              color: "#fff",
              fontSize: "13px",
              marginTop: "15px",
              textAlign : "center",
              margin : "auto"
            }}
          >Your Score </Text>
         </Box>
      </div>
    </Box>
  );
}
