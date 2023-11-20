import React, { useState } from "react";

interface Props {
  updateValues: (finalAmounts: number[], investedAmounts: number[]) => void;
}

const SentenceForm: React.FC<Props> = ({ updateValues }) => {
  console.log("started form ");
  const [lumpSum, setLumpSum] = useState<number>(50000);
  let [investmentAmount, setInvestmentAmount] = useState<number>(50000);
  const [monthlyRate, setMonthlyRate] = useState<number>(1.5);
  const [investmentIncreaseRate, setInvestmentIncreaseRate] =
    useState<number>(10);
  const [numberOfYears, setNumberOfYears] = useState<number>(10);

  const handleLumpSumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setLumpSum(value);
    }
  };

  const handleInvestmentAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setInvestmentAmount(value);
    }
  };

  const handleMonthlyRateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setMonthlyRate(value);
    }
  };

  const handleInvestmentIncreaseRateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setInvestmentIncreaseRate(value);
    }
  };

  const handleNumberOfYearsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setNumberOfYears(value);
    }
  };

  const handleButtonClick = () => {
    console.log("final amount is : ", investmentAmount);
    let finalAmounts: Array<number> = [];
    let investedAmounts: Array<number> = [];
    let finalAmount: number = 0;
    let totalInvestedAmount: number = 0;
    console.log("1");
    if (lumpSum > 0) {
      finalAmount = lumpSum;
      totalInvestedAmount = finalAmount;
    }
    //finalAmount += investmentAmount
    console.log("2");
    for (let i = 1; i <= numberOfYears * 12; i++) {
      console.log("3");
      finalAmount =
        finalAmount + (finalAmount * monthlyRate) / 100 + investmentAmount;
      if (i % 12 == 0) {
        finalAmounts.push(finalAmount);
        totalInvestedAmount += investmentAmount * 12;
        investmentAmount += (investmentAmount * investmentIncreaseRate) / 100;
        investedAmounts.push(totalInvestedAmount);
        console.log("final amount is : ", finalAmount);
      }
    }
    updateValues(finalAmounts, investedAmounts);
  };

  return (
    <div className="container mt-5">
      <ul>
        <li>
          How much money will I have if I start my investment by investing a
          lump sum of Rs.
          <input
            type="number"
            id="lumpSum"
            name="lumpSum"
            className="input"
            value={lumpSum}
            onChange={handleLumpSumChange}
          />
        </li>
        <li>
          And then I will invest Rs.
          <input
            type="number"
            id="investmentAmount"
            name="investmentAmount"
            className="input"
            value={investmentAmount}
            onChange={handleInvestmentAmountChange}
          />
          every month as an SIP , and will increase this investment amount by
          <input
            type="number"
            step="0.01"
            id="monthlyRate"
            name="monthlyRate"
            className="input"
            value={investmentIncreaseRate}
            onChange={handleInvestmentIncreaseRateChange}
          />
          % every year.
        </li>
        <li>
          I will invest in such a way that I will get
          <input
            type="number"
            step="0.01"
            id="investmentIncreaseRate"
            name="investmentIncreaseRate"
            className="input"
            value={monthlyRate}
            onChange={handleMonthlyRateChange}
          />
          % return every month.
        </li>
        <li>
          I will invest this amount for
          <input
            type="number"
            id="numberOfYears"
            name="numberOfYears"
            className="input"
            value={numberOfYears}
            onChange={handleNumberOfYearsChange}
          />
          years.
        </li>
      </ul>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Show Graph
      </button>
    </div>
  );
};

export default SentenceForm;
