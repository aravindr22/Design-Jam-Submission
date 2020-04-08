// JavaScript source code
window.onscroll = function () {
    const docScrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 991) {
        if (docScrollTop > 100) {
            document.querySelector("header").classList.add("fixed")
        } else {
            document.querySelector("header").classList.remove ("fixed")
        }
    }
}

// navbarlinks

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a");

a.forEach(function (element) {
    element.addEventListener("click", function () {
        for (let i = 0; i < a.length; i++) {
            a[i].classList.remove("active");
        }
        this.classList.add("active")
        document.querySelector(".navbar").classList.toggle("show");
    })
});

// hamburger

const hamburger = document.querySelector(".ham-burger");

hamburger.addEventListener("click", function () {
    document.querySelector(".navbar").classList.toggle("show"); 
})

//Type Write effect

var sentences = [
    "Hello,",
    "My Name is"
];
var part = 0,
    part_index = 0,
    interval_instance,
    elm = document.querySelector("#change");

function write() {
    var text = sentences[part].substring(0, part_index + 1);
    elm.innerHTML = text;
    part_index++;

    if (text === sentences[part]) {
        clearInterval(interval_instance);
        setTimeout(function () {
            interval_instance = setInterval(Delete, 25);
        }, 1000);
    }
}

function Delete() {
    var text = sentences[part].substring(0, part_index + 1);
    elm.innerHTML = text;
    part_index--;

    if (text === '') {
        clearInterval(interval_instance);

        if (part == (sentences.length - 1))
            part = 0;
        else
            part++;
            part_index = 0;

        setTimeout(function () {
            interval_instance = setInterval(write, 85);
        }, 400);
    }
}
interval_instance = setInterval(write, 85);