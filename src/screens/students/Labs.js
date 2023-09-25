import Header from "@/Components/Header";
import { Grid } from "@mantine/core";
import LabCard from "@/Components/LabCard";
import cpp from "@/assets/cpp.png"; //https://www.freepik.com/
import python from "@/assets/python.png";
import java from "@/assets/java.png";


export default function Labs() {
    return (
        <>
         <div
            style={{height: "100vh", overflowY: "scroll"}}
          >
            <div style={{marginTop : "50px"}}>

            
            <Header title={"Assigned Labs 😄"} dec={"These Labs assign to you by the ADMIN, if changes required plz contact the admin"} />
            <Grid style={{ margin: "auto" }}>
              <LabCard
                key={1}
                logo={cpp}
                courseCode={"CPP203"}
                title={"C++"}
                dec={
                  "Basic C++ syntax and introduction to the c++ environment."
                }
                redirectLab={"/student/labs?lab=cpp"}
                // redirectTest={"/faculty/test/CPP203/"}
                BG_color={"#0368FF"}
                progress={40}
              />
              <LabCard
                key={2}
                logo={python}
                courseCode={"PY204"}
                title={"Python"}
                dec={
                  "Simple and easy to learn the practicals and applied problems."
                }
                redirectLab={"/student/labs?lab=python"}
                redirectTest={"/faculty/test/PY204/"}
                BG_color={"#4CAF50"}
                progress={70}
              />
              <LabCard
                key={3}
                logo={java}
                courseCode={"JV232"}
                title={"Java"}
                dec={"Introductory course to Java with DSA practice problems "}
                redirectLab={"/faculty/labs/JV232/labsProblemStatements"}
                redirectTest={"/faculty/test/JV232/"}
                BG_color={"#CF75FF"}
                progress={20}
              />
              <LabCard
                key={2}
                logo={python}
                courseCode={"PY204"}
                title={"Python"}
                dec={
                  "Simple and easy to learn the practicals and applied problems."
                }
                redirectLab={"/faculty/lab/PY204/labsProblemStatements"}
                redirectTest={"/faculty/test/PY204/"}
                BG_color={"#4CAF50"}
                progress={70}
              />
              <LabCard
                key={3}
                logo={java}
                courseCode={"JV232"}
                title={"Java"}
                dec={"Introductory course to Java with DSA practice problems "}
                redirectLab={"/faculty/labs/JV232/labsProblemStatements"}
                redirectTest={"/faculty/test/JV232/"}
                BG_color={"#CF75FF"}
                progress={20}
              />
            </Grid>
          </div>
          </div>
        </>
    );
}