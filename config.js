const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	anto: 'https://hardianto.xyz',
    zenz: 'https://zenzapis.xyz',
}


// Apikey Website Api
global.APIKeys = {
        'https://hardianto.xyz': 'hardianto',
        'https://zenzapis.xyz': '7d1e10e532', //Untuk Mendapatkan Apikey Silahkan Register Di : https://zenzapi.xyz
        
}


// Other
global.Prefix = 'Multi'
global.modelMenu = 'locButton'
global.owner = ['628815952469']
global.premium = ['628815952469']
global.meki = '628815952469'
global.ownerNumber = '628815952469'
global.packname = 'Sabo'
global.author = 'Sabo - MD'
global.sessionName = 'sessions'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.Mode = 'Public'
global.mess = {
    success: '*_Done Deck_*',
    admin: '*_Khusus Admin Deck, Lu Siapa? Member Soker_*',
    botAdmin: '*_Hadeh Mikir Dong Deck, Bot Ga Admin_*',
    owner: '*_Lu Siapa? Lu Bukan Owner Gw Gausah So Keras Deck_*',
    group: '*_Cuman Bisa Di Group Deck_*',
    private: '*_Cuman Bisa Di Private Chat Deck_*',
    bot: '*_Cuman Bisa Digunain Pengguna Bot_*',
    wait: '*_Bentar Deck_*',
    done: '*_Done Deck_*',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject'
,
    example2: 'Good Bye @user Di Group @subject', 
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12'
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
global.thumb = fs.readFileSync('./media/zyy.jpg')
global.pathImg = fs.readFileSync('./media/gambar.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
