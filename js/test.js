//名言集を格納する
const quotes = [
    '「ビジネスは、価値を創造することである。それ以上でも、それ以下でもない。」- ピーター・ドラッカー',
    '「成功とは、自分自身を愛し、自分がやりたい仕事をして、自分のやり方で生きることだ。」- オプラ・ウィンフリー',
    '「リスクをとることを恐れてはいけない。道を間違えることを恐れてはならない。」- マーク・ザッカーバーグ',
    '「困難は、最も強力な風だ。それは最強の人間だけが飛べる高みへと僕たちを運ぶ。」- ナポレオン・ヒル',
    '「最も重要なのは、何が自分を動かすかを知ることだ。」- プラトン',
    '「道徳的な人間は、常に幸福である。」- アリストテレス',
    '「何をするにも時間が足りないという人々は、何も成し遂げられない。」- レオナルド・ダ・ヴィンチ',
    '「自己の存在の本質的な理由を理解するということこそ、すべての人間の悩みを解決する。」- ルネ・デカルト',
    '「人間の真の価値は、その人が何を受け取るかではなく、何を与えるかにある。」- アルバート・アインシュタイン',
    '「行動は常に多くの言葉を上回る。」- 本田宗一郎',
    '「重要なのは、結果ではなく、その過程にある。」- 石黒浩',
]

//名言のボタン押下後にtextareaに名言を表示する
$("#seisei").on("click",function(){
    const quotesNumber = Math.floor(Math.random() * (quotes.length));
    $("#meigen").html(quotes[quotesNumber]);
});

//Add Taskボタンを押下後にタスク表に表示する
$("#task_submit").on("click",function(){
    const task = $("#task_value").val(); //テキスト文字を取得
    const time = $("#time_value").val(); //時間を取得
    // $("#task_list").append("<li>" + task + time + '分' + "</li>"); //タスク表の下にどんどん差し込む
    $("#task_list").append("<li class='task-item'><span class='task'>" + task + time + "分" + "</span>" + "</li>"); //タスク表
    $("#task_value").val(""); //テキスト文字をブランクにする
    $("#time_value").val(""); //テキスト文字をブランクにする
});

//表示したタスクをクリックする毎に取り消し線をつける、取り除く操作
$(document).on("click", ".task-item", function() {
    var $taskText = $(this).children('.task'); // クリックしたアイテムのタスクテキストを取得
    if ($taskText.css("text-decoration").includes("line-through")) { // もし取り消し線がすでにあるなら
        $taskText.css("text-decoration", "none"); // 取り消し線を取り除く
    } else { // 取り消し線がないなら
        $taskText.css("text-decoration", "line-through"); // 取り消し線を追加
    }
});