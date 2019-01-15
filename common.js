var myImage = document.getElementById("mainImage"),
	imageIndex = 0,
	imageArray = ["./img/overlook.jpg", "./img/winery_sign.jpg", "./img/lunch.jpg",
		"./img/bigSur.jpg", "./img/flag_photo.jpg", "./img/mission_look.jpg"
	];

function changeImage() {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
}

// setInterval 5000 milliseconds
setInterval(changeImage, 5000);
