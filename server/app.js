var express = require('express');
var cors = require('cors');
var app = express();


app.use(cors())

// RETURNS ORDER LIST
app.get('/orders', function (req, res, next) {
    res.status(200).send({orders: orderList, backlog: backlog, potentialrev :47, totlines:230, totunits:12017});
});

// RETURNS RECEIVING ORDER LIST
app.get('/receivings', function (req, res, next) {
    res.status(200).send({receivings: receivingsList,dueFoutWeekList : [10, 20, 40, 60, 30], potentialrev :47, totlines:230, totunits:12017});
});

module.exports = app;



var orderList = [
    {
        orderNo: 531143,
        customer: 'HYDRIL LCC ANCHORAGE SALE',
        items: 85,
        orderDate: '2019-09-03',
        quentity: 1,
        orderCost: 7863.56,
        ohQty: 1,
        poArrivals: 0,
        poAsHarizan: 0,
        actions: { clear: 0, dock: 20, inspection: 50, hold: 15 },
    },
    {
        orderNo: 569872,
        customer: 'HYDRIL LCC ANCHORAGE SALE',
        items: 1,
        orderDate: '2019-09-05',
        quentity: 1,
        orderCost: 120.30,
        ohQty: 1,
        poArrivals: 0,
        poAsHarizan: 0,
        actions: { clear: 0, dock: 0, inspection: 1, hold: 0 },
    },
    {
        orderNo: 975423,
        customer: 'HYDRIL LCC ANCHORAGE SALE',
        items: 1,
        orderDate: '2019-09-06',
        quentity: 1,
        orderCost: 500,
        ohQty: 1,
        poArrivals: 0,
        poAsHarizan: 0,
        actions: { clear: 0, dock: 0, inspection: 1, hold: 0 },
    },
    {
        orderNo: 586954,
        customer: 'HYDRIL UAS MFG LLC - HUMB',
        items: 11,
        orderDate: '2019-09-08',
        quentity: 240,
        orderCost: 384202.68,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 0, dock: 1, inspection: 3, hold: 7 },
    },
    {
        orderNo: 587946,
        customer: 'HYDRIL PCB LIMITED',
        items: 50,
        orderDate: '2019-09-11',
        quentity: 240,
        orderCost: 384202.68,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 30, dock: 0, inspection: 10, hold: 10 },
    },
    {
        orderNo: 587946,
        customer: 'HYDRIL PCB LIMITED',
        items: 50,
        orderDate: '2019-09-15',
        quentity: 240,
        orderCost: 384202.68,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 30, dock: 0, inspection: 10, hold: 10 },
    },
    {
        orderNo: 587546,
        customer: 'HYDRIL PCB LIMITED',
        items: 200,
        orderDate: '2019-09-17',
        quentity: 240,
        orderCost: 120,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 50, dock: 30, inspection: 80, hold: 40 },
    },
    {
        orderNo: 584422,
        customer: 'HYDRIL PCB LIMITED',
        items: 1,
        orderDate: '2019-09-18',
        quentity: 240,
        orderCost: 120,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 0, dock: 0, inspection: 1, hold: 0 },
    },
    {
        orderNo: 587926,
        customer: 'HYDRIL PCB LIMITED',
        items: 80,
        orderDate: '2019-09-19',
        quentity: 240,
        orderCost: 120,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 20, dock: 40, inspection: 10, hold: 10 },
    },
    {
        orderNo: 587642,
        customer: 'HYDRIL PCB LIMITED',
        items: 100,
        orderDate: '2019-09-19',
        quentity: 400,
        orderCost: 4000,
        ohQty: 10,
        poArrivals: 0,
        poAsHarizan: 2,
        actions: { clear: 15, dock: 15, inspection: 55, hold: 15 },
    }
];



var receivingsList = [
    {
        orderNo: 531143,
        customer: 'HYDRIL LCC ANCHORAGE SALE',
        items: 85,
        orderDate: '2019-09-03',
        quentity: 1,
        orderCost: 7863.56,
        ohQty: 1,
        poArrivals: 0,
        poAsHarizan: 0,
        actions: { clear: 0, dock: 20, inspection: 50, hold: 15 },
    },
    {
        orderNo: 569872,
        customer: 'HYDRIL LCC ANCHORAGE SALE',
        items: 1,
        orderDate: '2019-09-05',
        quentity: 1,
        orderCost: 120.30,
        ohQty: 1,
        poArrivals: 0,
        poAsHarizan: 0,
        actions: { clear: 0, dock: 0, inspection: 1, hold: 0 },
    },
    {
        orderNo: 975423,
        customer: 'HYDRIL LCC ANCHORAGE SALE',
        items: 1,
        orderDate: '2019-09-06',
        quentity: 1,
        orderCost: 500,
        ohQty: 1,
        poArrivals: 0,
        poAsHarizan: 0,
        actions: { clear: 0, dock: 0, inspection: 1, hold: 0 },
    },
    {
        orderNo: 586954,
        customer: 'HYDRIL UAS MFG LLC - HUMB',
        items: 11,
        orderDate: '2019-09-08',
        quentity: 240,
        orderCost: 384202.68,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 0, dock: 1, inspection: 3, hold: 7 },
    },
    {
        orderNo: 587946,
        customer: 'HYDRIL PCB LIMITED',
        items: 50,
        orderDate: '2019-09-11',
        quentity: 240,
        orderCost: 384202.68,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 30, dock: 0, inspection: 10, hold: 10 },
    },
    {
        orderNo: 587946,
        customer: 'HYDRIL PCB LIMITED',
        items: 50,
        orderDate: '2019-09-15',
        quentity: 240,
        orderCost: 384202.68,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 30, dock: 0, inspection: 10, hold: 10 },
    },
    {
        orderNo: 587546,
        customer: 'HYDRIL PCB LIMITED',
        items: 200,
        orderDate: '2019-09-17',
        quentity: 240,
        orderCost: 120,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 50, dock: 30, inspection: 80, hold: 40 },
    },
    {
        orderNo: 584422,
        customer: 'HYDRIL PCB LIMITED',
        items: 1,
        orderDate: '2019-09-18',
        quentity: 240,
        orderCost: 120,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 0, dock: 0, inspection: 1, hold: 0 },
    },
    {
        orderNo: 587926,
        customer: 'HYDRIL PCB LIMITED',
        items: 80,
        orderDate: '2019-09-19',
        quentity: 240,
        orderCost: 120,
        ohQty: 208,
        poArrivals: 0,
        poAsHarizan: 80,
        actions: { clear: 20, dock: 40, inspection: 10, hold: 10 },
    },
    {
        orderNo: 587642,
        customer: 'HYDRIL PCB LIMITED',
        items: 100,
        orderDate: '2019-09-19',
        quentity: 400,
        orderCost: 4000,
        ohQty: 10,
        poArrivals: 0,
        poAsHarizan: 2,
        actions: { clear: 15, dock: 15, inspection: 55, hold: 15 },
    }
];

var backlog =[{
          name: 'Top Customer',
          data: [50, 30, 40]
        }, {
          name: 'Will Call',
          data: [20, 20, 30]
        }, {
          name: 'Hold',
          data: [30, 40, 40]
        }]

