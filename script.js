//1.Html要素を取ってくる
const message = document.getElementById("message")
const button = document.getElementById("changeMessageButton")

//2最初の文字
message.textContent = "javaScript準備出来ました";

//ボタン押された時の動き
button.addEventListener("click",()=>{
message.textContent = "ボタンが押されました！🎉"
});