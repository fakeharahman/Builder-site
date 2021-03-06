// import { Card } from '@material-ui/core'
import { Box } from "@material-ui/core";
import React from "react";
import ProjectCard from "../../../Components/ProjectCard/ProjectCard";
import SmolProjectCard from "../../../Components/SmolProjectCard/SmolProjectCard";
import Img1 from "../../../assets/2.jpg";
import Img2 from "../../../assets/1.jpg";

export default function Completed() {
  let posts = [
    { title: "Shad Plaza", url: Img1 },
    { title: "building 2", url: Img2 },
    { title: "Shad Plaza", url: Img1 },
  ].map((building) => {
    return <SmolProjectCard title={building.title} url={building.url} />;
  });
  return (
    <div>
      <h1>Completed Projects</h1>
      <br />
      <ProjectCard
        title="Qamar plaza"
        location="New Patliputra colony, patna"
        details="4 floors x 4 aparments (2 two bedroom 2 three bedroom)"
        img={Img2}
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
    </div>
  );
}
