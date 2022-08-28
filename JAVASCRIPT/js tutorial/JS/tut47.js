console.log("this is tutoril 47")

let regex = /akash/;
// lets look into some metacharacter Symbol

    // ^ it tells letter start with
    regex= /^a/
    // $ means at the end of the string end
    regex=/sh$/
    // matches any one caharacter
    regex=/a.ash/
    //matches any 0 or more characters
    regex=/a*ash/
    //? after character means that character is optional
    regex=/a?ashi?/
    //* it used as a meta character
    regex=/a\*ash/

let str = "akash is a good boy and code is akash";

let result = regex.exec(str);
console.log("th result freom exec is",result);

if(regex.test(str)){
    console.log(`The string ${str} matches the expression ${regex.source}`);
}
else{
    console.log(`The string ${str} does not matches the expression ${regex.source}`);

}