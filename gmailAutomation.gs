// 特定アドレスのメールをゴミ箱に移動する関数
function moveSpecificAddressEmailToTrash() {
  // 定義
  const start = 0;
  const max = 10;

  // 削除したい送信元メールアドレス
  const deleteAddressArray = [
    'googlealerts-noreply@google.com',
    'Rewards@mx.starbucks.co.jp',
    'verify@twitter.com',
    'card_admin@mx.starbucks.co.jp amazonses.com',
    'no-reply@indeed.com',
    'suumo-support@e.suumo.jp',
    'noreply@finbee.jp',
    'verify@twitter.com',
    'no-reply@indeed.com',
    'card_admin@mx.starbucks.co.jp',
    'noreply@lancers.co.jp',
    'jory@m.fontawesome.com',
    'noreply@signate.jp',
    'web.dev-noreply@google.com',
    'noreply@github.com',
  ];

  // 削除処理
  for(let deleteAddress of deleteAddressArray) {
    // 検索条件を指定
    let query = 'from:' + deleteAddress;
    // 検索してスレッドを取得
    let threads = GmailApp.search(query, start, max);
    let messageThreads = GmailApp.getMessagesForThreads(threads);
    // ゴミ箱に移動
    for(let messages of messageThreads) {
      messages[0].moveToTrash();
    }
  }
}
