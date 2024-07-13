type Book = {
    title: string;
    genre: "fiction" | "non-fiction" | "aducational";
    price: number;
}

//กำหนด array ของ Book
const Books: Book[] = [
    {title: "The Great Gatshy", genre: "fiction", price: 320},
    {title: "War and Peace", genre: "fiction", price: 250},
    {title: "Economics 101", genre: "aducational", price: 480},
    {title: "In Cold Blood", genre: "non-fiction", price: 300},
    {title: "The Cather in the Rye", genre: "fiction", price: 400}
]

//สร้าง Function filterBookByPrice สำหรับกรองข้อมูลหนังสือ genre = "fiction" และ price > 300 ตามที่กำหนด
function filterBook(Books: Book[]):Book[]{
    return Books.filter(book=>book.genre === "fiction" && book.price>300);
}

//แสดง Function discountBook ใช้สำหรับลดราคาสินค้า 10% ใน function filterBook
function discountBook(Books: Book[]): Book[]{
    return Books.map(book=>({...book,price:book.price*0.9}));
}

//เรียกใช้ Funtion
let filterBooks = filterBook(Books);
let discountBooks = discountBook(filterBooks);

//แสดงผลลัพธ์ที่ต้องการ
console.log(discountBooks)

//{ title: 'The Great Gatshy', genre: 'fiction', price: 288 },
//{ title: 'The Cather in the Rye', genre: 'fiction', price: 360 }
