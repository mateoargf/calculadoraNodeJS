const dividir = (numero1,numero2) => {
   if (numero2 === 0) {
      throw new Error("No se puede dividir por cero");
    }

    return numero1 / numero2
 } 

    module.exports = dividir