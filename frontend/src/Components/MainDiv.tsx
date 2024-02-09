import { useState } from "react";
import LvButton from "./Button";

const MainDiv = () => {
  const [size, setSize] = useState<number>(50);
  const [fontSize, setFontSize] = useState<number>(0);
  const [padding, setPadding] = useState<number>(50);
  const [arrayIndex, setArrayIndex] = useState<number>(0);

  const nameArray: string[] = [
    "Absolutely",
    "Of course",
    "Certainly",
    "Without a doubt",
    "Indeed",
    "By all means",
    "No doubt",
    "Absolutely yes",
    "For sure",
    "Certainly, why not"
  ];;

  return (
    <div className="flex justify-center items-center h-full border-2">
      <LvButton
        dimensions={size}
        // fontSize={fontSize}
        name={nameArray[arrayIndex]}
        padding={padding}
        onClick={() => {}}
      ></LvButton>
      <LvButton
        onClick={() => {
          setPadding(padding + 10);
          setSize(size + 10);
          setFontSize(fontSize + 0.001);
          console.log(arrayIndex);
          if (arrayIndex < nameArray.length) {
            setArrayIndex(arrayIndex + 1);
            if (arrayIndex === nameArray.length - 1) {
              setArrayIndex(0);
            }
          }
        }}
        name="No"
      ></LvButton>
    </div>
  );
};

export default MainDiv;
