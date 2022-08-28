console.log("this is tutorial 49");

// character classes
let regex =/\wrry/;    //word character - _ or alphaber or number
regex =/\w+rry/;    //  + means more than one word character
regex =/\Wbhai/;    //  W means non word charcter
regex =/\W+bhai/;    //  + means more than one Non word charcter
const str= "harry bhai";


let result = regex.exec(str);
console.log("th result freom exec is",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);

}