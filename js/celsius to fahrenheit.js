let celsius = document.getElementById("ccd");
// console.log(typeof celsius);
let fahrenheit = document.getElementById("ffd");
// let kelvin = document.getElementById("kel");

celsius.addEventListener('input', function () {
    let x = parseFloat(celsius.value)
    // (0°C × 9/5) + 32 = 32°F
    let fhar = ((x * 9 / 5) + 32);
    fahrenheit.value = parseFloat(fhar).toFixed(2);

});

fahrenheit.addEventListener('input', function () {
    let y = parseFloat(fahrenheit.value)
    // (0°F − 32) × 5/9 = -17.78°C
    let cels = ((y - 32) * 5 / 9);
    celsius.value = parseFloat(cels).toFixed(2);

});

