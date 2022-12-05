var list = [5,6,7];
for(let item in list) {
    console.log(item);  // index.
}
for(let item in list) {
    console.log(list[item]); //value.
}
for(let item of list) {
    console.log(item); //value.
}
