document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeypress = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onmousedown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}
document.onkeydown = function (event) {
event = (event || window.event);
if (event.keyCode == 123) {
return false;
}
}


document.addEventListener("DOMContentLoaded", function() {
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var answer = this.nextElementSibling;
            answer.classList.toggle('faq-answer-visible');
        });
    });
});

// JavaScript code for calculating price
function calculateFiP() {
    var oP = parseFloat(document.getElementById("oP").value);
    var w = parseFloat(document.getElementById("w").value);
   



           var fiP;
    if (oP < 1000) {
        fiP = (oP * 1.10)+1;
    } else {
        fiP = oP * 1.05;
    }
    
    var totalPrice = fiP* 1.05 + (w * 0.023) + 2;



    document.getElementById("result").innerHTML = "<strong>  .  به قیمت نهایی کفش ها 6 یورو اضافه خواهد شد.قیمت نهایی تحویل در ایران (به یورو): </strong>" + "<strong>" + totalPrice.toFixed(2) + "</strong>";


}
