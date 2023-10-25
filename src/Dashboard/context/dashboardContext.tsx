"use client";

import { ReactNode, createContext, useState } from "react";

type DashboardContextType = {
  isDefaultView: boolean;
  setIsDefaultView: (flag: boolean) => void;
};

export const DEFAULT_DASHBOARD_CONTEXT: DashboardContextType = {
  isDefaultView: true,
  setIsDefaultView: (flag: boolean) => {},
};

export const DashboardContext = createContext<DashboardContextType>(
  DEFAULT_DASHBOARD_CONTEXT
);

export function DashboardContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isDefaultView, setIsDefaultView] = useState<boolean>(true);

  return (
    <DashboardContext.Provider value={{ isDefaultView, setIsDefaultView }}>
      {children}
    </DashboardContext.Provider>
  );
}
