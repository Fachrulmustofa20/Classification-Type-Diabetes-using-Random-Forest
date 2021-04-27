let nav = document.querySelector('nav');
if (window.innerWidth <= 991) {
    nav.classList.add("bg-nav");
}

window.addEventListener("scroll", function () {
    if (window.innerWidth > 991) {
        if (window.pageYOffset > 50) {
            nav.classList.add("bg-nav");
        } else {
            nav.classList.remove("bg-nav");
        }
    }
});

(function () {
    'use strict'
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.active').classList.remove('active');
                document.querySelector('a[href*=' + i + ']').classList.add('active');
            }
        }
    };
})();

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()