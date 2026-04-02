// -----------------------------------------------------------------------------
// This file includes deliberate formatting errors in order for you to verify
// that ESLint and EditorConfig are working properly. If both tools are, indeed,
// working correctly, then you’d see errors in your editor about indentation and
// improper use of footmarks instead of back ticks. When you save this file,
// your editor should strip all excess newlines and whitespace characters from
// the file. If both of these events occur, then ESLint and EditorConfig are
// working correctly.
//
// DON’T PROCEED UNTIL YOU’RE SURE ESLINT AND EDITORCONFIG ARE WORKING CORRECTLY
// -----------------------------------------------------------------------------
const body = document.querySelector(`body`);
const carousel_slides = document.querySelector(`.carousel-slides`);
let carousel_left_arrow = document.getElementsByClassName(`carousel-navigation`)[0].children[0];
let carousel_right_arrow = document.getElementsByClassName(`carousel-navigation`)[0].children[1];
carousel_right_arrow.style.visibility = `hidden`;

//Key press fucntions
document.addEventListener('keydown', function(event) {
    switch(event.key) {
        case 'ArrowLeft':
            carousel_right_arrow.style.visibility = `visible`;
            console.log(count);
            if (count === 2){
                carousel_left_arrow.style.visibility = `hidden`;
                carousel_right_arrow.style.visibility = `visible`;
            }
        else{
         carousel_left_arrow.style.visibility = `visible`;
            count = count + 1;
         }
        break;
        case 'ArrowRight':
            carousel_left_arrow.style.visibility = `visible`;
            console.log(count);
            if (count === 0){
                carousel_right_arrow.style.visibility = `hidden`;
                carousel_left_arrow.style.visibility = `visible`;
            }
        else{
            carousel_right_arrow.style.visibility = `visible`;
            count = count - 1;
        }
        break;
    }
});
//Mouse click functions
let count = 0;
carousel_left_arrow.addEventListener(`click`, () => {
    carousel_right_arrow.style.visibility = `visible`;
    console.log(count);
    if (count === 2){
        carousel_left_arrow.style.visibility = `hidden`;
        carousel_right_arrow.style.visibility = `visible`;
    }
    else{
        carousel_left_arrow.style.visibility = `visible`;
        count = count + 1;
    }

});
carousel_right_arrow.addEventListener(`click`, () => {
    carousel_left_arrow.style.visibility = `visible`;
    console.log(count);
    if (count === 0){
        carousel_right_arrow.style.visibility = `hidden`;
        carousel_left_arrow.style.visibility = `visible`;
    }
    else{
        carousel_right_arrow.style.visibility = `visible`;
        count = count - 1;
    }
});

//Display information for each card within data
function cards(data) {
    let album_name = document.createElement(`h2`);
    album_name.textContent = data.card[0].album;

    let artist_name = document.createElement(`h3`);
    artist_name.innerHTML = `<a href =
        ${data.card[0].url}> ${data.card[0].artist}</a>`;

    let image = document.createElement(`img`);
    image.setAttribute(`src`, data.card[0].cover_image.path);
    image.setAttribute(`width`, data.card[0].cover_image.width);
    image.setAttribute(`height`, data.card[0].cover_image.height);
    image.setAttribute(`alt`, data.card[0].cover_image.alt_content);

    let credit_name = document.createElement(`h4`);
    credit_name.innerHTML = `Credit: <a href =
        ${data.card[0].cover_image.url}> ${data.card[0].cover_image.credit}</a>`;
    credit_name.style.textAlign = `center`;

    let review = document.createElement(`p`);
    review.innerText = data.card[0].review.content;

    let source = document.createElement(`p`);
    source.innerHTML = `— <a href =
        ${data.card[0].review.url}> ${data.card[0].review.source}</a>`;

    carousel_slides.appendChild(album_name);
    carousel_slides.appendChild(artist_name);
    carousel_slides.appendChild(image);
    carousel_slides.appendChild(credit_name);
    carousel_slides.appendChild(review);
    carousel_slides.appendChild(source);
}

let script = document.createElement(`script`);
script.setAttribute(`src`, `json/data.json`);
body.appendChild(script);
