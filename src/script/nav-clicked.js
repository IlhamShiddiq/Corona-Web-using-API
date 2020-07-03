const home = document.querySelector("#home");
const what_is = document.querySelector("#nav-what-is");
const sym = document.querySelector("#nav-sym");
const prevent = document.querySelector("#nav-prevent");
const statistic = document.querySelector("#nav-statistic");

home.addEventListener("click", function () {
    $(what_is).removeClass('active');
    $(sym).removeClass('active');
    $(prevent).removeClass('active');
    $(statistic).removeClass('active');
});

what_is.addEventListener("click", function () {
    $(this).addClass('active');
    $(sym).removeClass('active');
    $(prevent).removeClass('active');
    $(statistic).removeClass('active');
});

sym.addEventListener("click", function () {
    $(what_is).removeClass('active');
    $(this).addClass('active');
    $(prevent).removeClass('active');
    $(statistic).removeClass('active');
});

prevent.addEventListener("click", function () {
    $(what_is).removeClass('active');
    $(sym).removeClass('active');
    $(this).addClass('active');
    $(statistic).removeClass('active');
});

statistic.addEventListener("click", function () {
    $(what_is).removeClass('active');
    $(sym).removeClass('active');
    $(prevent).removeClass('active');
    $(this).addClass('active');
});