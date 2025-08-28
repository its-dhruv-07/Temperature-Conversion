const result = document.getElementById("result");
const input = document.getElementById("textbox");
const F_to_C = document.getElementById("F_to_C");
const C_to_F = document.getElementById("C_to_F");
let ans;
function cnvrt(){
    if(F_to_C.checked){
        ans = Number(input.value);
        ans = (ans-32)*5/9;
        result.textContent=ans.toFixed(1) + "°C";
    }
    else if(C_to_F.checked){
        ans = Number(input.value);
        ans = (ans*9/5)+32;
        result.textContent=ans.toFixed(1) + "°F";
    }
    else{
        result.textContent="Select a unit";
    }
}