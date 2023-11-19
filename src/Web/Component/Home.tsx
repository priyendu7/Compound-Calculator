import React, { useState } from "react";
import InvestmentChart from "./InvestmentChart";
import Form from "./Form";

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
      <Form updateValues={updateValues} />
      <InvestmentChart
        finalAmounts={finalAmounts}
        investedAmounts={investedAmounts}
      />
    </div>
  );
};

export default Home;
