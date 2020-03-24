// Atualiza quotes 
function atualizaQuotes() {

    let quote = document.querySelector(".quote");

    let standardQuotes = ["A sword wields no strength unless the hands that holds it has courage.",
        "All things change in a dynamic environment. Your effort to remain what you are is what limits you.",
        "Angels banished from heaven have no choice but to become devils.",
        "Any way you look at it, all the information that a person accumulates in a lifetime is just a drop in the bucket.",
        "The past is the past and the future is the future. A man is a man and a woman is a woman. The present is the present. I am who I am and you are who you are. That’s all there is to it. Does it really matter? Or do we just think it does?",
        "They often say that humans can’t live alone. But you can live pretty long by yourself. Instead of feeling alone in a group, it’s better to be alone in your solitude.",
        "I have no fear of death. It just means dreaming in silence. A dream that lasts for eternity.",
        "No one can draw a clear line between sane and insane. You move that line as you see fit for yourself. No one else can. You’ll understand soon… that the one that’s insane is this world.",
        "Men always seem to think about their past before they die, as though they were frantically searching for proof that they truly lived.",
        "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable. We have to face them. It’s what being human is all about.",
        "I felt like I was watching a dream I'd never wake up from. Before I knew it, the dream was all over.",
        "Easy Come, Easy Go...",
        "Life is but a dream...",
        "Man is an individual only because of his intangible memory. But memory cannot be defined, yet it defines mankind.",
        "I guess once you start doubting, there's no end to it.",
        "I feel confined, only free to expand myself within boundaries.",
        "Evil around every corner - careful not to step in any.",
        "The right man in the wrong place can make all the difference in the world",
        "I used to be an adventurer like you, until I took an arrow to the knee.",
        "War. War never changes. But men do, through the roads they walk",
        "Why do you persist in your loneliness, human? Can you not see the glory of the mass?",
        "You're gonna carry that weight."
    ];
    let randomNumber = Math.floor(Math.random() * standardQuotes.length);

    quote.innerText = standardQuotes[randomNumber];
}
setTimeout(atualizaQuotes(), 45000);