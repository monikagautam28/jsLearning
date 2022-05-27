//exports parameterized function

// let array = [1, 2, 34, 5, 6, 7, 1, 2, 3, 78, 99, 99];
// let abc = ["m", "o", "n", "i", "k", "a"];
// let bcd = [];
// let obj = { name: "monu" };// obj["id"] = 1;
// console.log(++obj["id"]);
// console.log(obj);
// const newss = (a) => {
//   let ab = a.reduce((prev, curr) => {
//     if (prev[curr]) {
//       ++prev[curr];
//     } else {
//       prev[curr] = 1;
//     }
//     return prev;
//   }, {});
//   console.log(ab);
//   for (obj in ab) {
//     if (ab[obj] == 1) {
//       bcd.push(obj);
//     }
//   }
//   return bcd;
// };

// let output = newss(abc);
// console.log(output)

// ab = [
//   {
//     name: "monu",
//     salary: 2000,
//     dept: "hr",
//   },
//   {
//     name: "koaml",
//     salary: 4000,
//     dept: "it",
//   },
//   {
//     name: "sanshu",
//     salary: 5000,
//     dept: "tech",
//   },
//   {
//     name: "mandeep",
//     salary: 600,
//     dept: "sweepers",
//   },
//   {
//     name: "monika",
//     salary: 2000,
//     dept: "hr",
//   },
//   {
//     name: "mona",
//     salary: 5000,
//     dept: "tech",
//   },
//   {
//     name: "mayra",
//     salary: 2000,
//     dept: "it",
//   },
//   {
//     name: "tiyara",
//     salary: 5000,
//     dept: "tech",
//   },
//   {
//     name: "sanshrita",
//     salary: 4000,
//     dept: "it",
//   },
//   {
//     name: "savi",
//     salary: 600,
//     dept: "sweepers",
//   },
// ];

// const abs = (value, key) => {
//   let gh = value.reduce((prev, cur) => {
//     if (prev[cur[key]]) ++prev[cur[key]];
//     else prev[cur[key]] = 1;
//     return prev;
//   }, {});
//   return gh;
// };

// let cd = abs(ab,"salary");
// let d = abs(ab,"name");
// let f = abs(ab,"dept");
// console.log(cd);
// console.log(d);
// console.log(f);

// task [1,6,9,7,5] sum of value,array of obj //function * value 1 and value 2 operations

// array1 = [2, 3, 45, 6, 7];

// const dc = (arr) => {
//   gh = arr.reduce((prev, curr) => {
//     let v = prev + curr;
//     return v;
//   }, 0);
//   return gh;
// };
// let nd = dc(array1);
// console.log(nd);

// array2 = [
//   {
//     name:1,
//     salary:3000,
//     id:34

//   },
//   {
//     name:4,
//     salary:8000,
//     id :78
//   },
//   {
//     name:6,
//     salary:7000,
//     id:89
//   },
//   {
//     name:8,
//     salary:600,
//     id: 678
//   }
// ]

// const bdc = (arr,key) =>{

//   let add = arr.reduce((prev,cur)=>{

//     num = prev + cur[key]

//   return num

//   },0)
//   return add
// }

// let df = bdc(array2,"salary")
// let gh = bdc(array2,"name")
// let nd = bdc(array2,"id")
// console.log(df)
// console.log(gh)
// console.log(nd)

//calculator

// const calculator = (operator,num1,num2) =>{
// let total = num1+ operator + num2
// console.log(total)
// return eval(total)
// if(operator === "+")
// {
//   add = num1+num2;
//   return add;
// }
// else if (operator === "*")
// {
//   multiply = num1 * num2;
//   return multiply
// }
// else if (operator === "/")
// {
//   divide = num1 *num2
//   return divide
// }
// else
// {
//   subtraction = num2 -num1
//   return subtraction
// }

// }

//  let a = calculator("+",23,4)
//  let b = calculator("*",2,3)
//  let c = calculator("/",4,5)
//  let d = calculator("-",5,6)
//  let e = calculator("**",2,3)
//  console.log(a)
//  console.log(b)
//  console.log(c)
//  console.log(e)

// const bracket = (arg)=>{   //glt
//   if(arg == "()")
//   {
//     return true
//   }
//  else if(arg == "(")
//   {
//     return false
//   }
//  else if(arg == "(){}")
//   {
//     return true
//   }
//  else if(arg == "(){")
//   {
//     return true
//   }
//   else if(arg == "(){}[")
//   {
//     return false
//   }
//   else
//   {
//     return true
//   }

// }
// let a = bracket("{([")
// console.log(a)
// let b = bracket("(")
// console.log(b)

// const bracket = (b) => {
//   let a = [];
//   for (let obj = 0; obj < b.length; obj++) {
//     console.log(b[obj]);
//     if (b[obj] === "(" || b[obj] === "[" || b[obj] === "{") a.push(b[obj]);
//     else if (b[obj] === ")") a.pop();
//     else if (b[obj] === "]") a.pop();
//     else if (b[obj] === "}") a.pop();
//     else return false;
//   }
//   return a.length === 0;
// };

// let bg = bracket("(){");
// console.log(bg);

let array = [4, 7, 6, 20, 8, 5, 1];

const abc = (arr) => {
  let news = [];
  let missingno = [];
  let bc = Math.max(...arr);
  let cd = Math.min(...arr);
  console.log(bc);
  console.log(cd);
  for (let a = cd; a < bc; a++) news.push(a);

  news.forEach((e) => {
    let check = arr.some((it) => it === e);
    if (check == false) missingno.push(e);
  });
  return missingno;
};

let f = abc(array);
console.log(f);



