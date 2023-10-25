import { DashboardContextProvider } from "./context/dashboardContext";
import { ReactElement } from "react";
import Hello from "./Hello";

export default function DashboardContainer(): ReactElement {
  console.warn("server: Dashboard");
  return (
    <DashboardContextProvider>
      <div>{"Hi this is Dashboard Root"}</div>
      <Hello />
    </DashboardContextProvider>
  );
}
