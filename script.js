var name_of_student_array = [];
var display_student_name = [];
var length_of_array = display_student_name.length;

function submit(){
    /*var one = document.getElementById("name_of_student1").value;
    var two = document.getElementById("name_of_student2").value;
    var three = document.getElementById("name_of_student3").value;
    var four = document.getElementById("name_of_student4").value;
    var five = document.getElementById("name_of_student5").value;
    
    name_of_student.push(one);
    name_of_student.push(two);
    name_of_student.push(three);
    name_of_student.push(four);
    name_of_student.push(five);*/

    for (var i = 1; i <= 5; i++){
        var student = document.getElementById("name_of_student"+i).value;
        console.log(student);
        display_student_name.push(student);
    };

    for (var j = 1; j<length_of_array; j++){
        console.log(length_of_array);
        display_student_name.push("<h4> Name = "+ name_of_student_array [j]+ "</h4>");
        console.log(display_student_name);
    };

    /*console.log(name_of_student);*/

    document.getElementById("display_name_with_comms").innerHTML=display_student_name;

    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";

    

};

function sort(){
name_of_student.sort();
console.log(name_of_student);

document.getElementById("display_name_with_comms").innerHTML=name_of_student;

};

