"use client";

import { ReactElement } from "react";

export default function Hello(): ReactElement {
  return (
    <div
      onClick={() => {
        console.warn("hello?");
      }}
    >
      Hello??
    </div>
  );
}
