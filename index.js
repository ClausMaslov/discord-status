const RPC = require('discord-rpc');
const http = require('http'); 
const client = new RPC.Client({ transport: 'ipc' });

const applicationId = '1373031533195038840'; 

const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('OK');
});
server.listen(process.env.PORT || 3000);

client.on('ready', () => {
    client.setActivity({
        // details: 'Играет в Minecraft 😊', // Добавил текст для статуса
        state: '', 
        startTimestamp: new Date(), 
        largeImageKey: 'plakat_bumazhnyy_minecraft_v_kino_pchela', 
        largeImageText: 'Сделал: Claus_Maslov :3',
        type: 0, 
    });
    console.log('Статус установлен!');
});

client.login({ clientId: applicationId }).catch(console.error);
