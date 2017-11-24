var app = angular.module('sample.weddingGallery', []);

app.controller('weddingGalleryController', function($scope) {
    var bgUrls = [
        'https://i.imgur.com/vy2cTmV.jpg',
        'https://i.imgur.com/QVgFjbY.jpg',
        'https://i.imgur.com/30nzNWb.jpg',
        'https://i.imgur.com/DIRAjD8.jpg',
        'https://i.imgur.com/A8QB99B.jpg',
        'https://i.imgur.com/uXbdJ4A.jpg',
        'https://i.imgur.com/O0oXYkS.jpg',
        'https://i.imgur.com/YvO6448.jpg',
        'https://i.imgur.com/U2kIHJw.jpg',
        'https://i.imgur.com/mzWcZLf.jpg',
        'https://i.imgur.com/c9TqTsR.jpg',
        'https://i.imgur.com/BLy05pP.jpg',
        'https://i.imgur.com/DIRAjD8.jpg'
    ];

    var counter = 0;
    var seconds = 0;
    var millis = 0;

    function returnIndice() {
        counter++;
        if(counter == bgUrls.length) {
            counter = 0;
        }
        return counter;
    }

    setInterval(function() {
        millis += 1000;
        if(millis == 10000) {
            millis = 0;
            document.getElementById('weddings-picture-wrapper').style.backgroundImage = 'url("' + bgUrls[returnIndice()] + '")'
        }
        document.getElementById('weddings-progress').value = millis/100;

    }, 1000);



    $scope.packages = [
        {
            name: 'package 1',
            description: 'description of package',
            basePrice: 1899.00
        },
        {
            name: 'package 1',
            description: 'description of package',
            basePrice: 1599.00
        },
        {
            name: 'package 1',
            description: 'description of package',
            basePrice: 1199.00
        }
    ];




});