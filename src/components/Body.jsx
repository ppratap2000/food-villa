import React from 'react'
import RestrauntCard from './Restrauntcard';
import "../styles/body.css"

const restrautList = [
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "565562",
            "name": "Harishankar Veg Restro",
            "uuid": "82055133-6483-4775-8e1e-c67f8c7d92e2",
            "city": "12",
            "area": "Pratap Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "aa067134b7bdd3a2da7cd1eb251c9662",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chaat",
                "Snacks",
                "Fast Food",
                "Thalis",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 19,
            "minDeliveryTime": 19,
            "maxDeliveryTime": 19,
            "slaString": "19 MINS",
            "lastMileTravel": 1.899999976158142,
            "slugs": {
                "restaurant": "harishankar-veg-restro-pratap-nagar-pratap-nagar",
                "city": "jaipur"
            },
            "cityState": "12",
            "address": "174/118, Kumbha Marg, Sector 19, Pratap Nagar, Jaipur, Rajasthan 302033, India",
            "locality": "Kumbha Marg",
            "parentId": 4864,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6520617~p=1~eid=00000187-9a0a-c963-28ea-69a900b10169",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "1.8 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "565562",
                "deliveryTime": 19,
                "minDeliveryTime": 19,
                "maxDeliveryTime": 19,
                "lastMileTravel": 1.899999976158142,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "72060",
            "name": "Khandelwal Dhaba- Tonk Road",
            "uuid": "6cbc04cb-8a0b-4c5f-8b11-47df2444dd20",
            "city": "12",
            "area": "Pratap Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "cklnvjzutltald7fhz8r",
            "cuisines": [
                "North Indian",
                "Biryani",
                "Thalis",
                "Mughlai",
                "Snacks",
                "Kebabs",
                "Afghani",
                "Tandoor",
                "Indian",
                "Grill",
                "Hyderabadi",
                "Lucknowi"
            ],
            "tags": [

            ],
            "costForTwo": 30000,
            "costForTwoString": "₹300 FOR TWO",
            "deliveryTime": 22,
            "minDeliveryTime": 22,
            "maxDeliveryTime": 22,
            "slaString": "22 MINS",
            "lastMileTravel": 0.699999988079071,
            "slugs": {
                "restaurant": "khandelwal-dhaba-tonk-road-pratap-nagar",
                "city": "jaipur"
            },
            "cityState": "12",
            "address": "Shop No. - 9, Sector- 8, Pratap Nagar, Main Tonk Road, Sanganer, Jaipur, Rajasthan 302033",
            "locality": "Sector 8",
            "parentId": 117390,
            "unserviceable": false,
            "veg": true,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹120 | Use code MISSEDYOU",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.6 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "72060",
                "deliveryTime": 22,
                "minDeliveryTime": 22,
                "maxDeliveryTime": 22,
                "lastMileTravel": 0.699999988079071,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.5",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "372938",
            "name": "KHANDELWAL PAVITRA BHOJNALAYA",
            "uuid": "62001683-636c-4807-81b6-49cfae2c8ebe",
            "city": "12",
            "area": "Pratap Nagar",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "yn8zq6yxe5qjtv4c47ql",
            "cuisines": [
                "Indian",
                "North Indian",
                "Thalis",
                "Chinese"
            ],
            "tags": [

            ],
            "costForTwo": 28000,
            "costForTwoString": "₹280 FOR TWO",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "slaString": "33 MINS",
            "lastMileTravel": 3,
            "slugs": {
                "restaurant": "khandelwal-pavitra-bhojnalaya-sitapura-sitapura",
                "city": "jaipur"
            },
            "cityState": "12",
            "address": "266, S H B, Shop No 266/KB-1, Pratap Nagar Housing Board, Sanganer, Jaipur-II Ward 32, Jaipur II, Rajasthan, 302033",
            "locality": "Housing Board",
            "parentId": 117399,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3300,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3300",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6521631~p=4~eid=00000187-9a0a-c963-28ea-69aa00b1046d",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "3 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "372938",
                "deliveryTime": 33,
                "minDeliveryTime": 33,
                "maxDeliveryTime": 33,
                "lastMileTravel": 3,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.8",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "59274",
            "name": "Rominus Pizza & Burger",
            "uuid": "c9629637-bad3-4a70-a2ab-48a5c8e5e48a",
            "city": "12",
            "area": "Malviya Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "9ec9ffd900c24ef751e2f34ba3d2fd4b",
            "cuisines": [
                "Pizzas",
                "Italian-American",
                "American",
                "Barbecue",
                "Snacks",
                "Grill",
                "Italian",
                "Pastas",
                "Sweets",
                "Desserts",
                "Beverages"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "slaString": "30 MINS",
            "lastMileTravel": 4.400000095367432,
            "slugs": {
                "restaurant": "rominos-jagatpura-malviya-nagar",
                "city": "jaipur"
            },
            "cityState": "12",
            "address": "Central Spine Block BC-7 Mahal Road Akshay Patra Chauraha Jagatpura",
            "locality": "Malviya Nagar",
            "parentId": 8387,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 3300,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 3300,
                "message": "",
                "title": "Delivery Charge",
                "amount": "3300",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6523785~p=28~eid=00000187-9a0a-c963-28ea-69b200b11c6f",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "4.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "59274",
                "deliveryTime": 30,
                "minDeliveryTime": 30,
                "maxDeliveryTime": 30,
                "lastMileTravel": 4.400000095367432,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "3.9",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "429976",
            "name": "Burger Farm",
            "uuid": "ff5421d2-3c30-482e-977b-c08889b01394",
            "city": "12",
            "area": "Jagatpura",
            "totalRatingsString": "1000+ ratings",
            "cloudinaryImageId": "knioqcexxsmqqixqnh4l",
            "cuisines": [
                "American",
                "Italian",
                "Italian-American",
                "Desserts",
                "Continental",
                "Bakery",
                "Beverages",
                "Grill"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 29,
            "minDeliveryTime": 29,
            "maxDeliveryTime": 29,
            "slaString": "29 MINS",
            "lastMileTravel": 5,
            "slugs": {
                "restaurant": "burger-farm-jagatpura-jagatpura",
                "city": "jaipur"
            },
            "cityState": "12",
            "address": "\"Plot No.210, VishwVidhyalay Nagar (Maharana P.G.N.S), Jagatpura, Jaipur, Jaipur-II Ward 39, Jaipur II, Rajasthan - 302018 \"",
            "locality": "VishwVidhyalay Nagar",
            "parentId": 4660,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "Flat ₹125 off",
                "shortDescriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "₹125 OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                        "discountType": "Flat",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "ribbon": [
                {
                    "type": "PROMOTED"
                }
            ],
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 4000,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 4000,
                "message": "",
                "title": "Delivery Charge",
                "amount": "4000",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "cid=6524112~p=19~eid=00000187-9a0a-c963-28ea-69af00b1130f",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "5 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "429976",
                "deliveryTime": 29,
                "minDeliveryTime": 29,
                "maxDeliveryTime": 29,
                "lastMileTravel": 5,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": true,
            "avgRating": "4.3",
            "totalRatings": 1000,
            "new": false
        },
        "subtype": "basic"
    },
    {
        "type": "restaurant",
        "data": {
            "type": "F",
            "id": "52628",
            "name": "Roll Express",
            "uuid": "1d58034b-b4ce-45a6-84e4-741ec020eb1a",
            "city": "12",
            "area": "Pratap Nagar",
            "totalRatingsString": "10000+ ratings",
            "cloudinaryImageId": "e4u5mwj4tdvulvqksawt",
            "cuisines": [
                "Fast Food",
                "Snacks",
                "North Indian",
                "Chinese",
                "Mughlai",
                "Lucknowi",
                "Bengali",
                "Beverages",
                "Grill",
                "Combo"
            ],
            "tags": [

            ],
            "costForTwo": 20000,
            "costForTwoString": "₹200 FOR TWO",
            "deliveryTime": 18,
            "minDeliveryTime": 18,
            "maxDeliveryTime": 18,
            "slaString": "18 MINS",
            "lastMileTravel": 0.4000000059604645,
            "slugs": {
                "restaurant": "roll-express-kumbha-marg-sitapura",
                "city": "jaipur"
            },
            "cityState": "12",
            "address": "100/73,Pratap Nagar,Sector 10,Jaipur ,302033",
            "locality": "Sector 10",
            "parentId": 16561,
            "unserviceable": false,
            "veg": false,
            "select": false,
            "favorite": false,
            "tradeCampaignHeaders": [

            ],
            "aggregatedDiscountInfo": {
                "header": "60% off",
                "shortDescriptionList": [
                    {
                        "meta": "60% off | Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "aggregatedDiscountInfoV2": {
                "header": "60% OFF",
                "shortDescriptionList": [
                    {
                        "meta": "Use WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "descriptionList": [
                    {
                        "meta": "60% off up to ₹100 | Use code WELCOMEBACK",
                        "discountType": "Percentage",
                        "operationType": "RESTAURANT"
                    }
                ],
                "subHeader": "",
                "headerType": 0,
                "superFreedel": ""
            },
            "chain": [

            ],
            "feeDetails": {
                "fees": [
                    {
                        "name": "distance",
                        "fee": 2600,
                        "message": ""
                    },
                    {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                    },
                    {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                    }
                ],
                "totalFees": 2600,
                "message": "",
                "title": "Delivery Charge",
                "amount": "2600",
                "icon": ""
            },
            "availability": {
                "opened": true,
                "nextOpenMessage": "",
                "nextCloseMessage": ""
            },
            "longDistanceEnabled": 0,
            "rainMode": "NONE",
            "thirdPartyAddress": false,
            "thirdPartyVendor": "",
            "adTrackingID": "",
            "badges": {
                "imageBased": [

                ],
                "textBased": [

                ],
                "textExtendedBadges": [

                ]
            },
            "lastMileTravelString": "0.4 kms",
            "hasSurge": false,
            "sla": {
                "restaurantId": "52628",
                "deliveryTime": 18,
                "minDeliveryTime": 18,
                "maxDeliveryTime": 18,
                "lastMileTravel": 0.4000000059604645,
                "lastMileDistance": 0,
                "serviceability": "SERVICEABLE",
                "rainMode": "NONE",
                "longDistance": "NOT_LONG_DISTANCE",
                "preferentialService": false,
                "iconType": "EMPTY"
            },
            "promoted": false,
            "avgRating": "3.7",
            "totalRatings": 10000,
            "new": false
        },
        "subtype": "basic"
    }

]


const Body = () => {
    return (
        <div className='restaurant-list'>
            {/* //or restaurant={restrautList[0]} */}
            {/* <RestrauntCard {...restrautList[0].data} />
            <RestrauntCard {...restrautList[1].data} />
            <RestrauntCard {...restrautList[2].data} />
            <RestrauntCard {...restrautList[3].data} />
            <RestrauntCard {...restrautList[4].data} />
            <RestrauntCard {...restrautList[5].data} /> */}

            {/* OR */}
            {/* //no key(not acceptible)<<<index key(use only if we don't have anything)<<<unique key(best practice) */}
            {restrautList.map((restaurant) => {

                return < RestrauntCard  {...restaurant.data} key={restaurant.data.id} />


            })}



        </div>
    )
}

export default Body
