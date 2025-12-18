const putri = {
  name: "Putri",
  address: {
    primary: "Bandung",
  },
};

// ❌ Shallow Copy Example
const bayu1 = Object.assign({}, putri);
bayu1.name = "Bayu";
bayu1.address.primary = "Aceh";
console.log("Shallow Copy:");
console.log("Putri:", putri.address.primary); // Aceh
console.log("Bayu :", bayu1.address.primary); // Aceh

// Deep Copy Example
//const bayu2 = structuredClone(putri);
//bayu2.name = "Bayu";
//bayu2.address.primary = "Aceh";
//console.log("\nDeep Copy:");
//console.log("Putri:", putri.address.primary); // Bandung
//console.log("Bayu :", bayu2.address.primary); // Aceh

// Deep copy
// Deep copy section
const putriDeep = {
  name: "Putri",
  birthday: "2005-02-13",
  phone: "081234567890",
  address: {
    primary: "Bandung",
    secondary: "Sukabumi",
  },
};

const bayuDeep = structuredClone(putriDeep);

bayuDeep.name = "Bayu";
bayuDeep.address.primary = "Aceh";

console.log("\nDeep Copy:");
console.log("Putri:", putriDeep.address.primary);
console.log("Bayu :", bayuDeep.address.primary);


