//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 𝐗𝐋𝐈𝐂𝐎𝐍-𝐕𝟑-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      // 
//                                         Ｖ：3.0                                                      // 
//                                                                                        // 
//              ██       ██      ██      █    █       ███████████                                   //
//              ██ █   █ ██     █  █     █  █        █     █      █                                  //
//              ██   █   ██    █    █    █ █                █                                         //
//              ██       ██   ███████   █   █              █                                         //
//              ██╔      ██  █        █  █    █       ██████
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : Maldii-MD
 //  * @author : Maldivesmak
 //  * @youtube : https://youtube.com/@maldivesmak?si=nkKrEkEkx7L_tQ7p
//   * @description : Maldii md,A Multi-functional  bailey whatsapp bot.
//*
//* 
//base by Vinta v
//re-upload? recode? copy code? give credit ya :)
//Instagram: Maldives_mak
//Telegram: t.me/Official_Maldives
//GitHub: @Maldii14
//WhatsApp: +254758732775
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@maldivesmak?si=nkKrEkEkx7L_tQ7p
//   * Created By Github: vintav.
//   * Credit To vinta
//   * © 2024 Maldii-MD.
// ⛥┌┤
// */

const chalk = require('chalk')
const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}
module.exports = {
	color,
	bgcolor
}
