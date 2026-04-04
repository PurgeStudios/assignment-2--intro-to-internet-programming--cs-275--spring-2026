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

//Display information for each card within data
function cards(data) {
    let album_name = document.createElement(`h2`);
    let artist_name = document.createElement(`h3`);
    let image = document.createElement(`img`);
    let credit_name = document.createElement(`h4`);
    let review = document.createElement(`p`);
    let source = document.createElement(`p`);

    //Display First Slide by default
    let slide = 0;
    album_name.textContent = data.card[slide].album;
    artist_name.innerHTML = `<a href =
        ${data.card[slide].url}> ${data.card[slide].artist}</a>`;

    image.setAttribute(`src`, data.card[slide].cover_image.path);
    image.setAttribute(`width`, data.card[slide].cover_image.width);
    image.setAttribute(`height`, data.card[slide].cover_image.height);
    image.setAttribute(`alt`, data.card[slide].cover_image.alt_content);

    credit_name.innerHTML = `Credit: <a href =
        ${data.card[slide].cover_image.url}> ${data.card[slide].cover_image.credit}</a>`;
    review.innerText = data.card[slide].review.content;
    source.innerHTML = `— <a href =
        ${data.card[slide].review.url}> ${data.card[slide].review.source}</a>`;

    //Key press fucntions for carousel slides
    carousel_right_arrow.style.visibility = `hidden`; //hide right arrow by default
    document.addEventListener(`keydown`, function(event) {
        switch(event.key) {
            case `ArrowLeft`:
                slide = slide + 1;
                if(slide <= 0){
                    carousel_right_arrow.style.visibility = `hidden`;
                }
                else{
                    carousel_right_arrow.style.visibility = `visible`;
                }
                if(slide >= 3){
                    carousel_left_arrow.style.visibility = `hidden`;
                }
                else{
                    carousel_left_arrow.style.visibility = `visible`;
                }
                if (slide >= 0 && slide <= 3) {
                    console.log(slide);
                    album_name.textContent = data.card[slide].album;
                    artist_name.innerHTML = `<a href =
                        ${data.card[slide].url}> ${data.card[slide].artist}</a>`;

                    image.setAttribute(`src`, data.card[slide].cover_image.path);
                    image.setAttribute(`width`, data.card[slide].cover_image.width);
                    image.setAttribute(`height`, data.card[slide].cover_image.height);
                    image.setAttribute(`alt`, data.card[slide].cover_image.alt_content);

                    credit_name.innerHTML = `Credit: <a href =
                        ${data.card[slide].cover_image.url}> ${data.card[slide].cover_image.credit}</a>`;
                    review.innerText = data.card[slide].review.content;
                    source.innerHTML = `— <a href =
                    ${data.card[slide].review.url}> ${data.card[slide].review.source}</a>`;
                }
                else{
                    slide = slide - 1;
                    console.error(`You are at the end of the carousel!`);
                }
                break;
            case `ArrowRight`:
                slide = slide - 1;
                if(slide <= 0){
                    carousel_right_arrow.style.visibility = `hidden`;
                }
                else{
                    carousel_right_arrow.style.visibility = `visible`;
                }
                if(slide >= 3){
                    carousel_left_arrow.style.visibility = `hidden`;
                }
                else{
                    carousel_left_arrow.style.visibility = `visible`;
                }
                if (slide >= 0 && slide <= 3) {
                    console.log(slide);
                    album_name.textContent = data.card[slide].album;
                    artist_name.innerHTML = `<a href =
                        ${data.card[slide].url}> ${data.card[slide].artist}</a>`;

                    image.setAttribute(`src`, data.card[slide].cover_image.path);
                    image.setAttribute(`width`, data.card[slide].cover_image.width);
                    image.setAttribute(`height`, data.card[slide].cover_image.height);
                    image.setAttribute(`alt`, data.card[slide].cover_image.alt_content);

                    credit_name.innerHTML = `Credit: <a href =
                        ${data.card[slide].cover_image.url}> ${data.card[slide].cover_image.credit}</a>`;
                    review.innerText = data.card[slide].review.content;
                    source.innerHTML = `— <a href =
                        ${data.card[slide].review.url}> ${data.card[slide].review.source}</a>`;
                }
                else {
                    slide = slide +1;
                    console.error(`You are at the end of the carousel!`);
                }
                break;
        }
    });

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
