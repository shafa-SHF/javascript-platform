const student = {
    "name": "putri",
    "birthday" : "2005.02.13",
    "phone":"08123567890",
    "adress":"J1.Raya No.123,Sukabumi"
}
const putri =student;
//Now putri does not create a new copy.
//It just points to the same object in memory as student.
putri.name = "Putri Aulia";



console.log(student == putri);//true
//Both variables refer to the same object  
console.log(student.name)
//Because we changed the shared object, this now prints:Putri Aulia

