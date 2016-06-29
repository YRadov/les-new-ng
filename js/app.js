var app = angular.module("lesModule", []);
//*****************************************************************
app.controller("LesCtrl", function ($scope) {
    // диаметр бревна
    $scope.diam = '';


    //ВВОД С ВИРТУАЛЬНОЙ КЛАВИАТУРЫ
    $scope.addDiam = function (num){
        $scope.diam += num;
    };


    //УДАЛЕНИЕ В ПОЛЕ ДИАМЕТРА
    $scope.removeDiam = function (){
        $scope.diam = $scope.diam.substring(0, $scope.diam.length - 1);
    };


});//LesCtrl

//********************************************************************
/**
 *  - ВВОД КОЛИЧЕСТВА ЗАВЕЗЕННЫХ БРЕВЕН
 *  - ОТОБРАЖЕНИЕ ДАТЧИКОВ
 */
app.controller("EnterCtrl", function ($scope) {

});//EnterCtrl

// ********************************************************************
/**
 *  - ВВОД КОЛИЧЕСТВА ЗАВЕЗЕННЫХ БРЕВЕН
 *  - ОТОБРАЖЕНИЕ ДАТЧИКОВ
 */

app.controller("LogsCtrl", function ($scope) {

});//LogsCtrl