// 削除したい送信元メールアドレス
const deleteAddressArray = [
  'info@audiobook.jp',
  'noreply@wantedly.com',
  'addp@point.recruit.co.jp',
  'info@form.jrepoint.jp',
  'admin@in-fra.jp',
  'noreply_zoffonline@zoff.com',
  'mail@mail.adobe.com',
  'point-notice-w@pointcard.rakuten.co.jp',
  'reminders@facebookmail.com',
  'aws-marketing-email-replies@amazon.com',
  'member-technology@crowdworks.co.jp',
  'noreply@freelance-start.com',
  'noreply@signate.jp',
  'noreply@tabelog.com',
  'no-reply@mail.dotinstall.com',
  'noreply-maps-timeline@google.com',
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
  'feedback@moneyforward.com mnybk.com',
  'contact@anny.gift xdata.jp',
  'mktg_nws@rakuten-sec.co.jp',
  'paiza_newsletter@paiza.jp',
  'no-reply@magazine.crowdworks.jp',
  'magazine@lancers.jp',
  'mag@zozo.jp',
  'info@sevenmp.omni7.jp',
  'rpointcard-news@emagazine.rakuten.co.jp',
  'mag@hotpepper.jp',
  'member@emagazine.rakuten.co.jp',
  'ikea@news.email.ikea.jp',
  'v-mail@dmm.com',
  'info@mailer.netflix.com',
  'learn@email1.asana.com',
  'store-news@amazon.co.jp',
  'communication@mailer.olympic.org',
  'mktg_nws@rakuten-sec.co.jp',
  'dominos@mail.dominos.jp',
  'mail@mail.adobe.com',
  'info@paiza.jp',
  'info@zaim.net',
  'contact@anny.gift',
  'info@mailer.netflix.com',
  'service@ac.rakuten-bank.co.jp',
  'feedback@moneyforward.com',
  'freelance.findy-code.io',
  'friendsuggestion@facebookmail.com',
  'reminders@facebookmail.com',
  'notify@twitter.com',
  'ichiba-news@emagazine.rakuten.co.jp',
  'paiza_maga@paiza.jp',
  'melma@aoyama-syouji.co.jp',
  'bank-news@mail.rakuten-bank.co.jp',
  'v-mail@dmm.co.jp',
  'aws-marketing-email-replies@amazon.com',
  'info@mail.rakuten-bank.co.jp',
  'Rewards@mx.starbucks.co.jp',
  'majibu@majibu.jp',
  'ccl@matsukiyococokara.com',
  'qoo10info@qoo10.jp',
];

// 特定アドレスのメールをゴミ箱に移動する関数
function moveSpecificAddressEmailToTrash() {
  // 削除処理
  for (let deleteAddress of deleteAddressArray) {
    // 検索条件を指定
    let query = 'from:' + deleteAddress;
    // 検索してスレッドを取得
    // 毎時間動くから3件くらい取得しておけば足りる。
    let threads = GmailApp.search(query, 0, 3);
    let messageThreads = GmailApp.getMessagesForThreads(threads);
    // ゴミ箱に移動
    for (let messages of messageThreads) {
      messages[0].moveToTrash();
    }
  }
}
