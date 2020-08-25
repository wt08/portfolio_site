import React, { useState } from "react";
import "./Navigation.css";
import ExpandNav from "../ExpandNav/ExpandNav";
import CollapseNav from "../CollapseNav/CollapseNav";

const Navigation = () => {
  return (
    <div className="navigation">
      <ExpandNav/>
      <CollapseNav />
    </div>
  );
};

export default Navigation;
