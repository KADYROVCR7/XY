function проверитьУмножение() {

    var x = parseFloat(prompt("Введите число x:"));
    var y = parseFloat(prompt("Введите число y:"));

    if (!isNaN(x) && !isNaN(y) && x * y !== 0) {
        var ожидаемыйРезультат = parseFloat(prompt("Введите ожидаемый результат:"));


        if (x * y === ожидаемыйРезультат) {
            console.log("Правильно! Умножение " + x + " на " + y + " равно " + ожидаемыйРезультат);
        } else {
            console.log("Неправильно! Умножение " + x + " на " + y + " не равно " + ожидаемыйРезультат);
        }
    } else {
        console.log("Неправильный ввод. Пожалуйста, убедитесь, что x и y не являются нулем.");
    }
}

проверитьУмножение();
