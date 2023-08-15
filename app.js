// asigno el paquete express en una const con require y luego le asigno el valor const a express como funcion
// creo un puerto con un valor de 4000 para arriba para evitar la forma local

const readline = require('readline')

const suma = require('./suma')
const resta = require('./resta')
const multiplica = require('./multiplicacion')
const divide = require('./division')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function operaciones() {
    rl.question("Ingrese el primer número: ", num1 => {
        rl.question("Seleccione la operación (+, -, *, /): ", operacion => {
            rl.question("Ingrese el segundo número: ", num2 => {
                const a = parseFloat(num1);
                const b = parseFloat(num2);

                let resultado = 0;

                switch (operacion) {
                    case "+":
                        resultado = suma(a, b);
                        break;
                    case "-":
                        resultado = resta(a, b);
                        break;
                    case "*":
                        resultado = multiplica(a, b);
                        break;
                    case "/":
                        resultado = divide(a, b);
                        break;
                    default:
                        console.log("Operación no válida");
                        rl.close();
                        return;


                }

                console.log(`El resultado es: ${resultado}`);
                rl.close();
            });
        });
    });

}
operaciones()

