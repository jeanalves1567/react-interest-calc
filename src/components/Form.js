import React from 'react';

export default function Form({ initialAmount, interestRate, period, onChangeAmount, onChangeInterest, onChangePeriod }) {
    const handleChangeAmount = (event) => {
        const newAmount = event.target.value;
        if (newAmount <= 100000) onChangeAmount(newAmount);
    };

    const handleChangeInterest = (event) => {
        const newInterestRate = event.target.value;
        if (newInterestRate >= -12 && newInterestRate <= 12) onChangeInterest(newInterestRate);
    };

    const handleChangePeriod = (event) => {
        const newPeriod = event.target.value;
        if (newPeriod >= 1 && newPeriod <= 36) onChangePeriod(newPeriod);
    };

    return (
        <div className="row col s12">

            <div className="input-field col s4">
                <input placeholder="Montante inicial" id="initialAmount" type="number" min="1" max="100000" step="1" value={initialAmount} autoFocus onChange={handleChangeAmount} className="validate" />
                <label htmlFor="initialAmount" className="active">Montante Inicial</label>
            </div>

            <div className="input-field col s4">
                <input placeholder="Taxa de juros mensal" id="interestRate" type="number" min="-12" max="12" step="0.1" value={interestRate} onChange={handleChangeInterest} className="validate" />
                <label htmlFor="interestRate" className="active">Taxa de juros mensal</label>
            </div>

            <div className="input-field col s4">
                <input placeholder="Período (meses)" id="period" type="number" min="1" max="36" step="1" value={period} onChange={handleChangePeriod} className="validate" />
                <label htmlFor="period" className="active">Período (meses)</label>
            </div>

        </div>
    );
}
