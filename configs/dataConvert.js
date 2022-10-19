function dataConvert(string) {
  if (string == "01") {
    return "Jan";
  } else if (string == "02") {
    return "Fev";
  } else if (string == "03") {
    return "Mar";
  } else if (string == "04") {
    return "Abr";
  } else if (string == "05") {
    return "Mai";
  } else if (string == "06") {
    return "Jun";
  } else if (string == "07") {
    return "Jul";
  } else if (string == "08") {
    return "Ago";
  } else if (string == "09") {
    return "Set";
  } else if (string == "10") {
    return "Out";
  } else if (string == "11") {
    return "Nov";
  } else if (string == "12") {
    return "Dez";
  } else {
    return "";
  }
}

export default dataConvert;
