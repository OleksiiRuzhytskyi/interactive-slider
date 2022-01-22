let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');
let slider = document.querySelector('.container__slider__line');
let allFruitPep = document.querySelectorAll('.peper-container-fruits');
let offsetLeft = 0
let coordX1
let coordY1

slider.addEventListener('touchstart', function(e) {
	let eTouches = e.touches[0]
	coordX1 = eTouches.clientX
	coordY1 = eTouches.clientY 
})

slider.addEventListener('touchmove', function (e) {
	if (!coordX1 || !coordY1) return
	let eTouches = e.touches[0]
	let coordX2 = eTouches.clientX
	let coordY2 = eTouches.clientY
	let diffX = coordX2 - coordX1
	let diffY = coordY2 - coordY1

	if (Math.abs(diffX) > Math.abs(diffY)) {
		if(diffX > 0) {
			console.log('right');
			offsetLeft -= 200
			if (offsetLeft < 0) {
				offsetLeft = 400
			}
			slider.style.right = offsetLeft + 'px'
			changeElement()		
		} else {
			console.log('left');
			offsetLeft += 200
			if (offsetLeft > 400) {
				offsetLeft = 0
			}
			slider.style.right = offsetLeft + 'px'
			changeElement()
			console.log('offset: ', offsetLeft);
		}
	}
		coordX1 = null
		coordX2 = null
})

arrowRight.addEventListener('click', function() {
	offsetLeft += 200        
	if (offsetLeft > 400) {
		offsetLeft = 0
	}
	slider.style.right = offsetLeft + 'px'
	changeElement()
	console.log('offset: ', offsetLeft);
})

arrowLeft.addEventListener('click', function () {
	offsetLeft -= 200
	if (offsetLeft < 0) {
		offsetLeft = 400
	}
	slider.style.right = offsetLeft + 'px'
	changeElement()
	console.log('left');
})


function changeElement() {
	if (offsetLeft === 0){
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.remove('opacity-0')
			console.log('t: ', i);
		}
		// document.querySelector('.container').classList.add('bg-peppermint')
		document.querySelector('.pep-container').classList.remove('opacity-0')
		document.querySelector('.raspberry-container').classList.remove('opacity-1')
		document.querySelector('.peach-container').classList.add('opacity-0')
	} else if (offsetLeft === 200) {
		document.querySelector('.pep-container').style.transition = 'all 1s';
		document.querySelector('.pep-container').classList.add('opacity-0')
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.add('opacity-0')
			console.log('t: ', i);
		}
		document.querySelector('.raspberry-container, .raspberry-1 ').classList.add('opacity-1')
		document.querySelector('.raspberry-container').style.transition = 'all 1s';
		document.querySelector('.peach-container').classList.add('opacity-0')
		console.log('test; ', document.querySelector('.raspberry-container'));

	} else if (offsetLeft === 400) {
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.add('opacity-0')
			console.log('t: ', i);
		}
		document.querySelector('.raspberry-container').classList.add('opacity-1')
		document.querySelector('.peach-container').classList.remove('opacity-0')
		document.querySelector('.pep-container').classList.add('opacity-0')
		document.querySelector('.raspberry-container').classList.remove('opacity-1')
		document.querySelector('.peach-container').style.transition = 'all 1s';

		console.log('400: ', document.querySelector('.peach-container'));
	}
}

