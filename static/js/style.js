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