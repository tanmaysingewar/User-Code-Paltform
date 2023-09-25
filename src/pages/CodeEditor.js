import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import SplitPane, { Pane } from "split-pane-react";
import "split-pane-react/esm/themes/default.css";
import { useFullscreen} from "@mantine/hooks";
import { useRouter } from "next/router";
import {
  Button,
  Title,
  Text,
  useMantineColorScheme,
  ActionIcon,
  Tabs,
  Input,
  Modal,
} from "@mantine/core";
import {
  IconSettings,
  IconCommand,
  IconCpu,
  IconRotate2,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { Prism } from "@mantine/prism";

//#-------------------------  Main Component  ----------------------------- //
const CodeEditorLander = () => {
  const [isFocused, setIsFocused] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [clipboardArray, setClipboardArray] = useState([]); // Clipboard Array
  const [code, setCode] = useState("// Commented Code"); // Code Editor Value

  //#-------------- Screen Change Detection Code -----------//
  useEffect(() => {
    // when the user loses focus
    window.addEventListener("blur", () => {
      // document.title = "Blurred";
      setIsFocused(false);
    });

    // when the user's focus is back to your tab (website) again
    window.addEventListener("focus", () => {
      // document.title = "Focused";
    });

    return () => {
      window.removeEventListener("blur", () => {
        document.title = "Blurred";
      });
      window.removeEventListener("focus", () => {
        document.title = "Focused";
      });
    };
  }, []);

  //#-----------------  Countdown Timer [Time Limit for Lab] - 1 Hour  -----------------//
  const [timer, setTimer] = useState(3600); // Initial timer value: 1 hour in seconds

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [timer]);

  //#-----------------  Fullscreen and Color Schema  -----------------//
  const { toggle, fullscreen } = useFullscreen();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  let cardColor = "#25262B";
  let editorTheme = "vs-dark";
  let themeBase = "onedark";

  if (colorScheme === "dark") {
    cardColor = "#25262B";
    editorTheme = "vs-dark";
    themeBase = "onedark";
  } else {
    cardColor = "#f8f9fa";
    editorTheme = "vs";
    themeBase = "vs";
  }

  //#-----------------  Clipboard Monitoring and CodeEditor Value Handling  -----------------//

  function handleEditorChange(value, event) {
    setCode(value);
    window.addEventListener("paste", (e) => {
      setOpenModal(true);
      console.log(clipboardArray, "Pre : clipboardArray");
      const pastedText = e.clipboardData.getData("text/plain");
      const updatedArray = [...clipboardArray, pastedText];
      setClipboardArray(updatedArray);
      // Do something with the pasted content
      console.log("Pasted content:", pastedText);
    });
    return () => {
      window.removeEventListener("paste", (e) => {});
    };
  }

  //#-----------------  Split Pane Size  -----------------//
  const [sizes, setSizes] = useState([500, "40%", "auto"]);
  const [sizeTwo, setSizeTwo] = useState([500, "40%", "auto"]);

  const layoutCSS = {
    height: "100%",
    display: "flex",
  };

  //#-----------------  Lab Activity & Editor Setting  -----------------//
  const [activeLab, setActiveLab] = useState(false);

  function setEditorTheme(monaco) {
    monaco.editor.defineTheme("onedark", {
      base: editorTheme,
      inherit: true,
      rules: [],
      colors: {
        "editor.background": cardColor,
      },
    });
  }

  //#-----------------  Enter Lab handler  -----------------//
  const onClickEnterLab = () => {
    toggle();
    return setActiveLab(true);
  };

  //#-----------------  If Out of Focus  -----------------//
  if (!isFocused) {
    return (
      <>
        <Timer setIsFocused={setIsFocused} isFullscreen={fullscreen} />
      </>
    );
  }
  // #-----------------  If In Focus [Main render Component]  -----------------//
  return (
    <div style={{ height: "100vh" }} className="ResizablePanel" type="text">
      {/* // # ---- Modal ---- // */}
      <Modal
        opened={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        title="Clip Board Monitoring"
        centered
        withCloseButton={false}
      >
        {/* Modal content */}
        <h3>Copy paste detected</h3>
        <Text size={"sm"}>
          We will keep track of your code for further analysis
        </Text>
        {clipboardArray.map((item) => {
          return (
            <Prism language="tsx" style={{ marginTop: "5px" }}>
              {item}
            </Prism>
          );
        })}
      </Modal>

      {/* // # ---- [Editor Display Code] ---- // */}
      {fullscreen && activeLab ? (
        // Enter Code Here
        <>
          <SplitPane
            split="vertical"
            sizes={sizes}
            onChange={setSizes}
            style={{ height: "100vh" }}
          >
            <Pane minSize={"20%"} maxSize="70%">
              <div style={{ ...layoutCSS }}>
                <ProblemStatement />
              </div>
            </Pane>
            <div
              style={{ height: "95vh", padding: "10px 10px 10px 5px" }}
              className="ResizablePanel"
              type="text"
            >
              {/* // # ---- Top Action Buttons ---- //  */}
              <div
                style={{
                  margin: "0 0 8px 5px",
                  padding: "0 0 5px 0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontWeight: 600 }}>C++</Text>
                <div style={{ display: "flex" }}>
                  <ActionIcon variant="light" style={{ marginRight: "5px" }}>
                    <IconRotate2 size="1rem" />
                  </ActionIcon>
                  <ActionIcon variant="light" style={{ marginRight: "5px" }}>
                    <IconCommand size="1rem" />
                  </ActionIcon>
                  <ActionIcon variant="light" style={{ marginRight: "5px" }}>
                    <IconCpu size="1rem" />
                  </ActionIcon>
                  <ActionIcon variant="light" style={{ marginRight: "5px" }}>
                    <IconSettings size="1rem" />
                  </ActionIcon>
                  <ActionIcon
                    variant="filled"
                    color="green"
                    style={{ margin: "0 10px 0 10px", width: "40px" }}
                  >
                    <IconPlayerPlayFilled size="1rem" />
                  </ActionIcon>
                </div>
              </div>
              {/* // # ---- Editor ---- // */}
              <SplitPane
                split="horizontal"
                sizes={sizeTwo}
                onChange={setSizeTwo}
              >
                <Pane minSize={"20%"} maxSize="70%">
                  <div style={{ ...layoutCSS, paddingBottom: "5px" }}>
                    <div
                      style={{
                        ...layoutCSS,
                        background: cardColor,
                        padding: "5px",
                        height: "100%",
                        borderRadius: "10px",
                        paddingBottom: "10px",
                        width: "-webkit-fill-available",
                      }}
                    >
                      <Editor
                        theme="onedark"
                        defaultLanguage="cpp"
                        value={code}
                        onChange={handleEditorChange}
                        colorDecorators={true}
                        selectionClipboard={false}
                        beforeMount={setEditorTheme}
                        onPaste={(e) => {
                          e.preventDefault();
                        }}
                      />
                    </div>
                  </div>
                </Pane>
                {/* //#------ Test Cases and Code Submission */}
                <div style={{ paddingTop: "5px", height: "100%" }}>
                  <TestCaseAndResult timer={timer} />
                </div>
              </SplitPane>
            </div>
          </SplitPane>
        </>
      ) : // #------ if its not full screen and active lab is true ------//
      !fullscreen && activeLab ? (
        <Timer setIsFocused={setIsFocused} isFullscreen={fullscreen} />
      ) : (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection: "column",
          }}
        >
          <Text style={{ fontSize: "24px", fontWeight: "600" }}>Enter Lab</Text>
          <Text style={{ fontSize: "16px", fontWeight: "500" }}>
            From now you can't change the screen
          </Text>
          <Button
            onClick={() => onClickEnterLab()}
            color={fullscreen ? "red" : "blue"}
            style={{ marginTop: "40px" }}
          >
            {fullscreen ? "Exit lab" : "Enter the lab"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CodeEditorLander;

// #-------------------------  Sub Components  ----------------------------- //

// #-------------------------  Problem Statement  -------------------------- //
const ProblemStatement = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  let cardColor = "#25262B";

  if (colorScheme === "dark") {
    cardColor = "#25262B";
  } else {
    cardColor = "#f8f9fa";
  }
  return (
    <div
      style={{
        padding: "10px 5px 10px 10px",
        height: "95vh",
        width: "100%",
      }}
    >
      {/* //#------- Title ------ */}
      <div
        style={{ margin: "0 0 5px 5px", padding: "0 0 5px 0", display: "flex" }}
      >
        <Image src={logo} width={30} height={30} />
        <Text
          size={"xl"}
          style={{
            fontWeight: "700",
            marginLeft: "5px",
            fontFamily: "cursive",
            // marginTop: "5px",
            // marginBottom: "-5px",
          }}
        >
          E-TantraShala
        </Text>
      </div>
      <div
        style={{
          borderRadius: "10px",
          background: cardColor,
          padding: "20px",
          height: "100%",
          overflowY: "scroll",
        }}
      >
        <div style={{ height: "100%" }}>
          <div style={{ paddingBottom: "20px" }}>
            <Title order={2}>Problem Statement</Title>
            <Text size="sm">
              Given a string S, find the length of its longest substring that
              does not have any repeating characters.
            </Text>
          </div>
          {/* Function Description*/}
          <div style={{ paddingBottom: "20px" }}>
            <Title order={4}>Function Description</Title>
            <Text size="sm">
              Complete the function longestSubstring() which takes the string S
              as input and returns the length of the longest substring without
              any repeating characters.
            </Text>
          </div>

          <div style={{ paddingBottom: "20px" }}>
            {/* Input Format */}
            <div style={{ paddingBottom: "10px" }}>
              <Title order={4}>Input Format</Title>
              <Text size="sm">The only argument given is string S.</Text>
            </div>

            <div style={{ paddingBottom: "10px" }}>
              {/* Output Format */}
              <Title order={4}>Output Format</Title>
              <Text size="sm">
                Return the length of the longest substring without any repeating
                characters.
              </Text>
            </div>
            {/* Constraints */}
            <div style={{ paddingBottom: "10px" }}>
              <Title order={4}>Constraints</Title>
              <Text size="sm">{`1 <= length of string <= 100000`}</Text>
            </div>
            {/* For Example */}
            <div style={{ paddingBottom: "10px" }}>
              <Title order={4}>For Example</Title>
              <Text size="sm">Input 1:</Text>
              <Text size="sm"> S = "abcabcbb"</Text>
              <Text size="sm">Output 1:</Text>
              <Text size="sm"> 3</Text>
              <Text size="sm">Explanation 1:</Text>
              <Text size="sm">
                {" "}
                The longest substring without any repeating characters is "abc".
              </Text>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Text size="sm">Input 2:</Text>
              <Text size="sm"> S = "bbbbb"</Text>
              <Text size="sm">Output 2:</Text>
              <Text size="sm"> 1</Text>
              <Text size="sm">Explanation 2:</Text>
              <Text size="sm">
                {" "}
                The longest substring without any repeating characters is "b".
              </Text>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Text size="sm">Input 3:</Text>
              <Text size="sm"> S = "pwwkew"</Text>
              <Text size="sm">Output 3:</Text>
              <Text size="sm"> 3</Text>
              <Text size="sm">Explanation 3:</Text>
              <Text size="sm">
                {" "}
                The longest substring without any repeating characters is "wke".
              </Text>
            </div>
            <div style={{ paddingBottom: "10px" }}>
              <Text size="sm">Input 3:</Text>
              <Text size="sm"> S = "pwwkew"</Text>
              <Text size="sm">Output 3:</Text>
              <Text size="sm"> 3</Text>
              <Text size="sm">Explanation 3:</Text>
              <Text size="sm">
                {" "}
                The longest substring without any repeating characters is "wke".
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// #-------------------------  Change Screen Timer  -------------------------- //
const Timer = ({ setIsFocused, isFullscreen }) => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(5);
  const { toggle, fullscreen } = useFullscreen();

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  const onClickGoBack = () => {
    if (isFullscreen === true) {
      return router.back(), toggle();
    }
    return router.back();
  };

  const onClickRejoin = () => {
    if (isFullscreen === true) {
      return setIsFocused(true);
    }
    return setIsFocused(true), toggle();
  };

  return (
    <div
      style={{
        backgroundColor: "#25262B",
        borderRadius: "10px",
        padding: "5px",
        height: "100%",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{ textAlign: "center" }}>
        {seconds > 0 ? (
          <>
            <div>
              <p>{seconds} seconds</p>
              <Title>Screen Change Detected</Title>
              <Text>Press rejoin to join scission</Text>
              <Button onClick={() => onClickRejoin()}>Rejoin scission</Button>
            </div>
          </>
        ) : (
          <div>
            <p>Time's up!</p>
            <Title>Screen Change Detected</Title>
            <Button onClick={onClickGoBack}>Go back to Labs</Button>
          </div>
        )}
      </div>
    </div>
  );
};

// #-------------------------  Test Case and Result  -------------------------- //
const TestCaseAndResult = ({ timer }) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { toggle, fullscreen } = useFullscreen();
  let cardColor = "#25262B";
  let editorTheme = "vs-dark";
  let themeBase = "onedark";

  if (colorScheme === "dark") {
    cardColor = "#25262B";
    editorTheme = "vs-dark";
    themeBase = "onedark";
  } else {
    cardColor = "#f8f9fa";
    editorTheme = "vs";
    themeBase = "vs";
  }

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        backgroundColor: cardColor,
        borderRadius: "10px",
        height: "100%",
      }}
    >
      <Tabs keepMounted={false} defaultValue="testCases" color="green">
        {/* //# ----- Header ----- */}
        <Tabs.List>
          <Tabs.Tab value="testCases">
            <Text style={{ fontWeight: "bold" }}>Test Case</Text>
          </Tabs.Tab>
          <Tabs.Tab value="results">
            <Text style={{ fontWeight: "bold" }}>Results</Text>
          </Tabs.Tab>
        </Tabs.List>

        {/* //#---- Test cases ----*/}
        <Tabs.Panel value="testCases" style={{ marginTop: "10px", margin: "10px" }}>
          <Tabs variant="pills" defaultValue="case1">
            <Tabs.List> 
              {/* //# -- Case 1 [Tab] -- */}
              <Tabs.Tab
                value="case1"
                color="teal"
                style={{
                  padding: "2px 10px 2px 10px",
                  margin: 0,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Case 1</Text>
              </Tabs.Tab>
              {/* //# -- Case 2 [Tab] -- */}
              <Tabs.Tab
                value="case2"
                color="teal"
                style={{
                  padding: "2px 10px 2px 10px",
                  margin: 0,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Case 2</Text>
              </Tabs.Tab>
              {/* //# -- Case 3 [Tab] -- */}
              <Tabs.Tab
                value="case3"
                color="teal"
                style={{
                  padding: "2px 10px 2px 10px",
                  margin: 0,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>Case 3</Text>
              </Tabs.Tab>
            </Tabs.List>

            {/* //# -- Case 1 [Panel] -- */}  
            <Tabs.Panel value="case1" pt="xs">
              <div>
                <Text>Input :</Text>
                <Input id="input-demo" value={"abcabcbb"} />
                <Text>Output : </Text>
                <Input id="input-demo" value={"3"} />
              </div>
            </Tabs.Panel>
            
            {/* //# -- Case 2 [Panel] -- */}
            <Tabs.Panel value="case2" pt="xs">
              <div>
                <Text>Input :</Text>
                <Input id="input-demo" value={"bbbbb"} />
                <Text>Output : </Text>
                <Input id="input-demo" value={"1"} />
              </div>
            </Tabs.Panel>
            
            {/* //# -- Case 3 [Panel] -- */}
            <Tabs.Panel value="case3" pt="xs">
              <div>
                <Text>Input :</Text>
                <Input id="input-demo" value={"pwwkew"} />
                <Text>Output : </Text>
                <Input id="input-demo" value={"3"} />
              </div>
            </Tabs.Panel>
          </Tabs>
        </Tabs.Panel>

        {/* //#---- Results ----*/}
        <Tabs.Panel value="results">
          <div>
            <Text
              style={{
                fontWeight: "600",
                fontSize: "15px",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Run or Submit the code to see results
            </Text>
          </div>
        </Tabs.Panel>
      </Tabs>

      {/* //#---- Bottom Timer and Exit Button ----*/}
      <div
        style={{
          backgroundColor: colorScheme === "dark" ? "#2e3035" : "#ececec", //"#f8f9fa"
          width: "100%",
          padding: "10px",
          position: "absolute",
          bottom: "0px",
          borderRadius: "0 0 10px 10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            <Text style={{ fontWeight: "500", fontSize: "12px" }}>
              Time Left :
            </Text>
            <Text style={{ fontWeight: "bold" }}>
              <p>{formatTime(timer)}</p>
            </Text>
          </div>
          <Button
            onClick={toggle}
            color={"red"}
            style={{ marginTop: "auto", marginBottom: "auto" }}
          >
            {"Exit Lab"}
          </Button>
        </div>
      </div>
    </div>
  );
};