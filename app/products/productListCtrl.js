/**
 * Created by shabashov on 09.04.15.
 */
(function () {
    "use strict";
    angular
        .module("productManagement")
        .controller("ProductListCtrl", ProductListCtrl); // первый параметр - имя контроллера,
        // 2-й - ссылка на функцию определяющую контроллер

    function ProductListCtrl() {
        // this - определяет модель, кот. будет использоваться представлением view
        var vm = this; // vm - view model
        vm.products = [
            {"productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": [ "leaf", "tool" ],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous"
            },
            {"productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved claw steel hammer.",
                "cost": 1.00,
                "price": 8.95,
                "category": "toolbox",
                "tags": [ "tool" ],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hamm"
            }];

        vm.showImage = false;

        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        }
    }
}());