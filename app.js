// Go to the previous image or to the next image
function changeSlide(){
    const images = document.querySelectorAll('.slider img');
    const length = images.length;
    const prev = document.querySelector('.left');
    const next = document.querySelector('.right');
    let current = 0;
	showCount(current, length);
	prev.addEventListener('click', () =>{
        images[current].classList.remove('image-active');
        current === 0 ? current = length - 1 : current--;
        images[current].classList.add('image-active');
		showCount(current, length);
    });
    next.addEventListener('click', () =>{
        images[current].classList.remove('image-active');
        current === length - 1 ? current = 0 : current++;
        images[current].classList.add('image-active');
		showCount(current, length);
    });
}

/**
 * Show the number of the image on the total number of images
 * @param { Integer }current
 * @param { HTMLElement }length
 */
function showCount(current, length){
	const count = document.querySelector('.counter');
	count.innerText = `${current + 1} / ${length}`
}

changeSlide();