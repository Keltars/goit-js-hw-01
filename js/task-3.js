function getElementWidth(content, padding, border) { 
const numericalContent = Number.parseFloat(content);
const numericalPadding = Number.parseFloat(padding);
const numericalBorder = Number.parseFloat(border);
    return numericalContent + numericalPadding * 2 + numericalBorder * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

console.log(Boolean('0'));

console.log(3 > 2 > 1);

console.log("5" + 5);

console.log("10" > 5);

console.log(Boolean(0));

console.log(Number("0"));

console.log("5" - 5);

console.log("5" - true);

console.log(true && 0 && 'їжачок');

console.log();