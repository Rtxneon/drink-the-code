window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});



function headinganimation() {
}
headinganimation()
gsap.from("#headers #h1", {
    y: 30,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h2", {
    y:  25,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h3", {
    y:  20,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h4", {
    y:  15,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h5", {
    y:  10,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h6", {
    y:  10,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h7", {
    y:  15,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h8", {
    y:  20,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h9", {
    y:  25,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h10", {
    y:  30,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h11", {
    y:  35,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})
gsap.from("#headers #h12", {
    y:  40,
    opacity:0,
    delay:0.2,
    duration:2.8,
    stagger:0.4
})

function drinkanimation() {
}
drinkanimation()
gsap.from("#drinkpng", {
    x: 500,
    duration:1.8,
    stagger:0.4
})

const text = document.querySelector(".dyn-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "build project";
    }, 0);
    setTimeout(() => {
        text.textContent = "paid yourself";
    }, 5000);
    setTimeout(() => {
        text.textContent = "grind code";
    }, 10000);
}
textLoad();
setInterval(textLoad, 14000);

let page2 = document.querySelectorAll('section');

window.onscroll = () => {
    page2.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    })
}

const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  scrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: "top 90%",
    end: "top 20%",
    markers: true
  })
})


const arrow0Element = document.querySelector('#page3 #arrow0');

const arrow0Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      arrow0Element.classList.add('animate-arrow0');
      arrow0Observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0 }); 

arrow0Observer.observe(arrow0Element);


const arrow1Element = document.querySelector('#page3 #arrow1');

const arrow1Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      arrow1Element.classList.add('animate-arrow1');
      arrow1Observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0 }); 

arrow1Observer.observe(arrow1Element);


const arrow2Element = document.querySelector('#page3 #arrow2');

const arrow2Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      arrow2Element.classList.add('animate-arrow2');
      arrow2Observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0 }); 

arrow2Observer.observe(arrow2Element);






const show2Element = document.querySelector('#page3 #header3 #show2');

const show2Observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      show2Element.classList.add('animate-show2');
      show2Observer.unobserve(entry.target); 
    }
  });
}, { threshold: 0 }); 

show2Observer.observe(show2Element);




const rocketElement = document.querySelector('#page4 #header4 #rocket');

const rocketObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      rocketElement.classList.add('animate-rocket');
      rocketObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0 }); 

rocketObserver.observe(rocketElement);




const carElement = document.querySelector('#page4 #header4 #car');

const carObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      carElement.classList.add('animate-car');
      carObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

carObserver.observe(carElement);

const taskElement = document.querySelector('#page4 #header4 #task');

const taskObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      taskElement.classList.add('animate-task');
      taskObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

taskObserver.observe(taskElement);



const drinkpngElement = document.querySelector('#page3 #header3 #drinkpng');

const drinkpngObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      drinkpngElement.classList.add('animate-drinkpng');
      drinkpngObserver.unobserve(entry.target); 
    }
  });
}, { threshold: 0.5 }); 

drinkpngObserver.observe(drinkpngElement);