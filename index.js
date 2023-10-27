const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat (name) {
    cats.push(name);
}
function destructivelyPrependCat (name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat () {
    cats.pop();
}
function destructivelyRemoveFirstCat () {
    cats.shift();
}
function appendCat(name) {
    const newCatArray = [...cats, name];
    return newCatArray;
}
function prependCat(name) {
    const newerCatArray = [name, ...cats];
    return newerCatArray;
}
function removeLastCat() {
    const removeLast = cats.slice(0, -1);
    return removeLast;
}
function removeFirstCat () {
    const removeFirst = cats.slice(1);
    return removeFirst;
}