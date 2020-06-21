import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Installments from './components/Installments';

export default function App() {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [interestRate, setInterestRate] = useState(0.5);
  const [period, setPeriod] = useState(1);
  const [installments, setInstallments] = useState([]);

  useEffect(() => {
    let currentAmount = initialAmount;
    const localInstallments = [];
    for (let i = 0; i < period; i++) {
      currentAmount *= 1 + (interestRate / 100);
      const difference = currentAmount - initialAmount;
      const differenceRate = ((currentAmount / initialAmount) * 100) - 100;
      localInstallments.push({
        id: i + 1,
        currentAmount,
        difference,
        differenceRate,
      });
    }
    setInstallments(localInstallments);

  }, [initialAmount, interestRate, period]);

  const handleChangeAmount = (newAmount) => {
    setInitialAmount(+newAmount);
  };

  const handleChangeInterest = (newInterestRate) => {
    setInterestRate(+newInterestRate);
  };

  const handleChangePeriod = (newPeriod) => {
    setPeriod(+newPeriod);
  };

  return (
    <div className="container">

      <Header>React - Juros Compostos</Header>

      <Form initialAmount={initialAmount} interestRate={interestRate} period={period} onChangeAmount={handleChangeAmount} onChangeInterest={handleChangeInterest} onChangePeriod={handleChangePeriod} />

      <Installments installments={installments} initialAmount={initialAmount} />

    </div>
  );
}
