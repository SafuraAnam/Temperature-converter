const Temp = () => {
  const inputTemp = document.getElementById("temp").value;
  const tempSelected = document.getElementById("temp_diff");
  const tempValue = temp_diff.options[tempSelected.selectedIndex].value;

  const CtoF = (C) => {
    let fah = ((C * 9) / 5 + 32).toFixed(1);
    return fah;
  };

  const FtoC = (F) => {
    let cel = (((F - 32) * 5) / 9).toFixed(1);
    return cel;
  };
  if (tempValue == "C") {
    document.getElementById("answer").innerHTML =
      CtoF(inputTemp) + "&deg;Fahrenheit";
  } else {
    document.getElementById("answer").innerHTML =
      FtoC(inputTemp) + "&deg;Celsius";
  }
};
