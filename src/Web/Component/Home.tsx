import React, { useState } from "react";
import InvestmentChart from "./InvestmentChart";
//import Form from "./Form";
import SentenceForm from "./SentenceForm";

const Home: React.FC = () => {
  const [finalAmounts, setFinalAmounts] = useState<number[]>([]);
  const [investedAmounts, setInvestedAmounts] = useState<number[]>([]); // State for array of numbers

  const updateValues = (finalAmounts: number[], investedAmounts: number[]) => {
    console.log("updating finalAmounts to ", finalAmounts);
    setFinalAmounts(finalAmounts);
    setInvestedAmounts(investedAmounts);
  };

  return (
    <div>
      <SentenceForm updateValues={updateValues} />
      <InvestmentChart
        finalAmounts={finalAmounts}
        investedAmounts={investedAmounts}
      />
    </div>
  );
};

export default Home;
