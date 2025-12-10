// 1. HTML要素を取得
const messageElement = document.getElementById("message");
const button = document.getElementById("changeMessageButton");

// 2. メッセージ一覧を配列で管理
const messages = [
  "Javascript準備出来ました！",
  "少しずつ成長中…",
  "コードで世界を広げて行く",
  "今日の一歩が半年後の仕事に繋がる",
];

// 3. 今どれを表示しているか（最初は0）
let index = 0;

// 4. 安全のために null チェック
if (messageElement && button) {
  // 最初のメッセージを表示
  messageElement.textContent = messages[index];

  // ボタンが押された時の動き
  button.addEventListener("click", () => {
    // インデックスを1つ進める（0,1,2,3,0,1,2,3…とループ）
    index = (index + 1) % messages.length;

    // メッセージを更新
    messageElement.textContent = messages[index];
  });
}
