(
    function () {
        "use strict";

        angular.module("ShoppingListApp", [])

        .controller("ShoppingListCtrl", ShoppingListCtrl)
        .controller("CartCtrl", CartCtrl)
        .service("CartService", CartService);


        ShoppingListCtrl.$inject = ["CartService"];
        function ShoppingListCtrl(CartService) {
            var shoppingList = this;
            shoppingList.items = CartService.getItems();

            shoppingList.moveToCart = function (index, item) {
                CartService.removeItem(index);
                CartService.addToCart(item);
            };

        }

        CartCtrl.$inject = ["CartService"];
        function CartCtrl(CartService) {
            var cart = this;
            cart.items = [];
            cart.items = CartService.getItemsInCart();
        }



        function CartService() {
            var cs = this;

            var items = [
                {
                    quantity: 3,
                    name: "cans of coke"
                },

                {
                    quantity: 1,
                    name: "bottle of mineral water"
                },

                {
                    quantity: 2,
                    name: "pizzas"
                },

                {
                    quantity: 1,
                    name: "bag of cookies"
                },

                {
                    quantity: 2,
                    name: "kilos of oranges"
                }
            ];

            var itemsInCart = [];

            cs.getItems = function () {
                return items;
            };

            cs.getItemsInCart = function () {
                return itemsInCart;
            };

            cs.removeItem = function (index) {
                items.splice(index, 1);
            };

             cs.addToCart = function (item) {
                itemsInCart.push(item);
                 console.log(itemsInCart);
                 console.log(item);
            };

        }
    }
)();