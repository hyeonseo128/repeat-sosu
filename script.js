function calculateDecimal() {
    const numerator = parseInt(document.getElementById('numerator').value);
    const denominator = parseInt(document.getElementById('denominator').value);
    const precision = parseInt(document.getElementById('precision').value);
    const resultElement = document.getElementById('result');

    if (isNaN(numerator) || isNaN(denominator) || isNaN(precision)) {
        resultElement.textContent = "올바른 값을 입력해주세요.";
        return;
    }

    let quotient = Math.floor(numerator / denominator);
    let result = quotient + ".";
    let remainders = {};
    let repeatingPart = "";
    let repeatingStart = -1;
    
    let remainder = numerator % denominator;

    for (let i = 0; i < precision; i++) {
        if (remainder === 0) {
            break;
        }

        if (remainders.hasOwnProperty(remainder)) {
            repeatingStart = remainders[remainder];
            break;
        }

        remainders[remainder] = result.length;

        remainder *= 10;
        let digit = Math.floor(remainder / denominator);
        result += digit;
        remainder %= denominator;
    }

    if (repeatingStart !== -1) {
        repeatingPart = result.substring(repeatingStart);
        result = result.substring(0, repeatingStart) + "(" + repeatingPart + ")";
    }

    resultElement.textContent = `소숫점 아래 ${precision}자리까지 계산된 값: ${result}`;
}
