
/*
const myAge=16
let message

message = myAge>=18?'you can vote':'you cannot vote'



*/



/*
if(myAge>=18){
    message='you can vote'
    
}
else{
    message='you cannot vote'
}

*/


/*
console.log(message)

*/
/*
const myAge = 20;
const showPage = () => {
    console.log('Showing the page');
};
const showErrorPage=() => {
    console.log('Showing the error page');
};

myAge>=21?showPage():showErrorPage();
console.log(message);
*/

/*correto*/
/*
const team = ['Tyler','Porter'];
console.log(team.length <= 4 ?"team size:" +(team.length):'to many people');
*/

/*
const Person = function(firstName,lastName,age){
    this.firstName=firstName
    this.lastName = lastName
   this.age=age
};


Person.prototype.getBio= function(){
    return this.firstName +' is ' +this.age
    
}

const me = new Person('andrew','Mead',27);
//me.firstName='Jen'
console.log(me.getBio());

const person2=new Person('Clancey','Turner',65)
console.log(person2.getBio());


*/





const Hangman = function(word, remainingGuesses){
    this.word=word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters=['c']
} 

Hangman.prototype.getPuzzle=function(){
    
let puzzle='';
this.word.forEach((letter)=>{
    
if(this.guessedLetters.includes(letter)||letter===''){
    puzzle+=letter
}else{
    puzzle += '*'
}
})

return puzzle
}
const game1 = new Hangman('Cat',2)
console.log(game1)

const game2=new Hangman('New Jersey',4)
console.log(game2)


























