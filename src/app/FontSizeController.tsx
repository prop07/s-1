"use client"
import { useState, useEffect } from "react";
import Button from "@/components/ui/button/Button";
import { FiMinus } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

const FontSizeController = () => {
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <div className=" flex justify-center items-center gap-2">
      <Button
        onClick={() => setFontSize((prev) => prev - 1)}
        icon={<FiMinus className="h-5 w-5" />}
      />
      <div onClick={() => setFontSize(16)} className=" text-lg cursor-pointer">
        A
      </div>
      <Button
        onClick={() => setFontSize((prev) => prev + 1)}
        icon={<IoAdd className=" h-5 w-5" />}
      />
    </div>
  );
};

export default FontSizeController;
