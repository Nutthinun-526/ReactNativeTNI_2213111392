var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด array ของ Product
var Products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffer Maker', price: 2500, category: 'Appliances' }
];
//สร้าง Function filterProductByPrice สำหรับกรองข้อมูลผลิตภัณฑ์ตามที่ราคากำหนด
function filterProductByPrice(Products, minPrice) {
    return Products.filter(function (Product) { return Product.price > minPrice; });
}
//เรียกใช้ Funtion
var filterProduct = filterProductByPrice(Products, 2000);
var discountProducts = discountProduct(filterProduct);
//แสดงผลลัพธ์ที่ต้องการ
//console.log(filterProduct);
console.log(discountProducts);
//แสดง Function discountProduct ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(Products) {
    return Products.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
//{ name: 'Laptop', price: 50000, category: 'Electronics' },
//{ name: 'Coffer Maker', price: 2500, category: 'Appliances' }
