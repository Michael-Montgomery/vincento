var app = angular.module('sample.welcome', []);

app.controller('welcomeController', function($scope, $location) {


    $('#casual-wrapper').mouseover(function() {
        $('#casual-wrapper').css('width', '90%');
        $('#wedding-wrapper').css('width', '10%');

    });

    $('#wedding-wrapper').mouseover(function() {
        $('#casual-wrapper').css('width', '10%');
        $('#wedding-wrapper').css('width', '90%');

    });

    $('.header').mouseover(function() {
        $('#casual-wrapper').css('width', '50%');
        $('#wedding-wrapper').css('width', '50%');
    });

    $('.footer').mouseover(function() {
        $('#casual-wrapper').css('width', '50%');
        $('#wedding-wrapper').css('width', '50%');
    });

    $scope.goToCasual = function() {
        $location.path('/casual');
    };

    $scope.goToWeddings = function() {
        $location.path('/wedding-gallery')
    };

});