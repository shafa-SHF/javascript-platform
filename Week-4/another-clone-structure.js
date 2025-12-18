const putri = {    //constant object named putri is created.

    "name" : "putri",
    "birthday" : "2005-02-13",
    "phone" :"08234567890",
    "address" : {       //inner object called address.
        "primary":"Bandung",
        "secondary":"Sukabumi"
    }
}


const bayu = structuredClone(putri);
//The function structuredClone() creates a deep copy of putri.
//A new object bayu is created.
//It has the same data as putri.
//But it’s not connected to putri.
bayu.name= "Bayu"
//Now, the name inside bayu changes from "putri" to "Bayu".
//This change affects only bayu, not putri
//Both are independent objects stored in different memory locations.
bayu.address.primary ="Aceh";


console.log(putri.name);
console.log(putri.address.primary);

console.log(bayu.name);
console.log(bayu.address.primary);


