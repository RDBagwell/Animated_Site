const fadeContent = document.querySelectorAll('.fade-content');
const fadeContentFromLeft = document.querySelectorAll('.fade-content-from-left');
const fadeContentFromRight = document.querySelectorAll('.fade-content-from-right');
const fadeContentFromTop = document.querySelectorAll('.fade-content-from-top');
const fadeContentFromBottom = document.querySelectorAll('.fade-content-from-bottom');
const flipContenY = document.querySelectorAll('.flip-y');
const flipContenX = document.querySelectorAll('.flip-x');

const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fadeIn');
    }
    else {
      entry.target.classList.remove('fadeIn');
    }
  });
});

function addDelay(element) {
  if(element.dataset.delay){
    element.style.transitionDelay = `${element.dataset.delay}s`
  }
}


function registerVideo(bound, video) {
	bound = document.querySelector(bound);
	video = document.querySelector(video);
	const scrollVideo = ()=>{
		if(video.duration) {
			const distanceFromTop = scrollY + bound.getBoundingClientRect().top;
			const rawPercentScrolled = (scrollY - distanceFromTop) / (bound.scrollHeight - innerHeight);
			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
			video.currentTime = video.duration * percentScrolled;
		}
		requestAnimationFrame(scrollVideo);
	}
	requestAnimationFrame(scrollVideo);
}

// Fade In And Out
fadeContent.forEach(element=>{
  addDelay(element);
  io.observe(element);
});

// Fade In From Left
fadeContentFromLeft.forEach(element=>{
  addDelay(element);
  io.observe(element)
});

// Fade In From Right
fadeContentFromRight.forEach(element=>{
  addDelay(element);
  io.observe(element);
});

// Fade In From element
fadeContentFromTop.forEach(element=>{
  addDelay(element);
  io.observe(element);
});

// Fade In From Bottom
fadeContentFromBottom.forEach(element=>{
  addDelay(element);
  io.observe(element);
});

// Flip Y
flipContenY.forEach(element=>{
  addDelay(element);
  io.observe(element);
});

// Flip X
flipContenX.forEach(element=>{
  addDelay(element);
  io.observe(element);
});

registerVideo("#bound", "#bound video");