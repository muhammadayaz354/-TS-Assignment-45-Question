//Lower Case:
let personName: string = "Syed Shamir";
console.log("lowercase:", personName.toLocaleLowerCase());

//Upper Case:
console.log("uppercase:", personName.toUpperCase());

//Title Case:
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));