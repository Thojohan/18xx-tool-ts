import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import Slider from "../../ui/Slider";

import { darkToggle, selectDark } from "./uiSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";

function DarkMode() {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(selectDark);


  function darkHandler() {
    dispatch(darkToggle());
  }

  return (
    <div className="flex text-2xl items-center gap-2">
      <MdOutlineLightMode />
      <Slider handler={darkHandler} defaultValue={darkMode} />
      <MdOutlineDarkMode />
    </div>
  );
}

export default DarkMode;
