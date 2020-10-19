const randomGifURL = 'http://api.giphy.com/v1/gifs/random';
const apiKey = 'Hcv9HM1H4XhSl3SDApBg4rhPHdkiBc7P';

const showRandomGif = () => {
    const url = `${randomGifURL}?api_key=${apiKey}`;

    fetch(url)
        .then(resp => resp.json())
        .then(({ data }) => {
            const { url: imgUrl } = data.images.original

            const img = document.createElement('img');
            img.src = imgUrl;
            document.body.append(img);
        })
        .catch(err => console.log(err));
};

showRandomGif();
