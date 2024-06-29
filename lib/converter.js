//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                 Maldii-𝐌𝐃    𝐁𝐎𝐓                                                //
//                                                                                                      // 
//                                         Ｖ：3.0                                                      // 
//                                                                                                      // 
//                                                                                              // 
//              ██       ██      ██      █    █       ███████████                                   //
//              ██ █   █ ██     █  █     █  █        █     █      █                                  //
//              ██   █   ██    █    █    █ █                █                                         //
//              ██       ██   ███████   █   █              █                                         //
//              ██╔      ██  █        █  █    █       ██████//
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
 //  * @project_name : Maldii-MD
 //  * @author : Maldives mak
 //  * @youtube : https://youtube.com/@maldivesmak?si=nkKrEkEkx7L_tQ7p
//   * @description :maldii ,A Multi-functional whatsapp user bot.
//*
//* 
//base by vinta 
//re-upload? recode? copy code? give credit ya :)
//Instagram: unicorn_xeon13
//Telegram: t.me/Official_Maldives
//GitHub: @Maldii14
//WhatsApp: +254758732775
//want more free bot scripts? subscribe to my youtube channel: https://youtube.com/@maldivesmak?si=nkKrEkEkx7L_tQ7p
//   * Created By Github: Vinta.
//   * Credit To vinta
//   * © 2024 maldii-MD.
// ⛥┌┤
// */

const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, '../src', + new Date + '.' + ext)
      let out = tmp + '.' + ext2
      await fs.promises.writeFile(tmp, buffer)
      spawn('ffmpeg', [
        '-y',
        '-i', tmp,
        ...args,
        out
      ])
        .on('error', reject)
        .on('close', async (code) => {
          try {
            await fs.promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve(await fs.promises.readFile(out))
            await fs.promises.unlink(out)
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '2',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'mp3'
  ], ext, 'mp3')
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
