const student ={
    "name": "putri",
    "birthday": "200-02-13",
    "phone":"081234567890",
    "address":"J1.Raya No.123,Sukabumi"
}
console.log(student.name);

//adding new property to the object
student.isMarried = true ;
student["alternative address"]="J1.Raya No 321,Bandung";

console.log(student);

//deleting property from the object
delete student.phone;
console.log(student);

//updating property value
student.name = "putri Aulia";
console.log(student);

//check if property exists in the object
if ("alternative addres" in student) {
    console.log(student["alternative address"]);
}
if(student.hasOwnProperty("alternative address")){
    console.log(student["alternative address"]);
}
for (const key in student){
    console.log(key + ":" + student[key] );
}