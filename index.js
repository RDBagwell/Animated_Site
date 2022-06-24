const fadeContent = document.querySelectorAll('.fade-content');
const fadeContentFromLeft = document.querySelectorAll('.fade-content-from-left');
const fadeContentFromRight = document.querySelectorAll('.fade-content-from-right');
const fadeContentFromTop = document.querySelectorAll('.fade-content-from-top');
const fadeContentFromBottom = document.querySelectorAll('.fade-content-from-bottom');
const flipContenY = document.querySelectorAll('.flip-y');
const flipContenX = document.querySelectorAll('.flip-x');


// Fade In And Out
const fade = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
});
fadeContent.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    fade.observe(content)
});

// Fade In From Left
const fadeFromLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
});
fadeContentFromLeft.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    fadeFromLeft.observe(content)
});

// Fade In From Right
const fadeFromRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
});
fadeContentFromRight.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    fadeFromRight.observe(content)
});

// Fade In From Top
const fadeFromTop = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
})
fadeContentFromTop.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    fadeFromTop.observe(content)
});

// Fade In From Bottom
const fadeFromBottom = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
})
fadeContentFromBottom.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    fadeFromBottom.observe(content)
});

// Flip Y
const flipY = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
})
flipContenY.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    flipY.observe(content)
});

// Flip X
const flipX = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add('fadeIn');
      }
      else {
        entry.target.classList.remove('fadeIn');
      }
    });
})
flipContenX.forEach(content=>{
    if(content.dataset.delay){
        content.style.transitionDelay = `${content.dataset.delay}s`
    }
    flipX.observe(content)
});