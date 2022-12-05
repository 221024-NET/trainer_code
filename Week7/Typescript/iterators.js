var list = [5, 6, 7];
for (var item in list) {
    console.log(item); // index.
}
for (var item in list) {
    console.log(list[item]); //value.
}
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var item = list_1[_i];
    console.log(item); //value.
}
