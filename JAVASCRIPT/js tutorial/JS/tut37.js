console.log('this is tutorial 37');

//pretent that this response is coming from th server
const students = [
    {name: "akash",subject: "javascript"},
    {name: "akash1",subject: "ML"}
]

function enrollStudentd(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("student has been enrolled");
        callback();
    }, 1000);
}

function getStudents(){
    setTimeout(function(){
        let str ="";
        students.forEach(function(student){
            str += `<li> ${student.name}</li>`
            str += `<li> ${student.subject}</li>`
        })
        document.getElementById('student').innerHTML= str;
        console.log("student has been fetched");
    }, 2000);

}

let newStudent ={name:"sunny", subject:"python"}
enrollStudentd(newStudent, getStudents);
// getStudents();
