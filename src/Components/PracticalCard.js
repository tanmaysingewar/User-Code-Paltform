import React, { useState } from "react";
// import {} from "@tabler/icons-react";
import { Button, Text, Title, useMantineColorScheme } from "@mantine/core";
import Router from "next/router";

export default function PracticalCard({ title, dec, color, show,setShow,index }) {

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    const setShowIndex = (index) => {
        if(show === index){
            setShow(null);
            return;
        }
        setShow(index);
    }
    
    let cardColor = "#25262B";

    if(colorScheme === "dark"){
        cardColor = "#25262B";
    }
    else{
        cardColor = "#f8f9fa";
    } 

  return (
    <>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          backgroundColor: cardColor,
          maxWidth: "600px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "20px",
            backgroundColor: color,
            borderRadius: "10px 0 0 10px",
          }}
        ></div>
        <div
          style={{ margin: "15px 15px 15px 10px" }}
          onClick={() => setShowIndex(index)}
        >
          <Title style={{ fontSize: "18px" }}>{title}</Title>
          <Text style={{ fontSize: "12px", lineHeight: "16px" }}>{dec}</Text>
        </div>
      </div>
      {show === index ? (
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <Button
            style={{
              borderRadius: "10px",
              backgroundColor: "#0368FF",
              color: "#fff",
            }}
            onClick={() => Router.push("/CodeEditor")}
          >
            Open Lab
          </Button>
          <Button
            style={{
              borderRadius: "10px",
              backgroundColor: "#B468DD",
              color: "#fff",
              marginLeft: "10px",
            }}
          >
            View Material
          </Button>
        </div>
      ) : null}
    </>
  );
}
