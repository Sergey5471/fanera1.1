const swiperReviews = new Swiper(".reviews__slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		768: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},

	  },
  });

const swiperGallery = new Swiper(".gallery__slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		768: {
		  slidesPerView: 2,
		  spaceBetween: 30,
		},

	  },
});

const swiperObject = new Swiper(".object__slider", {
	slidesPerView: 1,
	loop: true,
	spaceBetween: 30,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		425: {
		  slidesPerView: 2,
		  spaceBetween: 20,
		},
		768: {
		  slidesPerView: 3,
		  spaceBetween: 30,
		},
		1200: {
		  slidesPerView: 4,
		  spaceBetween: 30,
		},
	  },
});

const swiperClients = new Swiper(".clients__slider", {
	slidesPerView: 2,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	breakpoints: {
		425: {
			slidesPerView: 2,
			spaceBetween: 20,
			loop: true,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 30,
			loop: true,
		},
		920: {
			slidesPerView: 4,
			spaceBetween: 30,
			loop: true,
		},
		1200: {
			slidesPerView: 6,
			grid: {
				rows: 2,
			},
			loop: false,
		},
	}
});


const formBtn = document.querySelector('.formbox__form__btn')
formBtn.addEventListener('click', function (event) {
	event.preventDefault()
	window.location.replace('./assets/app/message.html')
})