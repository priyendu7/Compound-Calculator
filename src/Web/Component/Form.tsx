import React, { useState } from "react";

interface Props {
  updateValues: (finalAmounts: number[], investedAmounts: number[]) => void;
}

const Form: React.FC<Props> = ({ updateValues }) => {
  console.log("started form ");
  const [lumpSum, setLumpSum] = useState<number>(50000);
  let [investmentAmount, setInvestmentAmount] = useState<number>(50000);
  const [monthlyRate, setMonthlyRate] = useState<number>(1.5);
  const [investmentIncreaseRate, setInvestmentIncreaseRate] =
    useState<number>(10);
  const [numberOfYears, setNumberOfYears] = useState<number>(10);

  const handleLumpSumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("started lumpsum ");
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
      <form>
        <div className="mb-3">
          <label htmlFor="lumpSum" className="form-label">
            Lump Sum:
          </label>
          <input
            type="number"
            className="form-control"
            id="lumpSum"
            name="lumpSum"
            value={lumpSum}
            onChange={handleLumpSumChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="investmentAmount" className="form-label">
            Investment Amount:
          </label>
          <input
            type="number"
            className="form-control"
            id="investmentAmount"
            name="investmentAmount"
            value={investmentAmount}
            onChange={handleInvestmentAmountChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="monthlyRate" className="form-label">
            Monthly Rate per month:
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="monthlyRate"
            name="monthlyRate"
            value={monthlyRate}
            onChange={handleMonthlyRateChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="investmentIncreaseRate" className="form-label">
            Investment Increase Rate per year:
          </label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            id="investmentIncreaseRate"
            name="investmentIncreaseRate"
            value={investmentIncreaseRate}
            onChange={handleInvestmentIncreaseRateChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="numberOfYears" className="form-label">
            Number of years of investment:
          </label>
          <input
            type="number"
            className="form-control"
            id="numberOfYears"
            name="numberOfYears"
            value={numberOfYears}
            onChange={handleNumberOfYearsChange}
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={handleButtonClick}>
        Calculate
      </button>
    </div>
  );
};

export default Form;
