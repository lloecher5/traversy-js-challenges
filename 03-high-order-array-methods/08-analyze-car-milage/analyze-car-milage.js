function analyzeCarMileage(arr) {
    const totalMileage = arr.reduce((sum, cur) => {
        return sum + cur.mileage;
    }, 0);
    const averageMileage = totalMileage / arr.length;

    const lowestMileageCar = arr.reduce(
        (low, cur) => (cur.mileage > low.mileage ? low : cur),
        arr[0]
    );

    const highestMileageCar = arr.reduce(
        (low, cur) => (cur.mileage > low.mileage ? cur : low),
        arr[0]
    );

    return {
        averageMileage: +averageMileage.toFixed(2),
        highestMileageCar: highestMileageCar,
        lowestMileageCar: lowestMileageCar,
        totalMileage: +totalMileage.toFixed(2),
    };
}

module.exports = analyzeCarMileage;
