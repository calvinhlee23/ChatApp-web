"use client";

import { ReactElement, useContext } from "react";
import { DashboardContext } from "./context/dashboardContext";

export default function Hello(): ReactElement {
  const { isDefaultView, users } = useContext(DashboardContext);
  console.warn(
    "Client: Hello",
    `isDefaultView: ${isDefaultView} | contextUsers: ${users.length}`
  );
  return (
    <div
      style={{ display: "flex" }}
      onClick={() => {
        alert("hello!");
      }}
    >
      Hello??
    </div>
  );
}
