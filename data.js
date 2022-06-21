import axios from 'axios'

export default async (event) => {
  try {
    const { data } = await axios.get('https://ws.kinmen.gov.tw/001/Upload/0/relfile/0/0/f0885f5d-b993-43de-9bb6-8c3c0dc45281.json')
    const idx = data.findIndex(item => item.CName === event.message.text)
    if (idx > -1) {
      event.reply([
        {
          type: 'text',
          text: `${data[idx].CName}
連絡電話: ${data[idx].Tel}
營業時間: ${data[idx].Opentime}
景點介紹: ${data[idx].CToldescribe}`
        },
        {
          type: 'location',
          title: data[idx].CName,
          address: data[idx].CAdd,
          latitude: data[idx].Py,
          longitude: data[idx].Px
        },
        {
          type: 'text',
          text: data[idx].Website
        }
      ])
    } else {
      event.reply('查無資料  請確認輸入內容')
    }
  } catch (error) {
    console.log(error)
  }
}
