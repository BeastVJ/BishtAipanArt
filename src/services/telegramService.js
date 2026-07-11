/**
 * Telegram Bot Notification Service
 * Sends order/contact notifications via Telegram Bot API
 */
const TELEGRAM_API_URL = 'https://api.telegram.org/bot';

const getConfig = () => {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    return { botToken, chatId };
};

export const sendTelegramNotification = async (message) => {
    const { botToken, chatId } = getConfig();

    if (!botToken || !chatId) {
        console.log('[Telegram] Not configured. Set VITE_TELEGRAM_BOT_TOKEN and VITE_TELEGRAM_CHAT_ID in .env');
        console.log('[Telegram] Would have sent:', message);
        return false;
    }

    try {
        const url = `${TELEGRAM_API_URL}${botToken}/sendMessage`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });
        const data = await response.json();
        if (!data.ok) {
            console.warn('[Telegram] API Error:', data.description);
            return false;
        }
        console.log('[Telegram] Notification sent successfully');
        return true;
    } catch (error) {
        console.warn('[Telegram] Failed to send:', error.message);
        return false;
    }
};

export const formatOrderMessage = (orderDetails) => {
    const { customerName, items, total, paymentMethod, phone, address, orderId } = orderDetails;
    const itemList = items
        .map((item) => `  \u2022 ${item.name} \u00d7 ${item.quantity} = \u20B9${(item.price * item.quantity).toLocaleString()}`)
        .join('\n');
    return [
        `\uD83D\uDED2 *NEW ORDER RECEIVED!*`,
        ``,
        `\uD83D\uDCCB *Order ID:* ${orderId || 'N/A'}`,
        `\uD83D\uDC64 *Customer:* ${customerName || 'N/A'}`,
        `\uD83D\uDCDE *Phone:* ${phone || 'N/A'}`,
        `\uD83D\uDCCD *Address:* ${address || 'N/A'}`,
        ``,
        `\uD83D\uDCE6 *Items:*`,
        itemList || '  N/A',
        ``,
        `\uD83D\uDCB0 *Total: \u20B9${(total || 0).toLocaleString()}*`,
        `\uD83D\uDCB3 *Payment:* ${paymentMethod || 'N/A'}`,
        ``,
        `\u23F0 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    ].join('\n');
};

export const formatContactMessage = (contactDetails) => {
    const { name, email, phone, subject, message } = contactDetails;
    return [
        `\u2709\uFE0F *NEW CONTACT MESSAGE*`,
        ``,
        `\uD83D\uDC64 *Name:* ${name || 'N/A'}`,
        `\uD83D\uDCE7 *Email:* ${email || 'N/A'}`,
        `\uD83D\uDCDE *Phone:* ${phone || 'N/A'}`,
        `\uD83D\uDCCC *Subject:* ${subject || 'N/A'}`,
        ``,
        `\uD83D\uDCAC *Message:*`,
        `${message || 'N/A'}`,
        ``,
        `\u23F0 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    ].join('\n');
};

export const formatCustomOrderMessage = (orderDetails) => {
    const { name, email, phone, artworkType, size, occasion, colorPreference, budget, description } = orderDetails;
    return [
        `\uD83C\uDFA8 *NEW CUSTOM ORDER REQUEST*`,
        ``,
        `\uD83D\uDC64 *Name:* ${name || 'N/A'}`,
        `\uD83D\uDCE7 *Email:* ${email || 'N/A'}`,
        `\uD83D\uDCDE *Phone:* ${phone || 'N/A'}`,
        ``,
        `\uD83D\uDDBC\uFE0F *Artwork:* ${artworkType ? artworkType.replace(/-/g, ' ') : 'N/A'}`,
        `\uD83D\uDCD0 *Size:* ${size || 'N/A'}`,
        `\uD83C\uDF89 *Occasion:* ${occasion || 'N/A'}`,
        `\uD83C\uDFA8 *Colors:* ${colorPreference || 'N/A'}`,
        `\uD83D\uDCB0 *Budget:* ${budget || 'N/A'}`,
        ``,
        `\uD83D\uDCAD *Description:*`,
        `${description || 'N/A'}`,
        ``,
        `\u23F0 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    ].join('\n');
};
