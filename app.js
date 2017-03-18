var app = angular.module('myApp', ['ngTable','ui.select']);
app.controller('myController', function ($scope, NgTableParams, $filter) {
    $scope.itemList={};
    $scope.selectCount='All';
    $scope.countData = [
        {
            "id": 1,
            "first_name": "Philip",
            "last_name": "Kim",
            "email": "pkim0@mediafire.com",
            "country": "Indonesia",
            "ip_address": "29.107.35.8"
        },
        {
            "id": 2,
            "first_name": "Judith",
            "last_name": "Austin",
            "email": "jaustin1@mapquest.com",
            "country": "China",
            "ip_address": "173.65.94.30"
        },
        {
            "id": 3,
            "first_name": "Julie",
            "last_name": "Wells",
            "email": "jwells2@illinois.edu",
            "country": "Finland",
            "ip_address": "9.100.80.145"
        },
        {
            "id": 4,
            "first_name": "Gloria",
            "last_name": "Greene",
            "email": "ggreene3@blogs.com",
            "country": "Indonesia",
            "ip_address": "69.115.85.157"
        },
        {
            "id": 5,
            "first_name": "Andrea",
            "last_name": "Greene",
            "email": "agreene4@fda.gov",
            "country": "Russia",
            "ip_address": "128.72.13.52"
        },
        {
            "id": 6,
            "first_name": "Philip",
            "last_name": "Kim",
            "email": "pkim0@mediafire.com",
            "country": "Indonesia",
            "ip_address": "29.107.35.8"
        },
        {
            "id": 7,
            "first_name": "Judith",
            "last_name": "Austin",
            "email": "jaustin1@mapquest.com",
            "country": "China",
            "ip_address": "173.65.94.30"
        },
        {
            "id": 8,
            "first_name": "Julie",
            "last_name": "Wells",
            "email": "jwells2@illinois.edu",
            "country": "Finland",
            "ip_address": "9.100.80.145"
        },
        {
            "id": 9,
            "first_name": "Gloria",
            "last_name": "Greene",
            "email": "ggreene3@blogs.com",
            "country": "Indonesia",
            "ip_address": "69.115.85.157"
        },
        {
            "id": 10,
            "first_name": "Andrea",
            "last_name": "Greene",
            "email": "agreene4@fda.gov",
            "country": "Russia",
            "ip_address": "128.72.13.52"
        },
        {
            "id": 11,
            "first_name": "Philip",
            "last_name": "Kim",
            "email": "pkim0@mediafire.com",
            "country": "Indonesia",
            "ip_address": "29.107.35.8"
        },
        {
            "id": 12,
            "first_name": "Judith",
            "last_name": "Austin",
            "email": "jaustin1@mapquest.com",
            "country": "China",
            "ip_address": "173.65.94.30"
        },
        {
            "id": 13,
            "first_name": "Julie",
            "last_name": "Wells",
            "email": "jwells2@illinois.edu",
            "country": "Finland",
            "ip_address": "9.100.80.145"
        },
        {
            "id": 14,
            "first_name": "Gloria",
            "last_name": "Greene",
            "email": "ggreene3@blogs.com",
            "country": "Indonesia",
            "ip_address": "69.115.85.157"
        },
        {
            "id": 15,
            "first_name": "Andrea",
            "last_name": "Greene",
            "email": "agreene4@fda.gov",
            "country": "Russia",
            "ip_address": "128.72.13.52"
        }
    ];
    $scope.countChange = function (item) {
        $scope.itemList.first_name=item;
    };
    $scope.users = [
        {
            "id": 1,
            "first_name": "Philip",
            "last_name": "Kim",
            "email": "pkim0@mediafire.com",
            "country": "Indonesia",
            "ip_address": "29.107.35.8"
        },
        {
            "id": 2,
            "first_name": "Judith",
            "last_name": "Austin",
            "email": "jaustin1@mapquest.com",
            "country": "China",
            "ip_address": "173.65.94.30"
        },
        {
            "id": 3,
            "first_name": "Julie",
            "last_name": "Wells",
            "email": "jwells2@illinois.edu",
            "country": "Finland",
            "ip_address": "9.100.80.145"
        },
        {
            "id": 4,
            "first_name": "Gloria",
            "last_name": "Greene",
            "email": "ggreene3@blogs.com",
            "country": "Indonesia",
            "ip_address": "69.115.85.157"
        },
        {
            "id": 5,
            "first_name": "Andrea",
            "last_name": "Greene",
            "email": "agreene4@fda.gov",
            "country": "Russia",
            "ip_address": "128.72.13.52"
        },
        {
            "id": 6,
            "first_name": "Philip",
            "last_name": "Kim",
            "email": "pkim0@mediafire.com",
            "country": "Indonesia",
            "ip_address": "29.107.35.8"
        },
        {
            "id": 7,
            "first_name": "Judith",
            "last_name": "Austin",
            "email": "jaustin1@mapquest.com",
            "country": "China",
            "ip_address": "173.65.94.30"
        },
        {
            "id": 8,
            "first_name": "Julie",
            "last_name": "Wells",
            "email": "jwells2@illinois.edu",
            "country": "Finland",
            "ip_address": "9.100.80.145"
        },
        {
            "id": 9,
            "first_name": "Gloria",
            "last_name": "Greene",
            "email": "ggreene3@blogs.com",
            "country": "Indonesia",
            "ip_address": "69.115.85.157"
        },
        {
            "id": 10,
            "first_name": "Andrea",
            "last_name": "Greene",
            "email": "agreene4@fda.gov",
            "country": "Russia",
            "ip_address": "128.72.13.52"
        },
        {
            "id": 11,
            "first_name": "Philip",
            "last_name": "Kim",
            "email": "pkim0@mediafire.com",
            "country": "Indonesia",
            "ip_address": "29.107.35.8"
        },
        {
            "id": 12,
            "first_name": "Judith",
            "last_name": "Austin",
            "email": "jaustin1@mapquest.com",
            "country": "China",
            "ip_address": "173.65.94.30"
        },
        {
            "id": 13,
            "first_name": "Julie",
            "last_name": "Wells",
            "email": "jwells2@illinois.edu",
            "country": "Finland",
            "ip_address": "9.100.80.145"
        },
        {
            "id": 14,
            "first_name": "Gloria",
            "last_name": "Greene",
            "email": "ggreene3@blogs.com",
            "country": "Indonesia",
            "ip_address": "69.115.85.157"
        },
        {
            "id": 15,
            "first_name": "Andrea",
            "last_name": "Greene",
            "email": "agreene4@fda.gov",
            "country": "Russia",
            "ip_address": "128.72.13.52"
        }];
    $scope.usersTable = new NgTableParams({
        page: 1,
        count: 10,
        filter: $scope.itemList
    }, {

        total: $scope.users.length,
        getData: function (params) {
            $scope.data = params.sorting() ? $filter('orderBy')($scope.users, params.orderBy()) : $scope.users;
            $scope.data = params.filter() ? $filter('filter')($scope.data, params.filter()) : $scope.data;
            $scope.data = $scope.data.slice((params.page() - 1) * params.count(), params.page() * params.count());
            $scope.data	= $filter('filter')($scope.data, params.filter());
            return $scope.data;
        }

    });
});