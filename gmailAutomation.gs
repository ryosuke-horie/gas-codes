// ルール
// 関数は「function.gs」定数は「define.gs」に記載する

// 特定アドレスのメールをゴミ箱に移動する関数
function moveSpecificAddressEmailToTrash() {
  // 削除処理
  for(let deleteAddress of deleteAddressArray) {
    // 検索条件を指定
    let query = 'from:' + deleteAddress;
    // 検索してスレッドを取得
    // 毎時間動くから3件くらい取得しておけば足りる。
    let threads = GmailApp.search(query, 0, 3);
    let messageThreads = GmailApp.getMessagesForThreads(threads);
    
    // 検索条件でメールを取得できない場合はcontinue
    if(isEmpty(messageThreads)) {
      continue;
    }

    // ゴミ箱に移動
    for(let messages of messageThreads) {
      messages[0].moveToTrash();
    }
  }
}
