var Typed = new Typed(".text1", {
    strings: ["Software Engineer", "Competitive Programmer", "Full Stack Developer", "App Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


document.addEventListener("DOMContentLoaded", function () {

    setPercentage();

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");


    window.addEventListener("wheel", function () {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.getBoundingClientRect().top + window.pageYOffset - 450;
            sectionId = current.getAttribute("id");
            console.log(sectionId);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    });


    navLinks.forEach(link => {

        link.addEventListener('click', function () {
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');

        });

    });

    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
        $('.right').removeClass('active');
        $('.left').css("width", "30%");
        $('.nav-line').removeClass('hidden');
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.right').addClass('active');
        $('.nav-line').addClass('hidden');
        $('.left').css("width", "0%");
    });

    $('.side-bar').on('transitionend', function (event) {
        if (!$(this).hasClass('active')) {
            $('.menu-btn').css("visibility", "visible");
        }
    });

    function setPercentage() {
        const pathLength = 503;
        const percent = [0.9,0.65,0.8,0.7];

        for(let i=1;i<=percent.length;i++){
            let dashoffset = pathLength - (pathLength * percent[i-1]);
            document.documentElement.style.setProperty(`--dashoffset${i}`, dashoffset);
        }
        
    }

    if($('.right').hasClass('active')){
        $('.services-list').css({
            'grid-template-columns': 'repeat(auto-fill, minmax(400px, 1fr))'
        });
    }


});