// 3-dars

// function say() {
//     const name = "Shohrux"
//     return name
// }
// console.log(name);  bunde qisa iwlamedi bitta funksiyani ichiga var yoki let yozilsa ikoviyam wunga tegiwli buladi icidan ciqib kitolmedi

// var year = +prompt("2 jahon urushi qachon tugagan")
// var res;

// if(isNaN(year)){
//     res = "Harf emas son yozing"
// }
// else if(year < 1945 && year >= 1941){
//     res = "hali urush davom itepti"
// }
// else if(year > 1945){
//     res = "exxe urush tugaganiga ancha buldiku"
// }
// else{
//     res = "qoyil siz topdingiz"
// }
// alert(res)



// console.log(name);
// let name = "Shohrux" faqat wunde yozilsa undefined diydi


// let a = +prompt("1-sonni yozing")
// let b = +prompt("2-sonni yozing")
// let c = +prompt("3-sonni yozing")
// let res;

// if(a > b && a < c){
//     res = a + "bu urtacha raqam"
// }
// else if(a < b && b < c){
//     res = b + "bu urtacha raqam"
// }
// else if(a < c && b > c){
//     res = c + "bu urtacha raqam"
// }
// alert(res)



//  WHILE 

// let i = 1
// while(i <= 10){
//     console.log(i + '<br>')
//     i++
// }


// FOR 

// for(let i = 0; i <= 10; i++){
//     console.log(i + "<br>");
// }


// let num = +prompt("sonni yozing")
// let power = +prompt("darajasini yozing")
// let res = 1;

// for(let i = 1; i <= power; i++){
//     res *= num
// }
// console.log(res);


// var arr = [1, 2, 3, "shaxa"] 
// arr[3] = "shohrux" wunde qsek massivni ichidegini uzgartirsek buladi i massivniyam obyektiyam ichini uzgartirsek buladi 
// console.log(arr[3]);

// var arr = {name: "Shaha"}
// arr.name = "Shohrux" wunde qsek massivni ichidegini uzgartirsek buladi i massivniyam obyektiyam ichini uzgartirsek buladi 
// console.log(arr.name);

// for(let i = 0; i <= 10; i++){
//     if(i % 2 != 0){
//         console.log(i);
//     }
// }

// let year = +prompt("Nechanchi oyda tug`ulgansiz")
// let res;
// switch(year){
//     case 1 :
//     case 2 :
//         res = "Siz qishdasiz"
//         break;
//     case 3 :
//     case 4 :
//     case 5 :
//         res = "Siz bahordasiz"
//         break;
//     case 6 :
//     case 7 :
//     case 8 :
//         res = "Siz yozdasiz"
//         break;
//     case 9 :
//     case 10 :
//     case 11 :
//         res = "Siz kuzdasiz"
//         break;
//     case 12 :
//         res = "Siz qishdasiz"
//         break;
//     default :
//         res = "Bunde oy yuq"
// }
// alert(res)


// let age = +prompt("Yoshingiz nechhida")
// let res;

// if(age > 0 && age < 18){
//     res = "hali uqi blat ske qutaq bomi iwlap"
// }
// else if(age > 17 && age < 60){
//     res = "Hali iwlaw kire pensiyaga oz qoptiku"
// }
// else if(age > 59 && age < 111){
//     res = "Bulli otaxon kayp qilip yotmesimi e blat e"
// }
// alert(res)



// let login = prompt("Logingiz")
// let res;
// if(login === "admin"){
//     let parol = +prompt("Parolingiz")
//     if(parol === 123){
//         res = "Xush kelibsiz"
//     }else{
//         res = "Parol xato"
//     }
// }else{
//     res = "Login xato"
// }
// alert(res)



// let num = +prompt("nechta yulduzcha kire")
// let power = ""

// for(let i = 1; i <= num; i++){
//     power += "*" + "<br>"
//     document.write(power)
// }


// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// } berda juft sonla chiqadi

// for(let i = 0; i <= 10; i++){
//     if(i % 2 == 1){
//         console.log(i);
//     }
// } a berda toq sonla chiqadi 

// for(i = 0; i <= 10; i++){
//     if(i == 5){
//         continue
//     }
//     console.log(i)
// }
// for(i = 0; i <= 10; i++){
//     if(i == 5){
//         break
//     }
//     console.log(i)
// }

// var colors = ["pink", "blue", "green", "black", "red", "yellow", "crimson"]
// var rand = Math.floor(Math.random() * colors.length)
// var randColor = colors[rand]
// console.log(randColor);
// var maxAttempt = +prompt("Rangni top uyini nechta urunish xoxlaysiz")

// for(var i = 1; i <= maxAttempt; i++){
//     var answer = prompt("Qanday rang bulishi mumkin sizda " + i + " -urunish")

//     if(answer == null){
//         break;
//     }
//     else if(answer !== randColor){
//         continue
//     }
//     else{
//         document.write("Tabriklaymiz siz" + i + " ta urunishda topdingiz")
//         break;
//     }
// }
// document.write("<p>O`yin tugadi hali davomi bor</p>")


// let color = 'red';
// let maxAttempt = 3;

// for(let i = 1   ; i <= maxAttempt; i++){
//     let answer = prompt("Rangni top uyini qande rang bor sizda " + i + "-urunish")
//     if(answer == null){
//         break
//     }
//     else if(answer != color){
//         continue
//     }
//     else{
//         document.write("Tabriklaymiz siz " + i + "-urunishda topdingiz")
//         break
//     }
// }
// document.write("<p>" + "uyin tugadi davomi bor")
