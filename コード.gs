function deleteSpamMail() {
  // メールの受信ボックスの内容取得
  const threads = GmailApp.getInboxThreads(); 

  const GmailMessage = new GmailMessage();

  console.log(GmailMessage);

  for(const thread of threads){

    console.log(thread.getFirstMessageSubject()); // 件名をログ出力

  }
}
