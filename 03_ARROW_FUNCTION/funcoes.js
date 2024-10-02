const materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
console.log(materials.map((material)=> material.length));

let a = 2;
let b = 10;

let somar = (num1, num2) => num1 + num2; // Not nescessary return
console.log(somar(a,b));

//crianfo um corpo se for assim e preciso do return
let funcaomath = (x, y) =>{
    
    let op;

    if(x >=5){
        op = x * y;
    }else{
        op = x / y
    }

    return op;
}

console.log(funcaomath(a,b));

//funcao em um so corpo

let frase = 'O Gato subiu no poste'

let fraseArray = (frase) => frase.split(' ');
console.log(fraseArray(frase))