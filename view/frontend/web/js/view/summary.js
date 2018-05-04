define(
    [
        'jquery',
        'ko',
        'Magento_Checkout/js/view/summary',
        'Magento_Checkout/js/model/step-navigator'
    ],
    function(
        $,
        ko,
        Component,
        stepNavigator
    ) {
        'use strict';

        return Component.extend({

            isVisible: function () {
                return stepNavigator.isProcessed('shipping');
            },
            initialize: function () {
                $(function() {
                    $('body').on("click", '#place-order-trigger', function () {
                        $(".payment-method._active").find('.action.primary.checkout').trigger( 'click' );
                    });
                });
                var self = this;
                this._super();
            }

        });
    }
);