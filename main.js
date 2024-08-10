const x2 = document.getElementById("x2");
const sqrt = document.getElementById("sqrt");
const left_par = document.getElementById("left_par");
const right_par = document.getElementById("right_par");
const equal = document.getElementById("equal");
const pi = document.getElementById("pi");

x2.value = "x\xB2";
sqrt.value = "\u221a";
left_par.value = "(";
right_par.value = ")";
pi.value = "\u03c0";

x2.addEventListener("click", (e) => { document.calculator.ans.value += "\xB2" });
sqrt.addEventListener("click", (e) => { document.calculator.ans.value += "\u221a" + "(" });
left_par.addEventListener("click", (e) => { document.calculator.ans.value += "(" });
right_par.addEventListener("click", (e) => { document.calculator.ans.value += ")" });
pi.addEventListener("click", (e) => { document.calculator.ans.value += "\u03c0" });

equal.addEventListener("click", (e) => {
    const expr_input = document.getElementById("ans");
    expr = expr_input.value;
     
    expr = expr.replace(/\xB2/g, "**2");
    expr = expr.replace(/\u221a/g, "Math.sqrt");
    expr = expr.replace(/\u03c0/g, "Math.PI");

    expr = expr.replace(/e/g, "Math.E");
    expr = expr.replace(/ln/g, "Math.log");

    expr = expr.replace(/sin\(/g, "Math.sin(Math.PI/180*");
    expr = expr.replace(/cos\(/g, "Math.cos(Math.PI/180*");
    expr = expr.replace(/tan\(/g, "Math.tan(Math.PI/180*");

    expr = expr.replace(/cot\(/g, "1/Math.tan(Math.PI/180*");
    expr = expr.replace(/csc\(/g, "1/Math.sin(Math.PI/180*");
    expr = expr.replace(/sec\(/g, "1/Math.cos(Math.PI/180*");

    expr = expr.replace(/sinh\(/g, "Math.sinh(Math.PI/180*");
    expr = expr.replace(/cosh\(/g, "Math.cosh(Math.PI/180*");
    expr = expr.replace(/tanh\(/g, "Math.tanh(Math.PI/180*");

    console.log(expr);

    expr_input.value = eval(expr);
});