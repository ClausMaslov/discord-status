const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });

const applicationId = '1373031533195038840'; 

client.on('ready', () => {
    client.setActivity({
        // details: 'Играет в Minecraft 😊', 
        // state: '', 
        startTimestamp: new Date(), 
        largeImageKey: 'plakat_bumazhnyy_minecraft_v_kino_pchela', 
        largeImageText: 'Сделал: Claus_Maslov :3',
		type: 3,
    });
    console.log('Статус установлен!');
});

client.login({ clientId: applicationId }).catch(console.error);