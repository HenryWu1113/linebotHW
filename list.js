import axios from 'axios'

const lists = []

export default async (event) => {
  try {
    const { data } = await axios.get('https://ws.kinmen.gov.tw/001/Upload/0/relfile/0/0/f0885f5d-b993-43de-9bb6-8c3c0dc45281.json')
    for (const d of data) {
      lists.push(d.CName)
    }
    const text = JSON.stringify(lists)
    const display = text.replace(/\"/gm, '').replace(/\[/gm, '').replace(/\]/gm, '')
    event.reply(`清單列表:
${display}`)
  } catch (error) {
    console.log(error)
  }
}
