import DashboardContainer from "@/src/Dashboard/DashboardContainer";
import React, { ReactElement } from "react";

export default function Dashboard(): ReactElement {
  setInterval(() => {
    console.log("SSR");
  }, 2000);
  return <DashboardContainer />;
}
