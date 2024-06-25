function calculateTotalSalesWithTax(products, taxRate) {
    const total = products.reduce(
        (total, prod) => total + prod.price * prod.quantity,
        0
    );
    console.log(total);

    return +(total + total * (taxRate / 100)).toFixed(1);
}

module.exports = calculateTotalSalesWithTax;
