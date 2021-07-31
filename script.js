//== STORIES CIRCLE ==
let crl1 = document.getElementById("myCrl").getContext("2d");
let crl2 = document.getElementById("myCrl1").getContext("2d");
let crl3 = document.getElementById("myCrl2").getContext("2d");

const crl = function (crl) {
    crl.beginPath();
    crl.arc(60, 100, 40, 0, 2 * Math.PI);
    const color = function () {
        if (crl === crl1) {
            return (crl.fillStyle = "#A9A9A9");
        } else if (crl === crl2) {
            return (crl.fillStyle = "#2F4F4F");
        } else if (crl === crl3) {
            return (crl.fillStyle = "#B0C4DE");
        }
    };
    color();
    crl.fill();
    crl.linewidth = 5;
    crl.strokeStyle = "#dbdbdb";
    crl.stroke();
};

const circles = [crl1, crl2, crl3];
circles.forEach((element) => {
    crl(element);
});
