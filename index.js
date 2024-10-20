// FUNCTION TO ACCEPT USER INFORMATION

function studentData(){

    //Accepting Inputs From User And Validating Inputs
    let name = prompt("Enter the name of the student: ");
    while(!name || !isNaN(name)){
        name = prompt("Please enter a valid name. ");
    }

    let age = prompt("Enter the age of the student: ");
    while(isNaN(age) || age < 0){
        age = prompt("Please enter a valid age.");
    }

    let email = prompt("Enter the email of the student: ");
    while(!email.includes("@gmail.com")){
        email = prompt("please enter a valid email.");
    }
    let maths = prompt("Enter the grade for Maths:");
    while(isNaN(maths) || maths < 0 || maths > 100){
        maths = prompt("please Enter a valid grade (0-100)");
    }
    let english = prompt("Enter the grade for English:");
    while(isNaN(english) || english < 0 || english > 100){
        english = prompt("please Enter a valid grade (0-100)");
    }
    let science = prompt("Enter the grade for Science:");
    while(isNaN(science) || science < 0 || science > 100){
        science = prompt("please Enter a valid grade (0-100)");
    }

    //CALCULATING THE AVERAGE OF THE GRADES 
    let total = Number(maths) + Number(english) + Number(science);
    let averageGrades = total / 3;

    //RETURNING THE INPUTS FFROM THE USER
    return {
        name,
        age,
        email,
        english,
        maths,
        science,
        averageGrades,
    };
}

//FUNCTION TO DISPLAY THE DETAILS TO THE CONSOLE USING forEach()
function displayStudents(Student){
    Student.forEach((person, index) => {
        console.log(`Students ${index + 1}:`);
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Email: ${person.email}`);
        console.log(`English grade: ${person.english}`);
        console.log(`Maths grade: ${person.maths}`);
        console.log(`Science grade: ${person.science}`);
        console.log(`Average Grade: ${person.averageGrades.toFixed(2)}`);
        console.log("-----------------------------");
    });
}

//FUNCTION TO DISPLAY SUMMMARY AND AVERAGE
function displaySummary(){
    console.log("SUMMARY");
    Student.forEach((person, index) =>{
        console.log(`${index + 1} ${person.name} (${person.age}) -- Average: ${person.averageGrades.toFixed(2)}`)
    });
}

//FUNCTION TO GET THE HIGHEST AVERAGE
function findMaxAverage(Student){
    let highestAverage = Student[0];
    Student.forEach(person => {
        if (person.averageGrades > highestAverage.averageGrades){
            highestAverage = person;
        }
    });
    return highestAverage;
}

// GETTING INPUTS FOR ADDITIONAL STUDENTS THROUGH CONFIRM()
let Student = [];
let addMore = true;

while(addMore){
    Student.push(studentData());
    addMore = confirm("Do you want to add more students?: ");
}

//DISPLAYING THE DETAILS TO THE CONSOLE
displayStudents(Student);

//CALLING FUNCTION TO DISPLAY SUMMMARY OF AVERAGE TO CONSOLE
displaySummary();

//DISPLAYING HIGHEST STUDENT AVERAGE TO CONSOLE
let highestAverage = findMaxAverage(Student);
console.log(`The highest Averge is ${highestAverage.name} (${highestAverage.averageGrades.toFixed(2)})`);