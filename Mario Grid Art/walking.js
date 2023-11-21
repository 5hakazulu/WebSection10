var BLFoot = document.getElementsByClassName("bigFootL");
var BRFoot = document.getElementsByClassName("bigFootR");

function RightFoot(){
    BRFoot.display = true;
    BLFoot.active = false;
}

function LeftFoot(){
    BRFoot.active = false;
    BLFoot.active = true;
}
RightFoot();

setInterval(function () {
    RightFoot();
    setTimeout(function () {
        LeftFoot();
    }, 2000);
}, 4000);