function getElementWidth(content, padding, border){
const contentWibth = parseFloat(contant);
const paddingWibth = parseFloat(padding) * 2;
const borderWibth = parseFloat(border) * 2;

const totalWibth = contentWibth + paddingWibth + borderWibth;
return totalWibth
}
console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));