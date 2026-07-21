// =====================
// ANIMASI SCROLL
// =====================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach((card)=>{

    const animasi = card.dataset.aos;

    if(animasi==="fade-left"){
        card.classList.add("fade-left");
    }

    if(animasi==="fade-right"){
        card.classList.add("fade-right");
    }

    if(animasi==="zoom-in"){
        card.classList.add("zoom-in");
    }

    observer.observe(card);

});