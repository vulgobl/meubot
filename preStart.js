const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const { env } = require('./Config/env');

function preStart() {
    const configFilePath = join(__dirname, 'DataBase', 'config.json');
    const jsonContent = JSON.parse(readFileSync(configFilePath));
    jsonContent['canal_logs'] = env.canal_logs;
    jsonContent['categoria_carrinho'] = env.categoria_carrinho;
    jsonContent['cargo'] = env.cargo;
    jsonContent['cargoperm'] = env.cargoperm;
    jsonContent['termos'] = env.termos;
    jsonContent['owner'] = env.owner;
    jsonContent.pix['chave_pix'] = env.pixKey;
    jsonContent.pix['qrcode'] = env.pixQRCode;
    writeFileSync(configFilePath, JSON.stringify(jsonContent))
}

module.exports = {
    preStart,
}