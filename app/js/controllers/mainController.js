/**
 * Created by Yevhen on 01.07.2015.
 */
var mainController = function ($scope, EmailParser) {
    //$scope.to = 'ari@fullstack.io';
    //$scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    $scope.$watch('emailBody', function (body) {
        if (body) {
            $scope.previewText =
                EmailParser.parse(body, {to: $scope.to});
        }
    });

};

module.exports = mainController;