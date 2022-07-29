function deleteSpamMail() {
  // 定義
  const start = 0;
  const max = 10;

  // 削除したい送信元メールアドレス
  const deleteAddressArray = [
    'googlealerts-noreply@google.com',
    'Rewards@mx.starbucks.co.jp',
  ];

  for(let deleteAddress of deleteAddressArray) {
    let query = 'from:' + deleteAddress;
    let threads = GmailApp.search(query, start, max);
    let messageThreads = GmailApp.getMessagesForThreads(threads);
    for(let messages of messageThreads) {
      messages[0].moveToTrash();
    }
  }
}
