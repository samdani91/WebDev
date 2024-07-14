// $(document).ready(function() {
//     // Initialize the sidebar to be open initially with 30% width
//     let sidebarWidthPercentage = 30; // Sidebar width in percentage
//     let viewportWidth = $(window).width();
//     let minSidebarWidth = (viewportWidth * sidebarWidthPercentage) / 100;
//     let maxSidebarWidth = viewportWidth / 2;

//     $('.side-bar').addClass('active');
//     $('.side-bar').css('width', `${sidebarWidthPercentage}%`);
//     $('.menu-btn').css("visibility", "hidden");

//     // Adjust the nav line position
//     const updateNavLinePosition = () => {
//         const sidebarWidth = $('.side-bar').outerWidth();
//         $('.nav-line').css('left', `${sidebarWidth}px`);
//     };

//     updateNavLinePosition();

//     $('.menu-btn').click(function() {
//         $('.side-bar').addClass('active');
//         $('.menu-btn').css("visibility", "hidden");
//         $('.side-bar').css('left', '0'); // Open sidebar
//         updateNavLinePosition();
//         $('.nav-line').show(); // Show nav line when sidebar is opened
//     });

//     $('.close-btn').click(function() {
//         const sideBarWidth = $('.side-bar').outerWidth();
//         $('.side-bar').css('left', `-${sideBarWidth}px`);
//         $('.side-bar').removeClass('active');
//         $('.nav-line').hide(); // Hide nav line when sidebar is closed
//     });

//     // Use transitionend event to handle when the transition finishes
//     $('.side-bar').on('transitionend', function(event) {
//         if (!$(this).hasClass('active')) {
//             $('.menu-btn').css("visibility", "visible");
//         }
//     });

//     const menuLinks = document.querySelectorAll('.menu a');
//     const navLine = document.querySelector('.nav-line');
//     const sideBar = document.querySelector('.side-bar');
//     let isResizing = false;

//     menuLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             menuLinks.forEach(link => link.classList.remove('active'));
//             this.classList.add('active');
//         });
//     });

//     navLine.addEventListener('mousedown', function(e) {
//         isResizing = true;
//         document.addEventListener('mousemove', resize);
//         document.addEventListener('mouseup', stopResize);
//     });

//     function resize(e) {
//         if (isResizing) {
//             const newWidth = e.clientX - sideBar.offsetLeft;

//             // Constrain the new width between minSidebarWidth and maxSidebarWidth
//             if (newWidth >= minSidebarWidth && newWidth <= maxSidebarWidth) {
//                 sideBar.style.width = newWidth + 'px';
//                 updateNavLinePosition(); // Update nav line position while resizing
//             }
//         }
//     }

//     function stopResize() {
//         isResizing = false;
//         document.removeEventListener('mousemove', resize);
//         document.removeEventListener('mouseup', stopResize);
//     }

//     // Adjust sidebar width and constraints on window resize
//     $(window).resize(function() {
//         const viewportWidth = $(window).width();
//         minSidebarWidth = (viewportWidth * sidebarWidthPercentage) / 100;
//         maxSidebarWidth = viewportWidth / 2;

//         const currentSidebarWidth = $('.side-bar').width();
//         if (currentSidebarWidth < minSidebarWidth) {
//             $('.side-bar').css('width', `${minSidebarWidth}px`);
//         } else if (currentSidebarWidth > maxSidebarWidth) {
//             $('.side-bar').css('width', `${maxSidebarWidth}px`);
//         }
//         updateNavLinePosition(); // Update nav line position on window resize
//     });

//     // Scroll event listener for highlighting the active section in the menu
//     const sections = document.querySelectorAll("section");
//     const navLinks = document.querySelectorAll(".menu a");

//     window.addEventListener("scroll", () => {
//         let current = "";

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop;
//             if (pageYOffset >= sectionTop - 60) {
//                 current = section.getAttribute("id");
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.remove("active");
//             if (link.getAttribute("href").includes(current)) {
//                 link.classList.add("active");
//             }
//         });
//     });
// });
$(function() {
    let isResizing = false;
    let lastDownX = 0;

    const container = $('.container');
    const left = $('.left');
    const right = $('.right');
    const navLine = $('.nav-line');

    navLine.on('mousedown', function(e) {
        isResizing = true;
        lastDownX = e.clientX;
        e.preventDefault();
    });

    $(document).on('mousemove', function(e) {
        if (!isResizing) return;

        const containerOffsetLeft = container.offset().left;
        const containerWidth = container.width();

        const newLeftWidth = e.clientX - containerOffsetLeft;
        const newRightWidth = containerWidth - newLeftWidth;

        if (newLeftWidth > 0 && newRightWidth > 0) {
            left.css('width', `${newLeftWidth}px`);
            right.css('width', `${newRightWidth}px`);
        }

        e.preventDefault();
    });

    $(document).on('mouseup', function() {
        isResizing = false;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });
    });
});


// .nav-line {

//     width: 2px;
//     background-color: white;
//     cursor: ew-resize;
//     position: relative;
//     z-index: 1;

//     height: calc(100% - 100px);
//     right: 14px;
//     top: 68px;

//     transition: right 0.6s ease;

//     cursor: ew-resize;
//     -webkit-user-select: none;
//     -ms-user-select: none;
//     user-select: none;
// }

// .nav-line:active {
//     background-color: #0ef;
// }

// .nav-line.hidden {
//     right: -16px;
// }


$(document).ready(function () {
    // Initialize the sidebar to be open initially with 30% width
    const sidebarWidthPercentage = 30; // Sidebar width in percentage
    let viewportWidth = $(window).width();
    let initialSidebarWidth = (viewportWidth * sidebarWidthPercentage) / 100;
    const maxSidebarWidth = viewportWidth / 2;
    let currentSidebarWidth = initialSidebarWidth;

    $('.side-bar').addClass('active');
    $('.side-bar').css('width', `${initialSidebarWidth}px`);
    $('.menu-btn').css("visibility", "hidden");

    $('.menu-btn').click(function () {
        // Reset the sidebar width to the last known width
        $('.side-bar').css('width', `${currentSidebarWidth}px`);
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
        $('.side-bar').css('left', '0'); // Open sidebar
        

    });

    $('.close-btn').click(function () {
        const sidebarWidth = $('.side-bar').outerWidth();
        $('.side-bar').css('left', `-${sidebarWidth}px`); // Hide sidebar
        $('.side-bar').removeClass('active');
        $('.nav-line').classList.remove("hidden");
    });

    // Use transitionend event to handle when the transition finishes
    $('.side-bar').on('transitionend', function (event) {
        if (!$(this).hasClass('active')) {
            $('.menu-btn').css("visibility", "visible");
        }
    });

    const menuLinks = document.querySelectorAll('.menu a');
    const navLine = document.querySelector('.nav-line');
    const sideBar = document.querySelector('.side-bar');
    let isResizing = false;

    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            menuLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

});

$(function() {
    let isResizing = false;
    let lastDownX = 0;

    const container = $('.container');
    const left = $('.left');
    const right = $('.right');
    const navLine = $('.nav-line');

    navLine.on('mousedown', function(e) {
        isResizing = true;
        lastDownX = e.clientX;
        e.preventDefault();
    });

    $(document).on('mousemove', function(e) {
        if (!isResizing) return;

        const offsetRight = container.width() - (e.clientX - container.offset().left);

        left.css('width', e.clientX - container.offset().left);
        right.css('width', offsetRight);

        e.preventDefault();
    });

    $(document).on('mouseup', function() {
        isResizing = false;
    });
});


