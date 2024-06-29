//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 Maldives-𝐌𝐃    𝐁𝐎𝐓                                                  //
//                                                                                                      // 
//                                         Ｖ：3.0                                                       // 
//                                                                                                      // 
//              ██       ██      ██      █    █       ███████████                                   //
//              ██ █   █ ██     █  █     █  █        █     █      █                                  //
//              ██   █   ██    █    █    █ █                █                                         //
//              ██       ██   ███████   █   █              █                                         //
//              ██╔      ██  █        █  █    █       ██████                                         //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : Mak j
 //  * @author : Maldivesmm
 //  * @youtube : https://youtube.com/@maldivesmak?si=nkKrEkEkx7L_tQ7p
//   * @description : Mak j ,A Multi-functional Baileys whatsapp  bot.
//*
//* 
//base by Vinta v
//re-upload? recode? copy code? give credit ya :)
//Instagram: Maldives_mak
//Telegram: t.me/Official_Maldives
//GitHub: @Maldii14
//WhatsApp: +254758732775
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@maldivesmak?si=nkKrEkEkx7L_tQ7p
//   * Created By Github: M.M MALDIVES.
//   * Credit To Vinta
//   * © 2024 MALDII-MD.
// ⛥┌┤
// */

async function dBinary(str) {
var newBin = str.split(" ")
var binCode = []
for (i = 0; i < newBin.length; i++) {
    binCode.push(String.fromCharCode(parseInt(newBin[i], 2)))
  }
return binCode.join("")
}

async function eBinary(str = ''){    
let res = ''
res = str.split('').map(char => {       
return char.charCodeAt(0).toString(2);  
 }).join(' ')
return res
}

module.exports = { dBinary, eBinary }
