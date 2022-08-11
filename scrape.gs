// Qiitaのトレンド記事を取得しHTMLメールとして送信する。
function sendQiitaTrendMail() {
  // URL取得
  const response = UrlFetchApp.fetch('https://qiita.com/');
  // コンテンツ取得
  const content = response.getContentText('utf-8');
  // タイトルとURLはh2タグ内に記載があるので配列として取得する
  var aricleArray = Parser.data(content).from('<h2 class="css-1t4fpk1">').to('</h2>').iterate();

  // メールの本文
  let body = '';
  // 各タイトル及びURLを配列から取得し本文に追加
  for (let i = 0; i < aricleArray.length; i++) {
    // 記事のタイトル取得(タイトルは配列で取得しているため1個目の値を取得する)
    let title = Parser.data(aricleArray[i]).from('>').to('<').iterate();
    title = title[0];

    // トレンド記事のURL
    let url = Parser.data(aricleArray[i]).from('href="').to('"').iterate();

    // 本文にタイトルとURLを追記して改行

    body = body + '<a href="' + url + '">' + title + '</a>';
    body = body + '<br>--------------------<br>';
  }

  //送信先のメールアドレス
  const recipient = 'ryosuke03140@gmail.com';
  //件名
  const subject = '今日のQiitaトレンド';
  //送信者の名前
  const options =
  {
    name: '自動送信：Qiitaトレンド',
    htmlBody: body,
  };

  // メール送信
  GmailApp.sendEmail(recipient, subject, body, options);
}

// sendQiitaTrendMailで作成したメールのうち、昨日までに送信されたものを削除
function deleteQiitaTrendMail() {
  // dateオブジェクト作成
  let date = new Date();
  //現在の「日」を取得
  let day = date.getDate();
  //前日日付にしたいので-1する
  date.setDate(day - 1);
  //日付の表示形式を整形する
  let yesterday = Utilities.formatDate(date, 'JST', 'yyyy/MM/dd');

  // 検索条件 件名が「今日のQiitaトレンド」かつ昨日までに送信されたメールを検索。
  let query = 'subject:今日のQiitaトレンド before:' + yesterday;
  let threads = GmailApp.search(query);
  let messageThreads = GmailApp.getMessagesForThreads(threads);

  // ゴミ箱に移動
  for (let messages of messageThreads) {
    messages[0].moveToTrash();
  }
}
