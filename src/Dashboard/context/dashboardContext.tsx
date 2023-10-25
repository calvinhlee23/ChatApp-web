"use client";

import { ReactNode, createContext, useState } from "react";

type DashboardContextType = {
  isDefaultView: boolean;
  setIsDefaultView: (flag: boolean) => void;
  users: any[];
};

export const DEFAULT_DASHBOARD_CONTEXT: DashboardContextType = {
  isDefaultView: true,
  setIsDefaultView: (flag: boolean) => {},
  users: [],
};

export const DashboardContext = createContext<DashboardContextType>(
  DEFAULT_DASHBOARD_CONTEXT
);

export function DashboardContextProvider({
  children,
  serverFetchedUsers,
}: {
  children: ReactNode;
  serverFetchedUsers: any[];
}) {
  const [isDefaultView, setIsDefaultView] = useState<boolean>(true);
  const [users] = useState<any[]>(serverFetchedUsers);

  return (
    <DashboardContext.Provider
      value={{ isDefaultView, setIsDefaultView, users }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
