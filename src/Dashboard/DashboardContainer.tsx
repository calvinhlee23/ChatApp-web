import { ReactElement } from "react";
import Hello from "./Hello";

export default function DashboardContainer(): ReactElement {
  setInterval(() => {
    console.log("Client");
  }, 2000);
  return (
    <div>
      Hi this is Dashboard Root
      <Hello />
    </div>
  );
}
