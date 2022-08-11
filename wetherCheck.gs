function weatherCheck() {
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
  const clear_sky = 0;
  const mainly_clear = 1;
  const partly_cloudy = 2;
  const overcast = 3;
  const fog = 45;
  const depositing_rime_fog = 48;
  const light_drizzle = 51;
  const moderate_drizzle = 53;
  const dense_drizzle = 55;
  const slight_rain = 66;
  const moderate_rain = 63;
  const heavy_rain = 65;


  // TODO 条件分岐を追加する。
  // wheathercodeから天気を割り出す
  // 参照：(https://open-meteo.com/en/docs#api-documentation)
  let weather = '';

  switch (weathercode) {
    case clear_sky:
      weather === '快晴';
      break;
    case mainly_clear:
      weather === 'おおむね晴れ';
      break;
    case partly_cloudy:
      weather === '晴れときどき曇り';
      break;
    case overcast:
      weather = 'どんよりした天気';
      break;
    case fog:
      weather = '霧';
      break;
    case depositing_rime_fog:
      weather = '霧氷';
      break;
    case light_drizzle:
    case moderate_drizzle:
    case dense_drizzle:
      weather = '霧雨';
      break;
    case slight_rain:
      weather = '軽い雨';
      break;
    case moderate_rain:
      weather = '雨';
      break;
    case heavy_rain:
      weather = '強い雨';
      break;
    default:
      weather === '警告:ウェザーコードが登録されていません。';
  }

  const token = PropertiesService.getScriptProperties().getProperty('LINE_WHEATHER_CHECK')
  const lineNotifyApi = "https://notify-api.line.me/api/notify";
  const message = "明日の天気は「" + weather + '」';

  const options =
  {
    "method": "post",
    "payload": "message=" + message,
    "headers": { "Authorization": "Bearer " + token }
  };

  // FetchメソッドでLINEにメッセージを送信
  UrlFetchApp.fetch(lineNotifyApi, options);
}
