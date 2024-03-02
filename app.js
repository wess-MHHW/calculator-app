// FUNCTIONS
function setThemeColors(theme) {
  if (theme === "theme-1") {
    /*
        BACKGROUND 
            --clr-main-background: hsl(222, 26%, 31%);
            --clr-screen-background: hsl(224, 36%, 15%);
            --clr-toggle--and-key-pad-background: hsl(223, 31%, 20%);

        KEY 
            --clr-key-background: hsl(30, 25%, 89%);
            --clr-key-shadow: hsl(28, 16%, 65%);

            --clr-equal-key-and-toggle-background: hsl(6, 63%, 50%);
            --clr-equal-key-shadow: hsl(6, 70%, 34%);

            --clr-del-reset-key-background: hsl(225, 21%, 49%);
            --clr-del-reset-key-shadow: hsl(224, 28%, 35%);

        TEXT 
            --clr-text-settings-and-screen: hsl(0, 0%, 100%);
            --clr-text-keys: hsl(221, 14%, 31%);
            --clr-text-del-reset: hsl(0, 0%, 100%);
            --clr-text-equal: hsl(0, 0%, 100%);
    */
    document.documentElement.style.setProperty(
      "--clr-main-background",
      "hsl(222, 26%, 31%)"
    );
    document.documentElement.style.setProperty(
      "--clr-screen-background",
      "hsl(224, 36%, 15%)"
    );
    document.documentElement.style.setProperty(
      "--clr-toggle--and-key-pad-background",
      "hsl(223, 31%, 20%)"
    );

    document.documentElement.style.setProperty(
      "--clr-key-background",
      "hsl(30, 25%, 89%)"
    );
    document.documentElement.style.setProperty(
      "--clr-key-shadow",
      "hsl(28, 16%, 65%)"
    );
    document.documentElement.style.setProperty(
      "--clr-equal-key-and-toggle-background",
      "hsl(6, 63%, 50%)"
    );
    document.documentElement.style.setProperty(
      "--clr-equal-key-shadow",
      "hsl(6, 70%, 34%)"
    );
    document.documentElement.style.setProperty(
      "--clr-del-reset-key-background",
      "hsl(225, 21%, 49%)"
    );
    document.documentElement.style.setProperty(
      "--clr-del-reset-key-shadow",
      "hsl(224, 28%, 35%)"
    );

    document.documentElement.style.setProperty(
      "--clr-text-settings-and-screen",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-keys",
      "hsl(221, 14%, 31%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-del-reset",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-equal",
      "hsl(0, 0%, 100%)"
    );
  } else if (theme === "theme-2") {
    /*
        BACKGROUND 
            --clr-main-background: hsl(0, 0%, 90%);
            --clr-screen-background: hsl(0, 0%, 93%);
            --clr-toggle--and-key-pad-background: hsl(0, 5%, 81%);

        KEY 
            --clr-key-background: hsl(45, 7%, 89%);
            --clr-key-shadow: hsl(35, 11%, 61%);

            --clr-equal-key-and-toggle-background: hsl(25, 98%, 40%);
            --clr-equal-key-shadow: hsl(25, 99%, 27%);

            --clr-del-reset-key-background: hsl(185, 42%, 37%);
            --clr-del-reset-key-shadow: hsl(185, 58%, 25%);

        TEXT 
            --clr-text-settings-and-screen: hsl(60, 10%, 19%);
            --clr-text-keys: hsl(60, 10%, 19%);
            --clr-text-del-reset: hsl(0, 0%, 100%);
            --clr-text-equal: hsl(0, 0%, 100%);
    */
    document.documentElement.style.setProperty(
      "--clr-main-background",
      "hsl(0, 0%, 90%)"
    );
    document.documentElement.style.setProperty(
      "--clr-screen-background",
      "hsl(0, 0%, 93%)"
    );
    document.documentElement.style.setProperty(
      "--clr-toggle--and-key-pad-background",
      "hsl(0, 5%, 81%)"
    );

    document.documentElement.style.setProperty(
      "--clr-key-background",
      "hsl(45, 7%, 89%)"
    );
    document.documentElement.style.setProperty(
      "--clr-key-shadow",
      "hsl(35, 11%, 61%)"
    );
    document.documentElement.style.setProperty(
      "--clr-equal-key-and-toggle-background",
      "hsl(25, 98%, 40%)"
    );
    document.documentElement.style.setProperty(
      "--clr-equal-key-shadow",
      "hsl(25, 99%, 27%)"
    );
    document.documentElement.style.setProperty(
      "--clr-del-reset-key-background",
      "hsl(185, 42%, 37%)"
    );
    document.documentElement.style.setProperty(
      "--clr-del-reset-key-shadow",
      "hsl(185, 58%, 25%)"
    );

    document.documentElement.style.setProperty(
      "--clr-text-settings-and-screen",
      "hsl(60, 10%, 19%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-keys",
      "hsl(60, 10%, 19%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-del-reset",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-equal",
      "hsl(0, 0%, 100%)"
    );
  }
  if (theme === "theme-3") {
    /*
        BACKGROUND 
            --clr-main-background: hsl(268, 75%, 9%);
            --clr-screen-background: hsl(268, 71%, 12%);
            --clr-toggle--and-key-pad-background: hsl(268, 71%, 12%);

        KEY 
            --clr-key-background: hsl(268, 47%, 21%);
            --clr-key-shadow:  hsl(290, 70%, 36%);

            --clr-equal-key-and-toggle-background: hsl(176, 100%, 44%);
            --clr-equal-key-shadow: hsl(177, 92%, 70%);

            --clr-del-reset-key-background: hsl(281, 89%, 26%);
            --clr-del-reset-key-shadow: hsl(285, 91%, 52%);

        TEXT 
            --clr-text-settings-and-screen: hsl(52, 100%, 62%);
            --clr-text-keys: hsl(52, 100%, 62%);
            --clr-text-del-reset: hsl(0, 0%, 100%);
            --clr-text-equal: hsl(198, 20%, 13%);   
    */
    document.documentElement.style.setProperty(
      "--clr-main-background",
      "hsl(268, 75%, 9%)"
    );
    document.documentElement.style.setProperty(
      "--clr-screen-background",
      "hsl(268, 71%, 12%)"
    );
    document.documentElement.style.setProperty(
      "--clr-toggle--and-key-pad-background",
      "hsl(268, 71%, 12%)"
    );

    document.documentElement.style.setProperty(
      "--clr-key-background",
      "hsl(268, 47%, 21%)"
    );
    document.documentElement.style.setProperty(
      "--clr-key-shadow",
      "hsl(290, 70%, 36%)"
    );
    document.documentElement.style.setProperty(
      "--clr-equal-key-and-toggle-background",
      "hsl(176, 100%, 44%)"
    );
    document.documentElement.style.setProperty(
      "--clr-equal-key-shadow",
      "hsl(177, 92%, 70%)"
    );
    document.documentElement.style.setProperty(
      "--clr-del-reset-key-background",
      "hsl(281, 89%, 26%)"
    );
    document.documentElement.style.setProperty(
      "--clr-del-reset-key-shadow",
      "hsl(285, 91%, 52%)"
    );

    document.documentElement.style.setProperty(
      "--clr-text-settings-and-screen",
      "hsl(52, 100%, 62%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-keys",
      "hsl(52, 100%, 62%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-del-reset",
      "hsl(0, 0%, 100%)"
    );
    document.documentElement.style.setProperty(
      "--clr-text-equal",
      "hsl(198, 20%, 13%)"
    );
  }
  localStorage.setItem("theme", theme);
}

