// SS10_BT06_Nguyễn Bình Lam Nghi

let Math = Number(prompt('Điểm Toán'));
let Physics = Number(prompt('Điểm Lý'));
let Chemistry = Number(prompt('Điểm Hóa'));
let Averaged = ((Math + Physics + Chemistry)/3);

console.log(Averaged.toFixed(2));
alert(Averaged.toFixed(2));
document.write("Điểm trung bình: " + Averaged.toFixed(2));