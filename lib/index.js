"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crypticTyping = (text, callback, timeout) => {
    let finalText = '';
    const cryptic = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const random = () => cryptic[Math.floor(Math.random() * cryptic.length)];
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            const current = text[i];
            const randomCryptic = random() + random() + random() + random() + random();
            const remaining = text.length - i - 1;
            finalText = finalText + current;
            const newText = finalText +
                randomCryptic
                    .slice(0, randomCryptic.length > remaining ? remaining % randomCryptic.length : randomCryptic.length);
            callback(newText);
        }, timeout ?? 50 * i, i);
    }
};
exports.default = { crypticTyping };
//# sourceMappingURL=index.js.map