
"use client"

import React, { useState, useRef } from 'react';
import { Dropdown } from "@/components/common/Dropdown";

const options = ['選項 1', '選項 2', '選項 3', '選項 4', '選項 5'];


import Banner from '@/components/ui/Banner'

export default function Home() {
  const [num, setNum] = useState(0);
  const clickNum = useRef(0)

  const [selectedOption1, setSelectedOption1] = useState("請選擇");
  const [selectedOption2, setSelectedOption2] = useState("請選擇");

  const handleSelect1 = (option) => {
    setSelectedOption1(option);
  };

  const handleSelect2 = (option) => {
    setSelectedOption2(option);
  };

  const handleIncrement = () => {
    setNum(num + 1);
    clickNum.current += 1;
  };

  const handleMinus = () => {
    setNum(num - 1);
    clickNum.current += 1;
  };
  return (
    <div>
      <Dropdown options={options} selectedOption={selectedOption1} onSelect={handleSelect1} />
      <Dropdown options={options} selectedOption={selectedOption2} onSelect={handleSelect2} />
      <button onClick={handleIncrement}>加1</button>
      <button onClick={handleMinus}>減1</button>
      <p>數字：{num}</p>
      <p>點擊次數：{clickNum.current}</p>
      <Banner />
    </div>
  )
}
