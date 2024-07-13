type Product = {
    name: string;
    price: number;
    category: string;
}

//กำหนด array ของ Product
let Products: Product[] = [
    {name: 'Laptop', price: 50000, category: 'Electronics'},
    {name: 'Shirt', price: 1200, category: 'Apparel'},
    {name: 'Coffer Maker', price: 2500, category: 'Appliances'}
]

//สร้าง Function filterProductByPrice สำหรับกรองข้อมูลผลิตภัณฑ์ตามที่ราคากำหนด
function filterProductByPrice(Products: Product[],minPrice:number):Product[]{
    return Products.filter(Product=>Product.price>minPrice);
}

//เรียกใช้ Funtion
let filterProduct = filterProductByPrice(Products,2000);
let discountProducts = discountProduct(filterProduct);

//แสดงผลลัพธ์ที่ต้องการ
//console.log(filterProduct);
console.log(discountProducts)


//แสดง Function discountProduct ใช้สำหรับลดราคาสินค้า 10%
function discountProduct(Products: Product[]): Product[]{
    return Products.map(product=>({...product,price:product.price*0.9}));
}

//{ name: 'Laptop', price: 45000, category: 'Electronics' },
//{ name: 'Coffer Maker', price: 2250, category: 'Appliances' }