function applyTheme(theme) {
  const selector = document.querySelector(".selector");
  if (theme === "theme-1") {
    selector.classList.add("first");
    selector.classList.remove("second");
    selector.classList.remove("third");
  } else if (theme === "theme-2") {
    selector.classList.remove("first");
    selector.classList.add("second");
    selector.classList.remove("third");
  } else if (theme === "theme-3") {
    selector.classList.remove("first");
    selector.classList.remove("second");
    selector.classList.add("third");
  }
}

evaluateMathExpression("5+,");
function evaluateMathExpression(input) {
  input = input.replaceAll("x", "*");
  input = input.replaceAll(",", ".");
  let i = 0;
  let valid = true;
  let message = "";
  let currentNumber = "";
  let operator = "";
  let storage = [];
  while (valid && i <= input.length) {
    const char = input[i];
    if (!isNaN(Number(char))) {
      // Handle numbers
      currentNumber += char;
    } else if (char === ".") {
      // Handle decimal point
      if (currentNumber.includes(".")) {
        valid = false;
        message = "Invalid syntax: Multiple decimal points";
      } else {
        currentNumber += char;
      }
    } else {
      // Handle operators
      if (storage.length === 0) {
        if (currentNumber.length === 0) {
          if (input.length === 1) {
            valid = false;
            message = "Invalid syntax: Operator at start";
          } else {
            if (["+", "-"].includes(char)) {
              currentNumber += char;
            } else {
              valid = false;
              message = "Invalid syntax: Operator at start";
            }
          }
        } else {
          if (operator.length !== 0) {
            valid = false;
            message = "Invalid syntax: Consecutive operators";
          } else {
            if (["+", "-"].includes(currentNumber)) {
              valid = false;
              message = "Invalid syntax: Consecutive operators";
            } else {
              operator = char;
              if (/\d/.test(currentNumber)) {
                storage.push(parseFloat(currentNumber));
                currentNumber = "";
              } else {
                valid = false;
                message = "Invalid syntax: Not a number";
              }
            }
          }
        }
      } else {
        if (operator.length !== 0 && currentNumber.length === 0) {
          if (["+", "-"].includes(char)) {
            currentNumber += char;
          } else {
            valid = false;
            message = "Invalid syntax: Operator at end";
          }
        } else if (operator.length !== 0 && currentNumber.length !== 0) {
          if (/\d/.test(currentNumber)) {
            storage.push(operator);
            storage.push(parseFloat(currentNumber));
            operator = char;
            currentNumber = "";
          } else {
            valid = false;
            message = "Invalid syntax: Not a number";
          }
        }
      }
    }
    i++;
  }

  if (
    storage.some(
      (item, index) =>
        index < storage.length - 1 && item === "/" && storage[index + 1] === 0
    )
  ) {
    // Handle division by zero
    valid = false;
    message = "Invalid syntax: Division by zero";
  }

  return { valid, storage, message };
}

