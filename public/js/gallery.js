fetch('https://aslam-cprg210-assignment.herokuapp.com/api/destinations')
	.then(function(response) {
		return response.json();
	})
	.then(function(data) {
		const imgList = data;

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
        <figcaption> ${item.title}</figcaption>
        </figure>`;
		});

		// Add HTML img string to gallery container
		image.innerHTML = imgTemplate;
	});
