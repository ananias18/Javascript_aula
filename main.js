//const names = ["ruan", "corno", "mad", "viado", 10, false];

//const ruan = names[1];

//names.push("mad");

//console.log(names);

//names.unshift("viado");
//names.pop();
//names.pop();
//names.pop();

//names[3] = "mad";

//console.log(names.indexOf("ruan"));

//const sortedNames = names.sort();

//const namesIsArray = Array.isArray(names);


//console.log(names.length);
//console.log(sortedNames);
//console.log(namesIsArray);
//console.log(names);

/////////////////// Strings/////////

//shift(remove)

//unshift(adiciona para o inicio da lista) 

//pop(remove o ultimo valor da lista)

//indexOf(retorna o primeiro indice em que o elemento pode ser encontrado no array)

//sort(ordena os elementos do proprio arry e retorna o array)

//length(especifica o numero de argumentos esperados pela função)

//////////////////////////////////////////////
/////////////////Map, reduce/////////////////
//const numbers = [1,2,3,4,5];

//const numbersMultipliedbyTwo = numbers.map(function(number){
    //return number * 2
//});

//console.log(numbersMultipliedbyTwo);

//const ages = [8, 13, 27, 30, 22, 40];

//const evenAges = ages.filter(function(ages){
//  return ages % 2 === 0;
//});

//const sumOfAges = ages.reduce(function(age, accumulator){
//},0);

//console.log(sumOfAges);

//map(contém pares de chave-valor e lembra a ordem original da inserção das chaves qualquer valor pode ser usado como chave ou valor)

//reduce(executa uma função fornecida por você para cada elemento do array resultando num unico valor de retorno.)

///////////////////Objetos/////////////////////

//const person ={
//  firstName: "Hudson",
//    lastName: "Ruan",
//    age: "24"
//    hobbies: ["jogar CS", "Correr", "Ler"],
//    dog:{
//        name:"Hull",
//        age: 4,
//     },
// };

//const firstName = person.firstName;
//const lastName = person.lastName;
//const age = person.age;
//const hobbies = person.hobbies;

//Mesma coisa que acima
//primeiroNome foi renomeado
//const { firstName: primeirNome,lastName,age,hobbies, dog:{name: dogName}} = person;

//const read = person.hobbies[2];


//console.log(primeirNome);
//console.log(lastName);
//console.log(age);
//console.log(hobbies);

//person.dog = "Hull";

//console.log(person.dog.name);
//console.log(dogName);

 //const todos = [
 //     {
  //      id: 1,
   //     description: "estudar programação",
     //   isCompleted: false,

    // },
    // {
       // id: 2,
        //description: "Ler",
        //isCompleted: true,

    // },
    // {
        //id: 3,
        //description: "Treinar",
        //isCompleted: true,

    // },
//  ];
 
// const descriptionOflastTodo =todos[2];

// console.log(descriptionOflastTodo);

//const todosJSON = JSON.stringify(todos);

//console.log(todosJSON);

//////////////////////Loops////////////////////////////

// for (let index = 0; index < 10; index++){
    // console.log(index);
// }

 //const  cars = ["Ferrari", "Tesla","Mercedes"];

// for (let i = 0; i < cars.length; i++) {
    // console.log(cars[i]);
// }

//for(let car of cars) {
    // console.log(car);
// }

//cars.forEach(function(car, index){
//    console.log(index);
//    console.log(car);
//});

// let index = 0;

// while (index < 10){
    // console.log("index é menor do que 10!");
    // index = index + 1;
    // index += 1

    // mesma coisa que acima
    // index++;
// }
// const person = {
    // name: "jane",
    // age: 21,
// };

// for(property in person) {
    // console.log(person[property]);
// };

//////////////////////////////////////////////////////////

///////////////////////Condicionais///////////////////////

//&& and
//  || or

// const sum1 = 2 + 2;
//const sum = 1 + 2;
// const sum2 = 3 + 10;

// if(sum1 === 4 && sum2 === 6) {
    // console.log("sum1 is 4 and sum2 is 6!");
// }

// if (sum1 ===4 || sum2 === 6) {
    // console.log("sum1 is 4 or sum2 is 6!");
// }

// if (sum === 2) {
//     console.log("sum is 2!");
// }else if (sum === 3) {
//     console.log("sum is 3!");
// }else{
//     console.log("sum is not 2!");
// }

