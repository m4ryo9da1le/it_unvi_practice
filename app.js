const quiz = [
  {
    question: "ゲーム市場、最も売れたゲーム機は次の内どれ？",
    answers: [
      "スーパーファミコン",
      "プレイステーション2",
      "ニンテンドースイッチ",
      "ニンテンドーDS"
    ],
    correct: "ニンテンドーDS"
  }, {
    question: "糸井重里が企画に関わった、任天堂の看板ゲームといえば？",
    answers: [
      "MOTHER2",
      "スーパーマリオブラザーズ3",
      "スーパードンキーコング",
      "星のカービィ"
    ],
    correct: "MOTHER2"
  }, {
    question: "ファイナルファンタジーⅣの主人公の名前は？",
    answers: [
      "フリオニール",
      "クラウド",
      "ティーダ",
      "セシル"
    ],
    correct: "セシル"
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//console.log(document.getElementById("js-question")) ;
//console.log(document.getElementById("js-question").textContent);


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//定数の文字列をHTMLに反映させる
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  // $button[0].textContent = answers[0];
  // $button[1].textContent = answers[1];
  // $button[2].textContent = answers[2];
  // $button[3].textContent = answers[3];
  //↓リファクタリング(コード整理)
  let buttonIndex = 0;
  while (buttonIndex < $button.length) {
    //ここに命令
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();


// if (correct === e.target.textContent) {
//   window.alert("正解！");
// } else {
//   window.alert("不正解！");
// }
//↓リファクタリング
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解！");
  }

  quizIndex++;

  if (quizIndex < quizLength) {
    //問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です！");
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}


// $button[1].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[2].addEventListener("click", (e) => {
//   clickHandler(e);
// });
// $button[3].addEventListener("click", (e) => {
//   clickHandler(e);
// });
