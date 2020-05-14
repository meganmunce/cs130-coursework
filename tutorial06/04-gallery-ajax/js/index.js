const photosURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/flowers.json';
const bikesURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/bikes.json';
const carsURL = 'https://raw.githubusercontent.com/eecs130/spring2020/master/course-files/tutorials/tutorial06/04-gallery-ajax/data/cars.json';

// define the function loadCards and pass in the list of phtoos
const loadCards = (photos) => {
  // reset the inner HTML of .cards
    document.querySelector('.cards').innerHTML = '';
    for (photo of photos) {
      // loop through every photo in the list
        const template = `
            <div class="card" style="background-image:url('${photo}')"></div>`;
            // add new template literal to .cards inner HTML
        document.querySelector('.cards').innerHTML += template;
    }
    //initialize carousel
    initCarousel();
};

// query the data from the server:
fetch(bikesURL)
  // convert the data to json
    .then((response) => {
        return response.json();
    })
    .then(loadCards); // invokes a function to process the data
