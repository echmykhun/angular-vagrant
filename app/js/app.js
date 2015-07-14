/**
 * Created by Yevhen on 28.06.2015.
 */
var angular = require('../../node_modules/angular/index');
var angularRoute = require('../../node_modules/angular-route/index');
var angularMessages = require('../../node_modules/angular-messages/index');

var mainController = require('./controllers/mainController');

var templates = angular.module('templates', []);
var app = angular.module('myApp', ['ngRoute', 'ngMessages', 'templates', 'emailParser']);


app.controller('mainController', ['$scope', 'EmailParser', mainController]);

//==============================================
angular.module('emailParser', [])
    .config(['$interpolateProvider',
        function ($interpolateProvider) {
            $interpolateProvider.startSymbol('__');
            $interpolateProvider.endSymbol('__');
        }])
    .factory('EmailParser', ['$interpolate',
        function ($interpolate) {
            // a service to handle parsing
            return {
                parse: function (text, context) {
                    var template = $interpolate(text);
                    return template(context);
                }
            }
        }]);
