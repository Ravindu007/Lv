import { useState } from "react";
import { motion } from "framer-motion";
import LvButton from "./Button";

const MainDiv = () => {
  const [size, setSize] = useState<number>(50);
  const [fontSize, setFontSize] = useState<number>(0);
  const [padding, setPadding] = useState<number>(50);
  const [arrayIndex, setArrayIndex] = useState<number>(0);
  const [buttonVisibility, setButtonVisibility] = useState<boolean>(true);

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
    "Certainly, why not",
  ];

  const variants = {
    initial: {
      opacity: 0.1,
    },
    animate: {
      opacity: 1,
    },
  };

  const handleSuccess = () => {
    setButtonVisibility(false);
  };

  return (
    <div className="flex justify-center items-center h-full border-2">
      {buttonVisibility ? (
        <div className="button-section flex justify-center items-center h-full">
          <LvButton
            dimensions={size}
            // fontSize={fontSize}
            name={nameArray[arrayIndex]}
            padding={padding}
            onClick={() => {
              handleSuccess();
            }}
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
      ) : (
        <div className="flex justify-center items-center h-full">
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            transition={{ duration: 2 }}
          >
            <img src="/images/p1.jpg" alt="" />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default MainDiv;
