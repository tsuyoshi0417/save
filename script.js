//1.HTML要素を取得
const message = document.getElementById('message');
const button = document.getElementById("changeMessageButton");

//2.メッセージ一覧を配列で管理
const message = [
    "Javascript準備出来ました!",
    "少しずつ成長中...",
    "コードで世界を広げて行く",
    "今日の一歩が半年後の仕事に繋がる",
];

//3.今どれを表示しているか（最初は０）
let index = 0;
message.textContent = message[index];

//4.ボタンが押された時の動き
button.addEventListener("click", () => {
    //インデックスを1つ進める
    index++;
    //配列の長さを超えたら0に戻す
    if (index >= message.length) {
        index = 0;
    }
    //メッセージを更新
    message.textContent = message[index];
});