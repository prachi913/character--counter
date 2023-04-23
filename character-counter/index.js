const textarea = document.getElementById("textarea");

const totalelemrnt = document.getElementById("total")

const remainelement = document.getElementById("remain");

// if (remainelement.innerText==0) {
//     remainelement.style.color ="green";
// }



textarea.addEventListener("keyup", () => {
   
      fun()
       
})

fun()
// here i did remore and see changes

function fun() {
    totalelemrnt.innerText = textarea.value.length;

    remainelement.innerText =
      textarea.getAttribute("maxLength") - textarea.value.length;
    if (totalelemrnt.innerText == 14) {
        totalelemrnt.style.color = "green"
    } else {
         totalelemrnt.style.color = "red";
    }
        if (remainelement.innerText == 0) {
          remainelement.style.color = "green";
        } else {
          remainelement.style.color = "red";
        }

}