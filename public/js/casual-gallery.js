var app = angular.module('sample.casualGallery', []);


app.controller('casualGalleryController', function() {

    $('.header').addClass('navbar-fixed-top');


    var casualPics = [
        'https://i.imgur.com/acBhxRY.jpg',
        'https://i.imgur.com/Nuz5rUY.jpg',
        'https://i.imgur.com/FI9KYDh.jpg',
        'https://i.imgur.com/K4YpGRh.jpg',
        'https://i.imgur.com/Kk4w6dw.jpg'
    ];


    var count = 0;
    var second = 0;
    var mills = 0;

    function returnIdx() {
        count++;
        if(count == casualPics.length) {
            count = 0;
        }
        return count;
    }

    setInterval(function() {
        mills += 1000;
        if(mills == 10000) {
            mills = 0;
            document.getElementById('casual-picture-wrapper').style.backgroundImage = 'url("' + casualPics[returnIdx()] + '")'
        }
        document.getElementById('casual-progress').value = mills/100;

    }, 1000);
    

});