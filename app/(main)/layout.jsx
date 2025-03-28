import React from "react";
import Appheader from "./_components/Appheader";

function Dashboardlayout({ children }) {
  return (
    <div>
      <Appheader />
      {children}
    </div>
  );
}

export default Dashboardlayout;
