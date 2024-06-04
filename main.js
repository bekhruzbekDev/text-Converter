let input = document.getElementById("textarea");
let count = 0;
let language = document.querySelector("#select");
language.addEventListener("change", (e) => {
  if (e.target.value == "Kirillcha") {
      document.querySelector(".text").textContent ="Lotincha";
    count = 1;
  } else {
    count = 0;
    document.querySelector(".text").textContent ="Kirillcha";
  }
});
input.addEventListener("input", (e) => {
  let text = e.target.value;
  textReplace(text);
});
let arr = [
  {
    A: "А",
    B: "Б",
    D: "Д",
    E: "Е",
    F: "Ф",
    G: "Г",
    H: "x",
    I: "И",
    J: "Ж",
    K: "К",
    L: "Л",
    M: "М",
    N: "Н",
    O: "О",
    P: "П",
    Q: "Қ",
    R: "Р",
    S: "С",
    T: "Т",
    U: "У",
    V: "В",
    X: "Х",
    Y: "Й",
    Z: "З",
    Ch: "Ч",
    Sh: "Ш",
    ʼ: "ъ",
    a: "а",
    b: "б",
    d: "д",
    e: "е",
    f: "ф",
    g: "г",
    h: "x",
    i: "и",
    j: "ж",
    k: "к",
    l: "л",
    m: "м",
    n: "н",
    o: "о",
    p: "п",
    q: "қ",
    r: "р",
    s: "с",
    t: "т",
    u: "у",
    v: "в",
    x: "х",
    y: "й",
    z: "з",
    ch: "ч",
    sh: "ш",
    ʼ: "ъ",
  },
  {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "Yo",
    Ж: "J",
    З: "Z",
    И: "I",
    Й: "Y",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "X",
    Қ: "Q",
    Ц: "Ts",
    Ч: "Ch",
    Ш: "Sh",
    Щ: "Shch",
    Ъ: "",
    Ы: "I",
    Ь: "",
    Э: "E",
    Ю: "Yu",
    Я: "Ya",
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "yo",
    ж: "j",
    з: "z",
    и: "i",
    й: "y",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    x: "x",
    ц: "ts",
    ч: "ch",
    ш: "sh",
    щ: "shch",
    ъ: "",
    ы: "i",
    ь: "",
    э: "e",
    ю: "yu",
    я: "ya",
    қ: "q",
  },
];

function textReplace(text) {
  let result = "";
  for (i = 0; i < text.length; i++) {
    var char = text[i];
    var nextChar = text[i + 1];

    if (char === "s" && nextChar === "h") {
      result += arr[0]["sh"];
      i++;
    } else if (char === "c" && nextChar === "h") {
      result += arr[0]["ch"];
      i++;
    } else if (char === "S" && nextChar === "h") {
      result += arr[0]["Sh"];
      i++;
    } else if (char === "C" && nextChar === "h") {
      result += arr[0]["Ch"];
      i++;
    } else if (text[i] == " ") {
      result += " ";
    } else if (!arr[count][[`${text[i]}`]]) {
      document.querySelector(".textContainer").value = text;
    } else {
      result += arr[count][`${text[i]}`];
    }
  }
  document.querySelector(".textContainer").value = result;
}
document.querySelector(".btn").addEventListener("click", copyText);
function copyText() {
  var text = document.querySelector(".textContainer").value;

  var tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  document.querySelector(".btn").innerText = "Matn nusxalandi!";
}
