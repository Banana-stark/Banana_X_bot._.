import connectToWhatsapp from './Banana_X_bot._./crew.js'
import handleIncomingMessage from './events/messageHandler.js'

(async() => {
    await connectToWhatsapp(handleIncomingMessage)
        console.log('established !')
})()