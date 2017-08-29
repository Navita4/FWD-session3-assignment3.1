var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World");
var button = document.createElement("button");
button.textContent = "Welcome";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
alert("Welcome");
