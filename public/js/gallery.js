// const destinations = require("../../seeds/destinations");

// // First, an example fetch() for inspiration. Lorem Picsum has a JSON API!
// fetch('https://picsum.photos/id/237/info')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
// });

// // But let's use our own JSON API:
// // Since the execution of this `app.js` script will be long finished by the time the following `fetch()` call returns data, we need to put our loop inside the second .then(). Check out this CSS Tricks article for the details about what's going on here.
// // https://css-tricks.com/using-fetch/
// fetch('http://localhost:3000/api/destinations')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(destinations) {

//     const imgList = destinations;

//     // Variable where we will store our img tags
//     let imgTemplate = '';

//     // Flex container for images
//     const gallery = document.querySelector('.gallery');

//     // Loop through items using forEach (available on every array)
//     imgList.forEach(function(item){
//       imgTemplate +=
//         `<figure>
//         <a href="${item.id}">
//           <img src="https://picsum.photos/id/${item.id}/350" alt="${item.title}">
//         </a>
//         <figcaption> ${item.title}!</figcaption>
//         </figure>`;
//     });

//     // Add HTML img string to gallery container
//     gallery.innerHTML = imgTemplate;
// });

// // More code

// // const gallery = document.querySelector('.gallery');

// // let imgTemplate = '';

// // console.log(gallery);

// // data.forEach((image) => {
// // 	console.log(image);
// // 	imgTemplate += `
// // 	<figure>
// // 		<img src="https://picsum.photos/id/${image.id}/250/250" alt="">
// // 			<figcaption> ${image.title}</figcaption>
// // 			<figcaption> Description: ${image.description} </figcaption>
// // 			<figcaption> Link: <a href=${image.attribution.url}>${image.attribution.url}</a></figcaption>
// // 	 </figure> `;
// // });

// //***responsive css statements toggle  */
// /* by clicking in burger menu*/

// const burger = document.querySelector('.burger');
// const navbar = document.querySelector('.navbar');
// const navList = document.querySelector('.nav-list');

// burger.addEventListener('click', function() {
// 	navList.classList.toggle('v-class-resp');
// 	navbar.classList.toggle('h-nav-resp');
// });
//-------------------------------------------new
fetch('https://aslam-cprg210-assignment.herokuapp.com/api/destinations')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		const imgList = data;

		console.log(imageList);

		// Variable where we will store our img tags
		let imgTemplate = '';

		// Flex container for images
		let image = document.querySelector('.gallery');

		// Loop through items using forEach (available on every array)
		imgList.forEach(function(item) {
			imgTemplate += `<figure>
        <a href="${item.id}">
          <img src="https://picsum.photos/id/${item.id}/250" alt="${item.title}">
        </a>
        <figcaption> ${item.title}!</figcaption>
        </figure>`;
		});

		// Add HTML img string to gallery container
		image.innerHTML = imgTemplate;
	});
