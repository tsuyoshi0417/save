//1.HTML要素を取得
const message = document.getElementById('message');
const button = document.getElementById("changeMessageButton");

//2.メッセージ一覧を配列で管理
const messages = [
    "Javasctript準備出来ました!",
    "ボタンが押されました!🎉",
    "いい感じです",
    "何度でも変わるよ",
];

//3.今どれを表示しているか（最初は０）
let index = 0;
message.textContent = messages[index];

//4.ボタンが押された時の動き
button.addEventListener("click", () => {
    //インデックスを1つ進める
    index++;
    //配列の長さを超えたら0に戻す
    if (index >= messages.length) {
        index = 0;
    }
    //メッセージを更新
    message.textContent = messages[index];
});