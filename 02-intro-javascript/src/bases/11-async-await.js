const randomGifURL = 'http://api.giphy.com/v1/gifs/random';
const apiKey = 'Hcv9HM1H4XhSl3SDApBg4rhPHdkiBc7P';

const showRandomGif = async () => {
    const url = `${randomGifURL}?api_key=${apiKey}`;

    const resp = await fetch(url);
    const json = await resp.json();
    const { url: imgUrl } = json.data.images.original;

    const img = document.createElement('img');
    img.src = imgUrl;
    document.body.append(img);
    
};

showRandomGif();
