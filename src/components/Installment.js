import React from 'react';
import { formatPercent, formatCurrency } from '../helpers/formatNumber';

export default function Installment({ installment, initialAmount }) {
    const { id, currentAmount, difference, differenceRate } = installment;
    const amountStyle = (currentAmount < initialAmount) ? styles.negativeAmount : styles.positiveAmount;
    const differenceStyle = (difference < 0) ? styles.negativeAmount : styles.positiveAmount;
    const percentageStyle = (differenceRate < 0) ? styles.negativePercentage : styles.positivePercentage;

    return (
        <div className="card" style={styles.installmentCard}>
            <div style={styles.flexRow}>
                <div style={styles.position}>{id}</div>

                <div>
                    <div style={amountStyle}>
                        {formatCurrency(currentAmount)}
                    </div>

                    <div style={differenceStyle}>
                        {formatCurrency(difference)}
                    </div>

                    <div style={percentageStyle}>
                        {formatPercent(differenceRate)}
                    </div>
                </div>
            </div>
        </div>
    );
}


const styles = {
    installmentCard: {
        padding: '10px',
        margin: '10px',
    },
    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    position: {
        marginRight: '10px',
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    positiveAmount: {
        fontWeight: 'bold',
        color: 'green',
    },
    negativeAmount: {
        fontWeight: 'bold',
        color: 'red',
    },
    positivePercentage: {
        color: 'blue',
    },
    negativePercentage: {
        color: 'red',
    },
};
