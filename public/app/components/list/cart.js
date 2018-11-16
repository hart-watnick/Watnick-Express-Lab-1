"use strict";

const cart = {
    template: `
    <button ng-click = "$ctrl.getCart();">Retrieve Cart</button>

    <ul>
        <li ng-repeat = "obj in $ctrl.info">{{obj.product}} ; cost: $ {{obj.price}} ; quantity: {{obj.quantity}}
    </ul>
    
    `,
    controller: ["CartService", function(CartService) {
        const vm = this;
        vm.getCart = () => {
            CartService.getAllItems().then((response) => {
                console.log(response);
                vm.info = response.data;
            });
            
        };
    }]
};

angular
    .module("CartLab")
    .component("cart", cart);