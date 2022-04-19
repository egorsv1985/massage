import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';



// init Swiper:
const swiper = new Swiper(".review__swiper", {
	pagination: {
		el: ".swiper-pagination",
		type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
				' из ' +
				'<span class="' + totalClass + '"></span>';
		},
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});