// THEME

// FROM LOCALSTORAGE
let theme;
(() => {
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
    setThemeColors(theme);
    applyTheme(theme);
  }
})();

// FROM USER
const themes = document.querySelector(".themes-selector");
Array.from(themes.children)
  .slice(1)
  .forEach((element) => {
    element.addEventListener("click", () => {
      setThemeColors(element.id);
      applyTheme(element.id);
    });
  });

// CALC

// RESET KEY
const input = document.getElementById("value");
const reset = document.getElementById("key-reset");
reset.addEventListener("click", () => {
  input.innerHTML = 0;
  equation.value = "";
});

// DEL KEY
const del = document.querySelector("#key-delete");
del.addEventListener("click", () => {
  if (input.innerHTML.length === 1) {
    input.innerHTML = 0;
  } else {
    input.innerHTML = input.innerHTML.slice(0, input.innerHTML.length - 1);
  }
});

// NUMBERS COMMAS AND OPERATORS KEYS
const keys = document.querySelectorAll(".key:not(#key-delete)");
keys.forEach((key) => {
  key.addEventListener("click", () => {
    if (input.innerHTML.length < 10) {
      if (input.innerHTML === "0") {
        if (key.innerHTML === ".") {
          input.innerHTML += ",";
        } else if (["+", "-"].includes(key.innerHTML)) {
          input.innerHTML = key.innerHTML;
        } else if (["/", "x"].includes(key.innerHTML)) {
          input.innerHTML += key.innerHTML;
        } else {
          input.innerHTML = key.innerHTML;
        }
      } else {
        if (key.innerHTML === ".") {
          input.innerHTML += ",";
        } else {
          input.innerHTML += key.innerHTML;
        }
      }
    }
  });
});

// SCREEN
const equal = document.querySelector("#key-equal");
const equation = document.querySelector("#eq");
equal.addEventListener("click", () => {
  let output = evaluateMathExpression(input.innerHTML);
  if (output["valid"]) {
    equation.value =
      output["storage"].join("").replaceAll("*", "x").replaceAll(".", ",") +
      " =";
    let result = eval(output["storage"].join(""));
    input.innerHTML = result
      .toLocaleString("en-US", { maximumFractionDigits: 6 })
      .replaceAll(",", "")
      .replaceAll(".", ",");
  } else {
    equation.value = output["message"] + " =";
  }
});
