var app = angular.module('sample', [
    'ngRoute',
    'sample.welcome',
    'sample.weddingGallery',
    'sample.casualGallery'
]);

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        redirectTo: '/welcome'
    }).otherwise({
        redirectTo: '/welcome'
    });

    $routeProvider.when('/welcome', {
        templateUrl: 'public/views/templates/welcome.tpl.html',
        controller: 'welcomeController'
    });

    $routeProvider.when('/about', {
        templateUrl: 'public/views/templates/about.tpl.html',
        controller: 'aboutController'
    });

    $routeProvider.when('/homes', {
        templateUrl: 'public/views/templates/homes.tpl.html',
        controller: 'homesController'
    });

    $routeProvider.when('/home', {
        templateUrl: 'public/views/templates/home.tpl.html',
        controller: 'homeController'
    });

    $routeProvider.when('/contact', {
        templateUrl: 'public/views/templates/contact.tpl.html',
        controller: 'contactController'
    });

    $routeProvider.when('/admin-login', {
        templateUrl: 'public/views/templates/admin-login.tpl.html',
        controller: 'adminLoginController'
    });

    $routeProvider.when('/wedding-gallery', {
        templateUrl: 'public/views/templates/weddings-gallery.tpl.html',
        controller: 'weddingGalleryController'
    });

    $routeProvider.when('/casual-gallery', {
        templateUrl: 'public/views/templates/casual-gallery.tpl.html',
        controller: 'casualGalleryController'
    })
});

app.controller('mainController', function($scope) {



});