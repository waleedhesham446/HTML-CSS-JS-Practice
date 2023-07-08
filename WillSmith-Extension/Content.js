let willSmithImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg/800px-TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
    "https://www.lovethispic.com/uploaded_images/80903-Funny-Will-Smith.jpg",
    "https://media1.popsugar-assets.com/files/thumbor/BrT6JuS0boRe5dXrvkKQ4rzGNME/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/02/10/215/n/1922283/ad358e065c60f5ad56e7e8.61160339_/i/Funny-Tweets-About-Smith-Genie-Aladdin-Trailer.jpg",
    "https://www.cliccamaqua.com.br/images/noticias/img_57169_foto_1_a.jpg",
    "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/07/will-smith-foto.jpg"
];

const images = document.getElementsByTagName('img');

for(let i = 0; i < images.length; i++){
    const randomImage = Math.floor(Math.random() * willSmithImages.length);
    images[i].src = willSmithImages[randomImage];
}