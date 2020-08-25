import React from "react";
import { DashboardHeader } from "./dashboard-header";
import { ListContainer } from "./list-containet";
import "./styles/assignments.css";

export const Dashboard: React.FC<{
  setIsClickedOnViewHistory: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => {
  return (
    <div className="dashboardContainer">
      <DashboardHeader
        setIsClickedOnViewHistory={props.setIsClickedOnViewHistory}
      />
      <ListContainer />
    </div>
  );
};
