var app = angular.module('sample.welcome', []);

app.controller('welcomeController', function($scope, $location) {

    $('.header').removeClass('navbar-fixed-top');


    $('#casual-wrapper').mouseover(function() {
        $('#casual-wrapper').css('width', '90%');
        $('#wedding-wrapper').css('width', '10%');

    });

    $('#wedding-wrapper').mouseover(function() {
        $('#casual-wrapper').css('width', '10%');
        $('#wedding-wrapper').css('width', '90%');

    });

    $('.header').mouseover(function() {
        $('#casual-wrapper').css('width', '49%');
        $('#wedding-wrapper').css('width', '49%');
    });

    $('.footer').mouseover(function() {
        $('#casual-wrapper').css('width', '49%');
        $('#wedding-wrapper').css('width', '49%');
    });

    $scope.goToCasual = function() {
        $location.path('/casual');
    };

    $scope.goToWeddings = function() {
        $location.path('/wedding-gallery')
    };

});