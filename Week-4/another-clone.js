const putri = {
    "name": "putri",
    "birthday":"2005-02-13",
    "phone": "081234567890",
    "department":{
        "head_name":"Somantri",
        "name": "Informatic Engineering"
    }
}
const bayu = Object.assign({},putri);
//This makes a shallow copy.
//Top-level properties (like name, birthday, phone, department) are copied.
//But nested objects (like department) are shared, not copied.
bayu.name ="Bayu"
//his changes only bayu.name because name is a primitive (string) — it’s separate for each object
bayu.department.head_name="Kamdhan"
//Because department is shared, changing bayu.department.head_name also changes putri.department.head_name

console.log(bayu.name == putri.name);//true
console.log(bayu.department.head_name == putri.department.head_name);//false
