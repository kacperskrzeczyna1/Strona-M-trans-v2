document.addEventListener("DOMContentLoaded", function () {

    const counters = document.querySelectorAll('.counter');

    // Funkcja animująca licznik
    const animateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
        const speed = 80;

        const updateCount = () => {
            const count = +counter.innerText.replace(/\s/g, "");
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment).toLocaleString('pl-PL');
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target.toLocaleString('pl-PL');
            }
        };

        updateCount();
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // tylko raz
            }
        });
    }, {
        threshold: 0.5 // licznik zacznie liczyć, gdy 50% widoczny
    });

    counters.forEach(counter => {
        counter.innerText = '0'; // start od zera
        observer.observe(counter);
    });

});
