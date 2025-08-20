import React from "react";
import { useUserContext } from "./userContext"; // adjust path if your context lives elsewhere

function MainContentLayout({ children }) {
  // guard for safe access in JS
  const { user } = useUserContext() || {};
  const userId = user && user._id;

  return (
    <main className={`${userId ? "pr-[20rem]" : ""} pb-[1.5rem] flex h-full`}>
      {children}
    </main>
  );
}

export default MainContentLayout;