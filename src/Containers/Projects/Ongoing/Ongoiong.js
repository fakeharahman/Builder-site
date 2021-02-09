// import { Card } from '@material-ui/core'
import { Box } from "@material-ui/core";
import React from "react";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import SmolProjectCard from "../../../Components/SmolProjectCard/SmolProjectCard";
import Img1 from "../../../assets/gilanie.jpg";
import Img2 from "../../../assets/1.jpg";
import Img3 from "../../../assets/2.jpg";

export default function Ongoing() {
  let posts = [
    { title: "Shad Plaza", url: Img1 },
    { title: "building 2", url: Img2 },
    { title: "Shad Plaza", url: Img3 },
  ].map((building) => {
    return <SmolProjectCard title={building.title} url={building.url} />;
  });
  return (
    <Box bgcolor='antiquewhite'>
      <h1>Ongoing Projects</h1>
      <br />
      <ProjectCard
        title="Gilani Enclave"
        location="New Patliputra colony, patna"
        details="4 floors x 4 aparments (2 two bedroom 2 three bedroom)"
        img={Img1}
        color='aw'
      />
      <Box display="inline-block" my={4}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-around"
          boxSizing="none"
          py={0}
        >
          {posts}
        </Box>
      </Box>
    </Box>
  );
}
