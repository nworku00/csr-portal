const seedData = [{
    firstName: "Walter",
    lastName: "White",
    email: "walter.white@example.com",
    phoneNum: "123-456-7890",
    creditNum: "1234 5678 1234 5678",
    recentPurchases: [
        { cost: 5.07, details: "Purchase at Store 280", date: "03/12/22" },
        { cost: 300.25, details: "Purchase at Store 100", date: "10/12/22" },
        { cost: 8.6, details: "Purchase at Store 280", date: "04/18/23" },
    ],
    vehicles: [
        { make: "Toyota", model: "Camry", tag: "123ABC", activeSub: true },
        { make: "Ford", model: "Mustang", tag: "456DEF", activeSub: false },
    ],
}, {
    firstName: "John",
    lastName: "Johnson",
    email: "john.johnson@example.com",
    phoneNum: "987-654-3210",
    creditNum: "9876 5432 1098 7654",
    recentPurchases: [
        { cost: 15.99, details: "Purchase at Store 512", date: "07/05/23" },
        { cost: 75.5, details: "Purchase at Store 720", date: "07/15/23" },
        { cost: 120.0, details: "Purchase at Store 512", date: "07/20/23" },
    ],
    vehicles: [
        { make: "Honda", model: "Civic", tag: "XYZ789", activeSub: true },
        { make: "Chevrolet", model: "Tahoe", tag: "ABC123", activeSub: true },
    ],
},{
    firstName: "Emma",
    lastName: "Jacobs",
    email: 'emma.jacobs@example.com',
    phoneNum: '555-789-1234',
    creditNum: '1111 2222 3333 4444',
    recentPurchases: [
        { cost: 9.99, details: 'Purchase at Store 200', date:'06/22/23'},
        { cost: 20.00, details: 'Purchase at Store 512', date:'07/02/23'},
        { cost: 45.75, details: 'Purchase at Store 800', date:'07/19/23'},
    ],
    vehicles: [
        {make: 'Nissan', model:'Altima', tag : 'JKL567', activeSub : false},
    ]
    }]
export default seedData