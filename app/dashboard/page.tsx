import DashboardContainer from "@/src/Dashboard/DashboardContainer";
import React, { ReactElement } from "react";

export default function Dashboard(): ReactElement {
  console.log("SSR: Dashboard");
  return <DashboardContainer />;
}
