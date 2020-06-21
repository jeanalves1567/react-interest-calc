const formatter = Intl.NumberFormat('pt-BR');
const formatterCurrency = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const formatterPercent = Intl.NumberFormat('pt-BR', { style: 'percent', minimumFractionDigits: 2 });

function formatNumber(value) {
    if (value < 0) value *= -1;
    value = value.toFixed(2);
    console.log(value);
    console.log(formatter.format(value));
    return formatter.format(value);
}

function formatCurrency(value) {
    return formatterCurrency.format(value);
}

function formatPercent(value) {
    value /= 100;
    return formatterPercent.format(value);
}

export { formatNumber, formatCurrency, formatPercent };
