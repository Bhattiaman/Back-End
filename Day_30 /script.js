// let n = 5;
// for(let i = 0; i< n; i++){
//     console.log("hello : ", i);
// }

console.log(process.argv);

let args = process.argv;
for(let i = 2; i < args.length; i++){
    console.log(args[i]);
}