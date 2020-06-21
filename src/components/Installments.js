import React from 'react';
import Installment from './Installment';

export default function Installments({ installments, initialAmount }) {
    return (
        <div className="row">
            {installments.map((installment, index) => {
                return (
                    <div key={index} className="col m2">
                        <Installment installment={installment} initialAmount={initialAmount} />
                    </div>
                );
            })}
        </div>
    );
}
