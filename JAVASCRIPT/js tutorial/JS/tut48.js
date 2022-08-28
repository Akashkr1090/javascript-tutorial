console.log("this is tutorial 48")

//  Regular Expression:
//  Basic functions
//  Metacharacter Symbols


//  Character Sets []
let regex =/h[a-z]rry/;     //can be any character from a to z
regex =/h[aty]rry/;     //can be a,t,y
regex =/h[^aty]rry/;    //cannot be any of a,t,y
regex =/h[^aty]rr[yYu]/;    //cannot be any of a, t, y +  can be a u or y
regex =/h[a-zA-Z]rr[yu0-9][0-9]/;   //we can have as many character sets as we want

//Quantifiers
regex = /har{2}y/     // r can occurs exactly 2 times
regex = /har{2}y/    //r can occurs exactly 2 times
const str= "harry bhai";


let result = regex.exec(str);
console.log("th result freom exec is",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);

}