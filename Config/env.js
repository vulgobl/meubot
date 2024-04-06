require('dotenv/config');

exports.env = {
    token: process.env.BOT_TOKEN,
    pixKey: process.env.PIX_KEY || "",
    pixQRCode: process.env.PIX_QRCODE || "",
    canal_logs: process.env.CHANEL_ID,
    categoria_carrinho: process.env.CARD_CATEGORY,
    cargo: process.env.ROLE,
    cargoperm: process.env.PERMISION_ROLE,
    termos: process.env.TERMS,
    owner: process.env.OWNER,
};