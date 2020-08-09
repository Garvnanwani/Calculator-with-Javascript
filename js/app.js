let input = document.getElementById("input");
let result = document.getElementById("result");

function calculate(call) {
    switch (call) {
        case 'AC':
            input.innerHTML = ""
            result.innerHTML = 0
            break;

        case 'C':
            input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length - 1)
            result.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0 : math.evaluate(input.innerHTML);
            break;

        case "=":
            result.innerHTML = math.evaluate(input.innerHTML) === undefined ? 0 : math.evaluate(input.innerHTML);
            break;
        default:
            input.innerHTML += call
    }
}
