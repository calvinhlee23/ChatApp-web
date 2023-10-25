import { DashboardContextProvider } from "./context/dashboardContext";
import { ReactElement } from "react";
import Hello from "./Hello";

async function initFetch() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    mode: "cors", // no-cors, *cors, same-origin
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export default async function DashboardContainer({}): Promise<ReactElement> {
  console.warn("server: Dashboard");
  const users = await initFetch();
  console.warn(`DashboardContainer: ${users.length}`);
  return (
    <DashboardContextProvider serverFetchedUsers={users}>
      <div>{"Hi this is Dashboard Root"}</div>
      <Hello />
    </DashboardContextProvider>
  );
}
