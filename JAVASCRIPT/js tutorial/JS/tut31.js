console.log("this is tutorial 31 on javascript ");

class Employee {
  constructor(givenName, givenExperience, givenDivision) {
    this.name /*this is for object*/ =
      givenName; /*this is for a input you give in construct or*/
    this.experience = givenExperience;
    this.division = givenDivision;
  }
  slogan() {
    return `I am ${this.name} and this company is best`;
  }
  joinigYear(){
    return 2020 - this.experience;
  }
  static add(a, b){
    return a+b;
  }
}

class Programmer extends Employee {
  constructor(givenName, givenExperience, givenDivision, language,github){
    // super allowed to acces ardument list we prevous define in Employee class
    super(givenName, givenExperience, givenDivision);
    this.language = language;
    this.github = github;
  }
  favLanguage(){
    if(this.language =='python'){
      return 'python'
    }
    else{
      return 'javaScript'
    }
  }
    
}

// akash = new Employee("Akash", 10, "IT-P");
// console.log(akash.joinigYear());
// console.log(Employee.add(34, 5));

rohan = new Programmer("Rohan", 4, "IT", "c","Akashkr1090")
console.log(rohan)
console.log(rohan.favLanguage())
