//変数
let unko = 'Hello World';

//unko = 'Hello World2!!';

//定数
const bigUnko = 'He,,Hell...Hello World';

// bigUnko = 'Hello World2!!';

//配列
let inoki = ['いーち', 'にーい', 'さーん', 'ダーー！！'];

// console.log(inoki[0]);


//ループ文
// let index = 0;
// while (index < inoki.length) {
//   // 繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

//if / else
// if (inoki.length > 5) {
//   console.log('ボンバイエ！');
// } else {
//   console.log('ボンバ...!');
// }







//関数
const test = (arg) => {
  //ここに実行したい命令を書く
  if (inoki.length > arg) {
    console.log('ボンバイエ！');
  } else {
    console.log('ボンバ...!');
  }
};

//オブジェクト
const unko2 = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () => {
    console.log('Hello World');
  }
};

// console.log(window.innerWidth);

// ポップアップ表示
// window.alert('Hello World');

// console.log(document);
// console.log(document.getElementsByTagName('button')[0]);

document.getElementsByTagName('button')[0].addEventListener('click', () => {
  //命令を書く
  window.alert('Hello World');
});
