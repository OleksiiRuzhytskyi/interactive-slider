let arrowLeft = document.querySelector('.arrow-left');
let arrowRight = document.querySelector('.arrow-right');

let slider = document.querySelector('.container__slider__line');

let allFruitPep = document.querySelectorAll('.fruitDel')

let offsetLeft = 0

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
	// changeElement()
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
		document.querySelector('.pepper-container').classList.add('bg-peppermint')
		document.querySelector('.pepper-container').classList.remove('bg-raspberry')
		document.querySelector('.pep-container').classList.remove('opacity-0')
		document.querySelector('.raspberry-container').classList.remove('opacity-1')
		document.querySelector('.peach-container').classList.add('opacity-0')
	} else if (offsetLeft === 200) {
		document.querySelector('.peach-container').classList.add('opacity-1')
		document.querySelector('.pep-container').style.transition = 'all 1s';
		document.querySelector('.pep-container').classList.add('opacity-0')
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.add('opacity-0')
			console.log('t: ', i);
		}
		document.querySelector('.raspberry-container, .raspberry-1 ').classList.add('opacity-1')
		document.querySelector('.raspberry-container').style.transition = 'all 1s';
		document.querySelector('.pepper-container').classList.add('bg-raspberry')
		document.querySelector('.peach-container').classList.add('opacity-0')
		console.log('test; ', document.querySelector('.raspberry-container'));

	} else if (offsetLeft === 400) {
		for (let i = 0; i < allFruitPep.length; i++) {
			allFruitPep[i].style.transition = 'all 1s';
			allFruitPep[i].classList.add('opacity-0')
			console.log('t: ', i);
		}
		document.querySelector('.raspberry-container').classList.add('opacity-1')
		document.querySelector('.pepper-container').classList.add('bg-peach')
		document.querySelector('.peach-container').classList.remove('opacity-0')
		document.querySelector('.peach-container').classList.add('opacity-1')
		document.querySelector('.raspberry-container').classList.remove('opacity-1')
		document.querySelector('.peach-container').style.transition = 'all 1s';

		console.log('400: ', document.querySelector('.peach-container'));
	}
}

