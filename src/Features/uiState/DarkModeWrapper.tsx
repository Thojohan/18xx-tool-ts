import { useLayoutEffect } from "react";
import { useAppSelector } from "../../hooks";
import { selectDark } from "./uiSlice";

interface DarkModeWrapperProps {
  children: React.ReactNode;
}
function DarkModeWrapper({ children }: DarkModeWrapperProps) {
  const darkMode = useAppSelector(selectDark);

  useLayoutEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return <>{children}</>;
}

export default DarkModeWrapper;
