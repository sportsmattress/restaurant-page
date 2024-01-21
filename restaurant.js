
const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');

    const image = document.createElement('img');
    image.src = './dist/img.png';
    image.height = '300px';
    image.width = '500px';
    image.classList.add('mainImage');
    pageContent.appendChild(image);

    const headline = document.createElement('h1');
    headline.textContent = 'The Great Restaurant';
    pageContent.appendChild(headline);

    const message = document.createElement('p');
    message.textContent = 'We serve any food you want!'
    pageContent.appendChild(message);

    content.appendChild(pageContent);

}

export default createRestaurantHomePage;