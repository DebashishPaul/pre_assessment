import React from "react";
import Navbar from "../common/Navbar";

const ParentLayout = ({ Component }) => {
  return (
    <div className="flex">
      <Navbar />
      <Component />
    </div>
  );
};

export default ParentLayout;
