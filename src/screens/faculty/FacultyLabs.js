import Header from "@/Components/Header";
import { Grid } from "@mantine/core";
import LabCard from "@/Components/LabCard";
import cpp from "@/assets/cpp.png"; //https://www.freepik.com/
import python from "@/assets/python.png";
import java from "@/assets/java.png";
import FacultyLabCard from "@/Components/faculty/FacultyLabCard";


export default function FacultyLabs() {
    return (
        <>
         <div
            style={{ height: "100vh", overflowY: "scroll" }}
          >
            <div style={{marginTop : "50px"}}>
            <Header title={"Assigned Labs 😄"} dec={"These Labs assign to you by the ADMIN, if changes required plz contact the admin"} />
            <Grid style={{ margin: "auto" }}>
              <FacultyLabCard
                key={1}
                logo={cpp}
                courseCode={"CPP203"}
                title={"C++"}
                dec={
                  "Basic C++ syntax and introduction to the c++ environment."
                }
                redirectLab={"/faculty/labs?lab=cpp"}
                // redirectTest={"/faculty/test/CPP203/"}
                redirectAnalysis={"/faculty/labs?lab=cpp&&analysis=true"}
                BG_color={"#0368FF"}
                progress={40}
              />
              <FacultyLabCard
                key={2}
                logo={python}
                courseCode={"PY204"}
                title={"Python"}
                dec={
                  "Simple and easy to learn the practicals and applied problems."
                }
                redirectLab={"/faculty/labs?lab=python"}
                redirectAnalysis={"/faculty/labs?lab=Python&&analysis=true"}
                BG_color={"#4CAF50"}
                progress={70}
              />
              <FacultyLabCard
                key={3}
                logo={java}
                courseCode={"JV232"}
                title={"Java"}
                dec={"Introductory course to Java with DSA practice problems "}
                redirectLab={"/faculty/labs?lab=python"}
                redirectAnalysis={"/faculty/labs?lab=java&&analysis=true"}
                BG_color={"#CF75FF"}
                progress={20}
              />
            </Grid>
          </div>
          </div>
        </>
    );
}