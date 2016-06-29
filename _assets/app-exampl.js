var app = angular.module("LesModule", []);
app.controller("LesCtrl", function ($scope) {
    // вводимый диаметр(модель)
    $scope.diam = '';
    // длина бревна(модель)
    $scope.len = '';
    // текущая длина
    $scope.current_len = '';
    // текущий объем
    $scope.current_vol = '';
    // мах объем загрузки
    $scope.max_vol = 0;
    // общий объем
    $scope.total_vol = 0;
    //сумма всех диаметров
    var summ_all_diam = 0;
    // средний диаметр
    $scope.aver_diam = 0;
    // номер бревна по порядку
    $scope.log_number = 1;
    //текст на кнопке показа всей загрузки
    $scope.button_text = 'Показать всю загрузку';

    //-------------------------
    // таблицы диаметр - объем
    $scope.L_3_8 = {
        "14": 68,
        "16": 90,
        "18": 113,
        "20": 139,
        "22": 170,
        "24": 200,
        "26": 240,
        "28": 270,
        "30": 310,
        "32": 360,
        "34": 410,
        "36": 460,
        "38": 510,
        "40": 550,
        "42": 610,
        "44": 670,
        "46": 730,
        "48": 790,
        "50": 860,
        "52": 940,
        "54": 1020,
        "56": 1100,
        "58": 1180,
        "60": 1270,
        "62": 1350,
        "64": 1440,
        "66": 1530,
        "68": 1620,
        "70": 1710,
        "72": 1810,
        "74": 1910,
        "76": 2020,
        "78": 2120,
        "80": 2230,
        "82": 2350,
        "84": 2460,
        "86": 2580,
        "88": 2700,
        "90": 2830,
        "92": 2960,
        "94": 3080,
        "96": 3220,
        "98": 3350,
        "100": 3490
    };
    $scope.L_5_8 = {
        "14": 118,
        "16": 149,
        "18": 186,
        "20": 220,
        "22": 270,
        "24": 320,
        "26": 380,
        "28": 430,
        "30": 500,
        "32": 570,
        "34": 640,
        "36": 710,
        "38": 790,
        "40": 870,
        "42": 960,
        "44": 1050,
        "46": 1150,
        "48": 1250,
        "50": 1360,
        "52": 1470,
        "54": 1590,
        "56": 1710,
        "58": 1840,
        "60": 1970,
        "62": 2110,
        "64": 2240,
        "66": 2360,
        "68": 2490,
        "70": 2630,
        "72": 2770,
        "74": 2920,
        "76": 3080,
        "78": 3260,
        "80": 3430,
        "82": 3610,
        "84": 3780,
        "86": 3970,
        "88": 4170,
        "90": 4370,
        "92": 4580,
        "94": 4790,
        "96": 5010,
        "98": 5230,
        "100": 5450
    };
    // общая загрузка
    $scope.TotalLoading = [];
    // показать/скрыть клавиатуру
    $scope.show_keyboard = false;
    // при фокусе на диаметре показать клавиатуру
    $('#diam').click(function () {
        $('.numbers').css('display', 'block');
        $scope.show_keyboard = false;
        //$scope.$watch();
        $scope.$apply();
    });
    // стрелка вниз - скрыть клавиатуру
    $('.ok').click(function () {
        $('.numbers').css('display', 'none');
        $scope.show_keyboard = true;
        $scope.button_text = 'Скрыть загрузку';
        $scope.$apply();
    });

    //ПОКАЗАТЬ ВСЮ ЗАГРУЗКУ/СКРЫТЬ КЛАВИАТУРУ
    $scope.showAll = function (){
        if($scope.show_keyboard)
        {
            $scope.show_keyboard = false;
            $scope.button_text = 'Показать всю загрузку';
        }
        else
        {
            $scope.show_keyboard = true;
            $scope.button_text = 'Скрыть загрузку';
        }
    };

    // ДОБАВЛЕНИЕ НОВОГО БРЕВНА
    $scope.addVol = function () {
        if($scope.len)
        {
            //цвет длины в черный
            $('#show_len').css('color','black');
            // определение текущей длины
            switch ($scope.len) {
                case '3.8':
                    $scope.current_len = $scope.L_3_8;
                    break;
                case '5.8':
                    $scope.current_len = $scope.L_5_8;
                    break;
            }
            // добавление нового бревна
            if ($scope.diam >= 8 && $scope.diam <= 100 && ($scope.diam % 2) == 0) {
                $scope.total_vol += $scope.current_len[$scope.diam];
                // новое бревно в общий массив загрузки
                $scope.TotalLoading.push({
                    num: $scope.log_number,
                    len: $scope.len,
                    diam: $scope.current_len[$scope.diam],
                    total: $scope.total_vol
                });

                //расчет среднего диаметра
                summ_all_diam += parseInt($scope.diam);
                $scope.aver_diam = summ_all_diam/$scope.log_number;
                //округляем до сотых
                $scope.aver_diam = Math.round($scope.aver_diam*100)/100;

                $scope.log_number++;
                $scope.diam = '';
                $('#diam').trigger('focus');


            }
            else
                return false;
            //console.log($scope.TotalLoading);
        }
        else
        {
            $scope.len = '!!!';
            $('#show_len').css('color','red');
        }
    };

    //ВВОД С ВИРТУАЛЬНОЙ КЛАВИАТУРЫ
    $scope.addDiam = function (num){
        $scope.diam += num;
    };

    //УДАЛЕНИЕ В ПОЛЕ ДИАМЕТРА
    $scope.removeDiam = function (){
        $scope.diam = $scope.diam.substring(0, $scope.diam.length - 1);
    };

}); //LesCtrl
//# sourceMappingURL=app.js.map