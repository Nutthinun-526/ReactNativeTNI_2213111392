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
//กำหนด array ของ Book
var Books = [
    { title: "The Great Gatshy", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "aducational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Cather in the Rye", genre: "fiction", price: 400 }
];
//สร้าง Function filterBookByPrice สำหรับกรองข้อมูลหนังสือ genre = "fiction" และ price > 300 ตามที่กำหนด
function filterBook(Books) {
    return Books.filter(function (book) { return book.genre === "fiction" && book.price > 300; });
}
//แสดง Function discountBook ใช้สำหรับลดราคาสินค้า 10% ใน function filterBook
function discountBook(Books) {
    return Books.map(function (book) { return (__assign(__assign({}, book), { price: book.price * 0.9 })); });
}
//เรียกใช้ Funtion
var filterBooks = filterBook(Books);
var discountBooks = discountBook(filterBooks);
//แสดงผลลัพธ์ที่ต้องการ
console.log(discountBooks);
//{ title: 'The Great Gatshy', genre: 'fiction', price: 288 },
//{ title: 'The Cather in the Rye', genre: 'fiction', price: 360 }
