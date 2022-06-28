//lesson1
/**const,let等の変数宣言 */
// let val2 = "let変数";
// console.log(val2);

// val2 = "let変数を上書き";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "まこと",
//   age: 25
// };
// val4.name = "藤井";
// val4.addres = "Hiroshima";
// console.log(val4);

//constで定義したオブジェクトはプロパティの変更が可能
// const val5 = ['dog' , 'cat' ];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//lesson2
//テンプレート文字列
// const name = "まこと";
// const age = "25";
// //「私の名前はまことです。年齢は２５歳です。」と表示する場合
// const masseage1 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(masseage1);

//lesson3
//アロー関数
// const func1 = (str)=>{
//   return str;
// }
// console.log(func1("func1です"));

// const func2 = (num1,num2)=>{
//   return num1 + num2;
// }
// console.log(func2(10,20));

//lesson4
//分割代入
// const myProfile = {
//   name:"まこと",
//   age:25,
// };

// const masseage1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(masseage1);

// const { name,age } = myProfile;
// const masseage2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(masseage2);

// const myProfile = [`まこと`,25];
// const masseage3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(masseage3);
// const [name,age]=myProfile;
// const masseage4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(masseage4);

//lesson4
//デフォルト値、引数
// const sayHello = (name)=>console.log(`こんにちは！${name}さん！`);
// sayHello("まこと");

//lesson4 スプレッド構文 ...（ドット３つの利用）
//配列の展開
// const arr1 = [1, 2, 3];
// console.log(arr1);//コンソール表記:[1, 2, 3]
// console.log(...arr1);//コンソール表記:1 2 3

// const sumFunc = (num1, num2, num3) => console.log(num1 + num2 + num3);
// (1)sumFunc(arr1[0], arr1[1], arr1[2]);
// (2)sumFunc(...arr1);（１）と同じ”６”の合計となる

//配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーと結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6); //配列のコピーarr4と同じ内容になる

// const arr7 = [...arr4, ...arr5];
// console.log(arr7); //arr4とarr5を結合[10,20,30,40]となる

//lesson5 mapやfilterを使った配列の処理
//const nameArr = ["藤井", "間野", "森永"];
// // //map表記
// // const numArr1 = nameArr.map((name)=>{
// // return name;
// // });
// // console.log(numArr1);//コンソール表記では["藤井","間野","森永"]が全て一行で表示

// //nameArr.map((name) => console.log(name));
// // //コンソールでは一行目　藤井　、二行目間野、三行目森永となる

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}さんです`));
//indexを用いることで　「　○○　番目は　　△△　さんです　」　と表記できる

// const newNumArr = nameArr.map((name) =>{
// if (name === "藤井"){
//   return name
// }else{
//   return `${name}さん`
// }
// })
// console.log(newNumArr);
//if文を用いて藤井の時だけ「さん」を外す

//filter表記
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) =>{
//   return num % 2 === 0;
// } );
// console.log(newNumArr);
// newNumArr.map((num) => console.log(num));

//三項演算子
//（式）ある条件？　　'条件がtrueの時　'：　'falseの時'
//例文：１００を超える数字を知りたい時
// const checSum = (num1, num2) => {
//   return num1 + num2 > 100 ? `100を超えています`:`範囲内です`;
// }
// //console.log(checSum(50,60));
// // 「　100を超えています　」　と表示
// console.log(checSum(50,40));
//「　範囲内です 」　と表示
