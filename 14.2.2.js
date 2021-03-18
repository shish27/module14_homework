const jsonStr = `
{"name":"Anton",
"age":36,
"skills":["Javascript","HTML","CSS"],
"salary":80000}`;

const data = JSON.parse(jsonStr);

const result = {
  name: data.name,
  age: Number(data.age),
  skills: data.skills,
  salary:  Number(data.salary),
};
console.log(result);


const jsStr = `
{ "name": "Anton",
  "age": 36,
  "skills": [
    "Javascript", "HTML", "CSS"
    ],
    "salary": 80000
 }`;

const data2 = JSON.stringify(jsStr);

console.log(data2);