class Greeter{
    greeting:string;

    constructor(message:string){
        this.greeting=message;
    }

    greet(){

        return "Hello,"+this.greeting;
    }
}
let greeter = new Greeter("World");

var  button= document.createElement("button");
button.textContent = "Welcome";
button.onclick=function(){

    alert(greeter.greet());
}
document.body.appendChild(button);
alert("Welcome");
    