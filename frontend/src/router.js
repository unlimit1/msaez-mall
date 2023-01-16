
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import DeliveryManager from "./components/listers/DeliveryCards"
import DeliveryDetail from "./components/listers/DeliveryDetail"

import OrderManager from "./components/listers/OrderCards"
import OrderDetail from "./components/listers/OrderDetail"

import OrderHistoryView from "./components/OrderHistoryView"
import OrderHistoryViewDetail from "./components/OrderHistoryViewDetail"

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/deliveries',
                name: 'DeliveryManager',
                component: DeliveryManager
            },
            {
                path: '/deliveries/:id',
                name: 'DeliveryDetail',
                component: DeliveryDetail
            },

            {
                path: '/orders',
                name: 'OrderManager',
                component: OrderManager
            },
            {
                path: '/orders/:id',
                name: 'OrderDetail',
                component: OrderDetail
            },

            {
                path: '/orderHistories',
                name: 'OrderHistoryView',
                component: OrderHistoryView
            },
            {
                path: '/orderHistories/:id',
                name: 'OrderHistoryViewDetail',
                component: OrderHistoryViewDetail
            },


    ]
})
