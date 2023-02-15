



/* 
Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型

const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // Inherited properties can be overwritten

me.printIntroduction();
// Expected output: "My name is Matthew. Am I human? true"

*/

Object.prototype.myCreate = function(obj){
  function F(){};
  F.prototype = obj;
  return new F();
}

