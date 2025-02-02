let cond;
function a() {
    let x;
    for(x = ""; cond; x = 5){
        x; // string | number
    }
}
function b() {
    let x;
    for(x = 5; cond; x = x.length){
        x; // number
        x = "";
    }
}
function c() {
    let x;
    for(x = 5; x = x.toExponential(); x = 5){
        x; // string
    }
}
function d() {
    let x;
    for(x = ""; typeof x === "string"; x = 5){
        x; // string
    }
}
function e() {
    let x;
    for(x = "" || 0; typeof x !== "string"; x = "" || true){
        x; // number | boolean
    }
}
function f() {
    let x;
    for(; typeof x !== "string";){
        x; // number | boolean
        if (typeof x === "number") break;
        x = undefined;
    }
    x; // string | number
}
