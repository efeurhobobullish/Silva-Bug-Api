require("./doc/module.js")

global.prefix = ['','!','.',',','#','/']
global.owner = ['2349014277524']
global.ownMain = '2349014277524'
global.NamaOwner = '🦋🦋silva' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = 'X-EndPoint' //
global.author = '🦋🦋silva' //
global.packname = '🦋🦋silva' //
global.url1 = 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v' //
global.url2 = 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v' //
global.linkgc = 'https://whatsapp.com/channel/0029VaAkETLLY6d8qhLmZt2v'
global.delayjpm = 3500
 





let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
