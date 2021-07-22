$(document).ready(function() {

$('.hamburger').on('click', function() {
    $('.navig').toggleClass('active');
    $('.hamburger').toggleClass('bg-change');

}),


//Principles section ------------------------------

$('.princip-bg').hover(function() {
    $(this).addClass('blend-mode-hover');
},function() {
    $(this).removeClass('blend-mode-hover');
})
//Forms ------------------------------
let inputField = 
$('.my-form input[type=text], .my-form input[type=email], .my-form textarea');
inputField.focus(function() {
    $(this).addClass('input-field')
}),
inputField.blur(function() {
    $(this).removeClass('input-field')
});

$('.my-form input[type=submit]').on('click', function() {
    $(this).css({'background-color': '#81ccbb'});
    alert('Отправлено!');
})

});