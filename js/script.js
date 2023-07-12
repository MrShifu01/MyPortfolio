function runTypingEffect () {
    const text = "I am Christian Stander."
    const typingElement = document.getElementById('typing-text')
    const typingDelay = 100

    typeText(text, typingElement, typingDelay)
}

function typeText (text, typingElement, typingDelay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text[i]
        }, typingDelay * i)
    }
}

document.addEventListener('DOMContentLoaded', runTypingEffect)