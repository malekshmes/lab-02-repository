'use strict';
let allSlides = [];
function Slide(item) {
    this.image_url = item.image_url;
    this.title = item.title;
    this.description = item.description;
    this.keyword = item.keyword;
    this.horns = item.horns;
    allSlides.push(this);
}
Slide.prototype.render = function () {
    let template = $('.photo-template').clone();
    $('main').append(template);
    template.find('h2').text(this.title);
    template.find('img').attr('src', this.image_url);
    template.find('p').text(this.description);
    template.removeClass('.photo-template');
}

Slide.readJson = () => {
    const ajaxSettings = {
        method: 'get',
        dataType: 'json'
    };

    $.ajax('data/page-1.json', ajaxSettings).then((data) => {
        data.forEach((item) => {
            let slide1 = new Slide(item);
            slide1.render();
        });
    });
};

$(() => Slide.readJson());

function addKeyword (){
    let k = Slide.keyword;
    
    $('#select1').append(new Slide(k)); 
} 
addKeyword();
// for (let i = 0; i < allSlides.length; i++) {
//     let x = allSlides[i].keyword;
//     console.log(x);
// }
// function findKeyword(){
//     for (let i = 0; i < allSlides.length; i++) {
//         var x = allSlides[i].keyword;
//         console.log(x);
//         $('select').append('<option value="1">One</option>');
//         $('#select1').append(new Option(optionText, optionValue)); 
//         }
     
// }
// findKeyword();