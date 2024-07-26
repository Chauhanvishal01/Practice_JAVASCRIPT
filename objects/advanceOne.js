const university = {
  department: ["btech", "bca", "mca"],
};
function addDepartment(obj, newDepartment) {
  obj.department.push(newDepartment);
}
addDepartment(university, "Mtech");
console.log(university);

const company = {
  codingDepartment: ["coder", "tester"],
  desginDepartment: ["desginer"],
};

function mergedepart(obj, departone, departtwo) {
  obj.concat(departone, departtwo);
}
mergedepart(company,company.codingDepartment,company.desginDepartment)
console.log(company);
