

var square = x => x * x;
console.log(square(9));

var user = {
    name: 'Guilherme',
    sayHi: () => console.log(`Hi. I'm ${this.name}`),
    sayHay_altered () {console.log(arguments); console.log(`Hi. I'm ${this.name}`)}
}
user.sayHi()
user.sayHay_altered()
