// 特定アドレスのメールをゴミ箱に移動する関数
function moveSpecificAddressEmailToTrash() {
  // 定義
  const start = 0;
  const max = 10;

  // 削除したい送信元メールアドレス
  const deleteAddressArray = [
    'googlealerts-noreply@google.com',
    'Rewards@mx.starbucks.co.jp',
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
