/* # Exclusively from dumindu chathuranga 
# Do not use this fore any commercial thing
# If you abuse thais bot we wil kick you from bot 
# Do not edit (Respect to the Devaoloper) 
# All rights reserved Â©kingdumiyah 
# Get more about devaoloper wa.me/781307901
*/

const XTroid = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('ttp');
const Desk = "Temp logo pack\nතාවකාලික පින්තුර සාදනය\n\n╭┅💕 *.dmug*\n╭ *.dlove*\n╭┅💕 *.dnaru*\n╭┅💕 *.dgrass*\n╭┅💕 *.dsky*\n╭┅💕 *.dcof*\n╭┅💕 *.dneon*\n╭┅💕 *.dpubg*\n╭┅💕 *.dbit*\n```.dbit text1,text2```\n╭┅💕 *.dbt*\n```.dbt text1,text2```\n"


const os = require('os');
var clh = { cd: 'L3Jvb3QvWC1Ucm9pZC8=', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
if (os.userInfo().homedir !== clh.pay) return;

if (Config.WORKTYPE == 'private') {


    kingdumiyah.addCMD({ pattern: 'tpack ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));





    kingdumiyah.addCMD({ pattern: 'tmug ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tlove ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tnaru ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tgrass ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tsky ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tcof ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tneon ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));

    kingdumiyah.addCMD({ pattern: 'tpubg ?(.*)', fromMe: true,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);

        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})

    }));


    kingdumiyah.addCMD({pattern: 'tbit ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
        }));

        kingdumiyah.addCMD({pattern: 'tbt ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        
            }));




}


if (Config.WORKTYPE == 'public') {


    kingdumiyah.addCMD({ pattern: 'dpack ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
        await message.sendMessage(Desk);
        
    }));

    kingdumiyah.addCMD({ pattern: 'dmug ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/candlemug/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dlove ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/lovemsg/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dnaru ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/narutobanner/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dgrass ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/paperonglass/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dsky ?(.*)', fromMe: false,: dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/shadowtext/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dcof ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/coffeecup/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dneon1 ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/glowingneon/?text=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    kingdumiyah.addCMD({ pattern: 'dneon ?(.*)', fromMe: false,dontAddCommandList: true }, (async (message, match) => {
    
        if (match[1] === '') return await message.sendMessage(Lang.NEED_WORD);
    
        var lasiyasimg = await axios.get(`https://videfikri.com/api/textmaker/pubgmlogo/?text1=${encodeURIComponent(match[1])}&text2=X-Troid`, { responseType: 'arraybuffer' })
    
        await message.sendMessage(Buffer.from(lasiyasimg.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
    }));
    
    
    kingdumiyah.addCMD({pattern: 'dbit ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
        if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
      
      var topText, bottomText;
        if (match[1].includes(',')) {
            var split = match[1].split(',');
            bottomText = split[1];
            topText = split[0];
    }
    
        var webimage = await axios.get(`https://videfikri.com/api/textmaker/8bit/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
    
        await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
    
        }));
    
        kingdumiyah.addCMD({pattern: 'dbt ?(.*)', fromMe: false, dontAddCommandList: true}, (async (message, match) => {
    
            if (match[1] === '') return await message.client.sendMessage(message.jid,NEED_WORD);
          
          var topText, bottomText;
            if (match[1].includes(',')) {
                var split = match[1].split(',');
                bottomText = split[1];
                topText = split[0];
        }
        
            var webimage = await axios.get(`https://videfikri.com/api/textmaker/bf4/?text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
        
            await message.client.sendMessage(message.jid,Buffer.from(webimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: Config.CAPTION_KEY})
        
            }));
        }    
