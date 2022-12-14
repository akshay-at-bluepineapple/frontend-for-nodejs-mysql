import React from "react";
import DashboardSections from "./dashboard/DashboardSections";

function Dashboard() {
  console.log(localStorage.getItem("token"));
  return (
    <div className=" bg-black w-screen h-screen overflow-hidden">
      <div className="h-[3rem] w-screen bg-red-600 text-center flex items-center justify-center font-bold text-xl capitalize">
        <p>Perform CRUD operations for user database</p>
      </div>
      <DashboardSections />
    </div>
  );
}

export default Dashboard;
