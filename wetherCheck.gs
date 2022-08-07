function myFunction() {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Asia%2FTokyo';
  // JSONデータを取得
  const response = UrlFetchApp.fetch(url).getContentText();

  let json = JSON.parse(response);

  let dailyArray = json['daily'];
  // 明日の日付
  let daily = dailyArray['time'][1];
  // 明日の最高気温
  let maxTemprature = dailyArray['temperature_2m_max'][1];
  // 明日の最低気温
  let minTemprature = dailyArray['temperature_2m_min'][1];
  // WMOコード
  let weathercode = dailyArray['weathercode'][1];

  // TODO ここの条件を正確にする。
  // wheathercodeから天気を割り出す
  // 参照：(https://open-meteo.com/en/docs#api-documentation)
  let weather = '';
  if (weathercode == '0') {
    weather = '快晴';
  } else if (weathercode == '1' || weathercode == '2') {
    weather = 'おおむね晴れ';
  } else if (weathercode == '3') {
    weathercode = '曇り';
  } else if (weathercode == '45' || weathercode == '48') {
    weather = '霧と霧氷の堆積';
  } else if (weathercode == '51') {
    weather = '軽い雨';
  } else if (weathercode == '53') {
    weather = '雨';
  } else if (weathercode == '55') {
    weather = '強めの雨'
  }

  // TODO LINEやGmailで送信する処理を実装
}
