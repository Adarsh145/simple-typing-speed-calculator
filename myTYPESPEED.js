let speedTypingTest = document.getElementById("speedTypingTest");
let quoteDisplay = document.getElementById("quoteDisplay");
let timer = document.getElementById("timer");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let loading = document.getElementById("loading");
let options = {
    method: "GET"
};
fetch("https://apis.ccbp.in/random-quote", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        let {
            content
        } = data;
        quoteDisplay.textContent = content;

    });
let timerE1 = 0;
let timerId = setInterval(function() {
    timerE1 = timerE1 + 1;
    timer.textContent = timerE1;
}, 1000);


resetBtn.onclick = function() {
    speedTypingTest.classList.toggle("d-none");
    loading.classList.add("d-none");
    timer.textContent = "0 seconds";
    quoteInput.value = "";
    result.textContent = "";
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            let {
                content
            } = data;
            speedTypingTest.classList.emove("d-none");
            loading.classList.remove("d-none");
            quoteDisplay.textContent = content;
        });
    timerE1 = 0;
    timer.textContent = timerE1 + " seconds";
    timerId = setInterval(function() {
        timerE1 = timerE1 + 1;
        timer.textContent = (timerE1 + " seconds");


    }, 1000);

};
submitBtn.onclick = function() {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(timerId);
        result.textContent = "You typed in " + timerE1 + " seconds";
    } else {
        result.textContent = "You typed incorrect sentence";
    }
};