// if (sum === 2) {
//     number = 2;
// }else{
//     number = 4;
// }

//mesma coisa que acima
// let number = sum === 2 ? 2 : 4;


// console.log(number);

// const car = "Tesla";

// switch (car){
//     case "Mercedes":
//     console.log("Mercedes é linda");
//     break;
//     case "Ferrari":
//         console.log("Ferrari é vermelha");
//         break;
//         case "Tesla":
//             console.log("Tesla é Otimo");
//             break;
// }

//////////////////////////////////////////////////////////

//////////////////////////Verdadeiro e falso//////////////

// const x = '';
// //false

// const y = 0
// //false

// const a = null;
// const b = undefined;
// //false

// const list = [];
// //verdadeiro
// const object = {};
// verdadeiro
// if (!list) {
//     console.log(list)
// exclamação inverte o boleano
// }

///////////////////////Funções & Arrow Functions//////////

// function sum(a, b) {
//     return a + b;
// }

// const sumArrow2 = (a, b = 10) =>{
//     return a +b
// }

// //Mesma coisa que acima
// const sumValue = sumArrow2 = (a, b = 10) => a + b;

// const sumValue = sumArrow2(2);

// console.log(sumValue);

///////////////////////Orientação a Objeto////////////////

// class Person {
//     constructor(PrimeiroNome, UltimoNome, Idade){
//         this.PrimeiroNome = PrimeiroNome;
//         this.UltimoNome = UltimoNome;
//         this.Idade = Idade;

//     }

//     getfullName(){
//         console.log('${this.PrimeiroNome} ${this.UltimoNome}');
//     }

//     static speak() {
//         console.log("Hello world!");
//     }
// }

// const person = new person("Mad","Corno", 40);

// console.log(person);
// person.speak();

////////////////////////////////Herança///////////////////

// class Animal{
//     constructor(name){
//         this.name = name;
//     }

//     speak(){
//         console.log('${this.name} made some noise!');
//     }
// }

// class Dog extends Animal {
//     constructor(name){
//         super(name);
//     }

//     speak(){
//         console.log('${this.name} barked!');
//     }
// }

// const animal = new Animal("Simba");
// const dog = new Dog("bob");

// animal.speak();
// dog.speak();

///////////////////Manipulando elementos Doom/////////////

// const items = document.querySelector(".items");
// const button = document.querySelector(".btn");
// //items.remove();

// //items.firstElementChild.remove();
// //items.lastElementChild.remove();

// items.children[0].textContent = "item um";

// items.lastElementChild.innerHTML ="<h1>Hello world</h1>";

// button.style.background = "red";
// button.style.color = "blue";

//////////////////////Eventos/////////////////////////////

// const submitButton = document.querySelector('#subimit-button');
// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");

// const items = document.querySelector(".items");
// const body = document.querySelector("body");

// submitButton.addEventListener("click", function(e) {
//     e.preventDefault();

//     const nameValue = nameInput.value;
//     const emailValue = emailInput. value;
    
//     if(nameValue === "" || emailValue === "") {
//         return alert("please fill out all the fields!");
//     }
//     myForm.getElementsByClassName.background = "red";
//     items.firstElementChild.textContent = nameValue;
//     items.children[1].textcontent = emailValue;

//     body.style.background = "white";
// });

////////////////Criando & Validando um Formulario////////////////

// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const submitButton = document.querySelector("#submit-button");

// const errorMessage = document.querySelector(".msg");

// const items = document.querySelector(".items");

// submitButton.addEventListener("click",(e) =>{
//     e.preventDefault();

//     const nameValue = nameInput.value;
//     const emailValue = emailInput.value;

//     if(nameValue === "" || emailValue === ""){
//         errorMessage.textContent = "please fill out the fields!";
//         errorMessage.classList = "error";
        
//         setTimeout(() => {
//             errorMessage.textContent ="";
//             errorMessage.classList = "";
//         },3000);
//         return;

//     }

//     const li = document.createElement("li");
//     li.classList = "items";
//     li.innerHTML = `Nome: ${nameValue}<br />Email: ${emailValue}`;

//     items.appendChild(li);

//     nameInput.value = "";
//     nameInput.value = "";
// });