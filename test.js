products_Array = [
    { "id": 1, "sku": "abc", "productName": "name 1", "category": 1 },
    { "id": 2, "sku": "def", "productName": "name 2", "category": 2 },
    { "id": 3, "sku": "ghi", "productName": "name 1", "category": 2 },
    { "id": 4, "sku": "klm", "productName": "name 1", "category": 3 },
    { "id": 5, "sku": "xyz", "productName": "name 1", "category": 1 }
]

pricing_Array =
    [{ "sku": "abc", "price": 10, },
    { "sku": "def", "price": 20, },
    { "sku": "ghi", "price": 30, },
    { "sku": "klm", "price": 40, },
    { "sku": "xyz", "price": 50, }
    ]

const categories = [
    { id: 1, name: "category 1" },
    { id: 2, name: "category 2" },
    { id: 3, name: "category 3" },
    { id: 4, name: "category 4" },
    { id: 5, name: "category 5" }
];

const total_Array=[];

products_Array.forEach(product => {
    const productPrice = pricing_Array.find(price => price.sku === product.sku);
    const productCategory = categories.find(category => category.id === product.category);

    if (productPrice && productCategory) {
        total_Array.push({
            ...product,
            price: productPrice.price,
            category: productCategory.id
        });
    }
});

console.log(total_Array);