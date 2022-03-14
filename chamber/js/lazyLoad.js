const images = document.querySelectorAll("[data-src]");




const imgOptions = {};

const imgObserver = new IntersectionObserver((entries,
     imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersection) {
                return;
            } else {
                preLoadImage(enry.target);
                imgObserver.unobserve(entry.target);
            }
        })

}, imgOptions)
