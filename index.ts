const crypticTyping = (text: string, callback: (newText: string) => void, timeout: number) => {
    let finalText: string = ''
    const cryptic: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const random = () => cryptic[Math.floor(Math.random() * cryptic.length)]
    for(let i = 0; i < text.length ; i++) {
        setTimeout(()=> {
            const current = text[i]
            const randomCryptic = random() + random() + random() + random() + random()
            const remaining = text.length - i - 1
            finalText = finalText + current 
            const newText = finalText + 
            randomCryptic
                .slice(0,randomCryptic.length > remaining ? remaining % randomCryptic.length : randomCryptic.length
            )
            callback(newText)
        }, timeout * i, i)
    }
}

export { crypticTyping }




