import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import Container from "../Shared/Container";

const MainHeroSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-screen items-center justify-center">
        <LeftSide />
        <RightSide />
      </div>
    </Container>
  );
};

export default MainHeroSection;
