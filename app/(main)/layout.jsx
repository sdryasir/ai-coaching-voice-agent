import React from "react";
import Appheader from "./_components/Appheader";

function Dashboardlayout({ children }) {
  return (
    <div>
      <Appheader />
      <div className="p-10 mt-20 md:p-20 lg:p-32 xl:p-48 2xl:p-64">
        {children}
      </div>
    </div>
  );
}

export default Dashboardlayout;
