// SS10_BT05_Nguyễn Bình Lam Nghi

// Cách 1:
// let USD = Number(prompt('Số tiền USD'));
// let VND = Number(USD * 25000);

// console.log(VND.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
// alert(VND.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
// document.write(VND.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));

// Cách 2:
let USD = Number(prompt('Số tiền USD'));
let VND = Number(USD * 25000);

console.log(VND.toLocaleString('it-IT') + ' ₫');
alert(VND.toLocaleString('it-IT') + ' ₫');
document.write(VND.toLocaleString('it-IT') + ' ₫');