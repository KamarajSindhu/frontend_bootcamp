
function unitConverter() {
    let unit = parseFloat(document.getElementById("unit").value);
    let lengthInput = unit * 3.281;
    let volumeInput = unit * 0.264;
    let massInput = unit * 2.204;

    document.getElementById("length").value = unit + " length = " +  lengthInput.toFixed(2) + " Meter";
    document.getElementById("volume").value = unit + " Volume = " +  volumeInput.toFixed(2) + " Litres";
    document.getElementById("mass").value = unit + " Mass = " + massInput.toFixed(2) + " Kilograms";
}
