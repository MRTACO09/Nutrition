const submit = document.getElementById("submit");
const list = document.getElementById("list");
const checks = [
  document.getElementById("VitA"),
  document.getElementById("VitC"),
  document.getElementById("VitD"),
  document.getElementById("VitBsix"),
  document.getElementById("VitE"),
  document.getElementById("VitK"),
  document.getElementById("VitBtwelve"),
  document.getElementById("Riboflavin"),
  document.getElementById("Folate"),
  document.getElementById("Niacin"),
  document.getElementById("PantothenicAcid"),
  document.getElementById("Biotin"),
  document.getElementById("Calcium"),
  document.getElementById("Chloride"),
  document.getElementById("Chromium"),
  document.getElementById("Copper"),
  document.getElementById("Fluoride"),
  document.getElementById("Iodine"),
  document.getElementById("Iron"),
  document.getElementById("Magnesium"),
  document.getElementById("Molybdenum"),
  document.getElementById("Phosphorus"),
  document.getElementById("Potassium"),
  document.getElementById("Selenium"),
  document.getElementById("Sodium"),
  document.getElementById("Zinc"),
];
const inps = [
  document.getElementById("VitAinp"),
  document.getElementById("VitCinp"),
  document.getElementById("VitDinp"),
  document.getElementById("VitBsixinp"),
  document.getElementById("VitEinp"),
  document.getElementById("VitKinp"),
  document.getElementById("VitBtwelveinp"),
  document.getElementById("Riboflavininp"),
  document.getElementById("Folateinp"),
  document.getElementById("Niacininp"),
  document.getElementById("PantothenicAcidinp"),
  document.getElementById("Biotininp"),
  document.getElementById("Calciuminp"),
  document.getElementById("Chlorideinp"),
  document.getElementById("Chromiuminp"),
  document.getElementById("Copperinp"),
  document.getElementById("Fluorideinp"),
  document.getElementById("Iodineinp"),
  document.getElementById("Ironinp"),
  document.getElementById("Magnesiuminp"),
  document.getElementById("Molybdenuminp"),
  document.getElementById("Phosphorusinp"),
  document.getElementById("Potassiuminp"),
  document.getElementById("Seleniuminp"),
  document.getElementById("Sodiuminp"),
  document.getElementById("Zincinp"),
];
if (localStorage.getItem("checkedvalues")) {
  let importStorage = localStorage.getItem("checkedvalues").split(",");
  for (let i = 0; i < importStorage.length; i++) {
    checks[importStorage[i]].checked = true;
  }
}
if (localStorage.getItem("inpvalues")) {
  let importotherStorage = localStorage.getItem("inpvalues").split(",");
  for (let i = 0; i < importotherStorage.length; i++) {
    list.innerHTML = "<br>" + importotherStorage[i];
  }
}
let checkeed = [];
let inpeed = [];
submit.onclick = function (e) {
  e.preventDefault();
  for (let i = 0; i < checks.length; i++) {
    if (checks[i].checked === null) {
      checks[i].checked === false;
    }
    if (checks[i].checked === true) {
      checkeed.push(i);
    }
  }
  localStorage.setItem("checkedvalues", checkeed);
  for (let i = 0; i < inps.length; i++) {
    if (inps[i].value) {
      inpeed.push(inps[i].value);
    }
  }
  localStorage.setItem("inpvalues", inpeed);
};
