// =========================
// HARIOM GROUP V2 PREMIUM
// =========================

// Navbar Shadow on Scroll

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(10,10,10,.85)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 40px rgba(255,140,0,.18)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";
        navbar.style.boxShadow = "none";

    }

});


// =========================
// Hero Image Mouse Effect
// =========================

const heroImage = document.querySelector(".heroRight img");

document.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;

    heroImage.style.transform =
        `translate(${x}px, ${y}px) scale(1.08)`;

});


// =========================
// Button Ripple
// =========================

document.querySelectorAll(".btnOrange,.btnGlass").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0)";

    });

});


// =========================
// Fade Animation
// =========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:.2});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});
//=====================================
// SCROLL PROGRESS BAR
//=====================================

const progress = document.createElement("div");

progress.className = "progressBar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const scrollTop = window.scrollY;

const docHeight =
document.documentElement.scrollHeight-window.innerHeight;

const percent=(scrollTop/docHeight)*100;

progress.style.width=percent+"%";

});


//=====================================
// HERO FLOATING ANIMATION
//=====================================

let angle=0;

function floatingHero(){

angle+=0.02;

if(heroImage){

heroImage.style.transform=

`translateY(${Math.sin(angle)*10}px)
rotate(${Math.sin(angle)*1.5}deg)
scale(1.08)`;

}

requestAnimationFrame(floatingHero);

}

floatingHero();


//=====================================
// BUTTON CLICK EFFECT
//=====================================

document.querySelectorAll(".btnOrange,.btnGlass,.viewBtn").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const ripple=document.createElement("span");

ripple.className="ripple";

btn.appendChild(ripple);

const x=e.offsetX;

const y=e.offsetY;

ripple.style.left=x+"px";

ripple.style.top=y+"px";

setTimeout(()=>{

ripple.remove();

},700);

});

});


//=====================================
// GALLERY HOVER
//=====================================

document.querySelectorAll(".galleryItem").forEach(item=>{

item.addEventListener("mousemove",(e)=>{

const rect=item.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

item.style.transform=

`rotateY(${(x-150)/18}deg)
rotateX(${-(y-150)/18}deg)
scale(1.04)`;

});

item.addEventListener("mouseleave",()=>{

item.style.transform=

"rotateX(0deg) rotateY(0deg) scale(1)";

});

});
//=====================================
// CUSTOM CURSOR GLOW
//=====================================

const cursor = document.createElement("div");

cursor.className = "cursorGlow";

document.body.appendChild(cursor);

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";

cursor.style.top=e.clientY+"px";

});


//=====================================
// HERO IMAGE TILT
//=====================================

const hero = document.querySelector(".heroRight");

hero.addEventListener("mousemove",(e)=>{

const rect=hero.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=(x-rect.width/2)/28;

const rotateX=-(y-rect.height/2)/28;

heroImage.style.transform=

`perspective(1200px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.08)`;

});

hero.addEventListener("mouseleave",()=>{

heroImage.style.transform=

"perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1.08)";

});


//=====================================
// NUMBER COUNTER
//=====================================

const stats=document.querySelectorAll(".stat h2");

const observerCounter=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const el=entry.target;

const text=el.innerText;

const number=parseInt(text);

if(!isNaN(number)){

let count=0;

const timer=setInterval(()=>{

count++;

el.innerText=count+"+";

if(count>=number){

clearInterval(timer);

}

},15);

}

observerCounter.unobserve(el);

}

});

});

stats.forEach(stat=>{

observerCounter.observe(stat);

});
cursor.style.transform =
`translate3d(${mouseX-90}px,${mouseY-90}px,0)`;
//========================
// GALLERY CLICK EFFECT
//========================

document.querySelectorAll(".galleryItem").forEach(item=>{

item.addEventListener("click",()=>{

item.classList.toggle("active");

});

});
//==========================
// GALLERY LIGHTBOX
//==========================

const lightbox=document.querySelector(".lightbox");
const lightboxImg=document.getElementById("lightboxImage");

const galleryImages=document.querySelectorAll(".galleryItem img");

const closeBtn=document.querySelector(".closeLightbox");

const prevBtn=document.querySelector(".prevBtn");
const nextBtn=document.querySelector(".nextBtn");

let currentIndex=0;

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

currentIndex=index;

lightbox.classList.add("active");

lightboxImg.src=img.src;

});

});

closeBtn.onclick=()=>{

lightbox.classList.remove("active");

};

nextBtn.onclick=()=>{

currentIndex=(currentIndex+1)%galleryImages.length;

lightboxImg.src=galleryImages[currentIndex].src;

};

prevBtn.onclick=()=>{

currentIndex=(currentIndex-1+galleryImages.length)%galleryImages.length;

lightboxImg.src=galleryImages[currentIndex].src;

};

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

};
//========================
// MOBILE MENU
//========================

const menuBtn = document.querySelector(".menuBtn");
const navMenu = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

document.querySelectorAll(".navbar ul a").forEach(link=>{

link.addEventListener("click",()=>{

navMenu.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});
//========================
// ACTIVE NAV LINK
//========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});