// Qiitaのトレンドを取得する
function getQiitaTrend() {
  const response = UrlFetchApp.fetch('https://qiita.com/trend');
  const content = response.getContentText('utf-8');

  var venues = Parser.data(content).from('<article class="css-16qp2r">').to('</article>').iterate();
  console.log(venues)


  // // トレンドのブロックを抽出
  // let topic_block = Parser.data(text).from('class="css-1p44k52">').to('</div>').build();
  // console.log(topic_block);

  // //ulタグで囲まれている記述（トップニュース記事）を抽出
  // var content_block = Parser.data(topic_block).from('<article>').to('</article>').iterate();

  // // 記事リスト用の変数を宣言
  // var list = [];

  // // content_blockの要素数分繰り返し
  // for (var i = 0; i < content_block.length; i++) {

  //   // content_blockの要素のうち、aタグに囲まれている記述を抽出
  //   topicks = Parser.data(content_block[i]).from('<a').to('</a>').iterate();
  //   console.log(topicks);

  //   // aタグに囲まれた記述の回数分、タイトルとURLを抽出する
  //   for (var j = 0; j < topicks.length; j++) {
  //     var topick = topicks[j];

  //     //URL取得
  //     var topick_url = topick.replace(/.*href="/, "").replace(/".*/, "");
  //     //タイトル取得
  //     var topick_title = topick.replace(/.*class="css-2p454n">/, "").replace(/<.*>/, "");
  //     //リスト格納

  //     // 各ニュースページからカテゴリを取得
  //     var response_topick = UrlFetchApp.fetch(topick_url);
  //     var text_topick = response_topick.getContentText("utf-8");

  //     var topick_category = Parser.data(text_topick).from('トピックス（').to('）').build();


  //     // ニュース順位、URL、タイトル、カテゴリーを取得
  //     list.push([j + 1, topick_url, topick_title, topick_category]);
  //   }
  // }

  // console.log(list);
}
