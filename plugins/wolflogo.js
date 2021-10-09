const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command*\n*command  king wolf logo by king dumiya bot"

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'wolf ?(.*)', fromMe: true,dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=RGNK&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.ALL })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'wolf ?(.*)', fromMe: false,dontAddCommandList: false }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var ttinullimage = await axios.get(`https://api.zeks.xyz/api/wolflogo?apikey=cjxJIn9eDletRHac3CG6CdvGxFH&text1=` + Config.ALL + `&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.ALL })

    }));
    
}
