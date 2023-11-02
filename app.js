let count = 0;

let value = document.getElementById("value");
let btns = document.getElementsByClassName("btn");

btns = Array.from(btns)
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let styles = e.currentTarget.classList;
    if (styles.contains("inc")) {
      count++;
    } else if (styles.contains("dec")) {
      count--;
    } else {
      count = 0;
    }

    if(count > 0) {
        value.style.color = 'green'
    }else if(count < 0 ) {
        value.style.color = 'red'
    }else {
        value.style.color = '#222'
    }
    value.textContent = count;
  });
});
