function snapCrackle(maxValue) {
    let resultado = '';
    for (let i = 1; i <= maxValue; i++) {

        if (i % 2 !== 0 && i % 5 !== 0) {
            resultado = resultado + 'Snap, ';

        } else if (i % 2 !== 0 && i % 5 == 0) {
            resultado = resultado + 'SnapCrackle, ';

        } else if (i % 5 == 0) {
            resultado = resultado + 'Crackle, ';

        } else if (i % 2 === 0 && i % 5 !== 0) {
            resultado = resultado + i + ', ';
        }
    }
    console.log(resultado);
}
snapCrackle(15);