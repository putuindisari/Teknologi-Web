function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

class Fibonacci {
    constructor(n) {
        this.n = n;
    }
    output() {
        let result = [];
        let fn = 1;
        let fn_1 = 1;
        let fn_2 = 0;

        for (let i = 0; i < this.n; i++) {
            result.push(fn);
            fn = fn_1 + fn_2;
            fn_2 = fn_1;
            fn_1 = fn;
        }

        return result;
    }
}

function hitungFibonacci() {
    const inputNumber = document.getElementById("inputVariable").value;
    const resultElement = document.getElementById("hasilPerhitungan");

    if (inputNumber === "") {
        resultElement.innerText = "Silakan masukkan suku ke-n.";
        return;
    }

    const n = parseInt(inputNumber);

    if (isNaN(n)) {
        resultElement.innerText = "Masukkan angka yang valid.";
    } else {
        
        const recursiveResult = fibonacci(n);
        
        const fibonacciInstance = new Fibonacci(n);
        const iterativeResult = fibonacciInstance.output();

        resultElement.innerHTML = `
            Suku ke-${n} dari deret Fibonacci (Rekursi): ${recursiveResult}<br>
            Suku ke-${n} dari deret Fibonacci (Iteratif): ${iterativeResult.join(", ")}
        `;
    }
}
