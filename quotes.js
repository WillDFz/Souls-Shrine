// Atualiza quotes 
function atualizaQuotes() {

    let quote = document.querySelector(".quote");

    let standardQuotes = ["You know the first rule in combat? shoot them before they shoot you.",
        "The past is the past and the future is the future. A man is a man and a woman is a woman. The present is the present. I am who I am and you are who you are. That’s all there is to it. Does it really matter? Or do we just think it does?",
        "They often say that humans can’t live alone. But you can live pretty long by yourself. Instead of feeling alone in a group, it’s better to be alone in your solitude.",
        "The souls that God has given us, our spirits. Our spirits, which found a way to swim through the immense network and live in the infinity of space. Is not the human body a mere shell? A form of existence all too small and weak for consciousness with such vast reach and potential.",
        "I have no fear of death. It just means dreaming in silence. A dream that lasts for eternity.",
        "No one can draw a clear line between sane and insane. You move that line as you see fit for yourself. No one else can. You’ll understand soon… that the one that’s insane is this world.",
        "Men always seem to think about their past before they die, as though they were frantically searching for proof that they truly lived.",
        "Everything has a beginning and an end. Life is just a cycle of starts and stops. There are ends we don’t desire, but they’re inevitable. We have to face them. It’s what being human is all about.",
        "Angels banished from heaven have no choice but to become devils.",
        "I felt like I was watching a dream I'd never wake up from. Before I knew it, the dream was all over.",
        "Easy Come, Easy Go...",
        "Life is but a dream...",
        "You're gonna carry that weight.",
        "Man is an individual only because of his intangible memory. But memory cannot be defined, yet it defines mankind.",
        "All things change in a dynamic environment. Your effort to remain what you are is what limits you.",
        "I guess once you start doubting, there's no end to it.",
        "I feel confined, only free to expand myself within boundaries.",
        "Any way you look at it, all the information that a person accumulates in a lifetime is just a drop in the bucket.",
        "I guess cyborgs like myself have a tendency to be paranoid about our origins.",
        "What if a cyber brain could possibly generate its own ghost, create a soul all by itself? And if it did, just what would be the importance of being human then?",
        "There's nothing sadder than a puppet without a ghost, especially the kind with red blood running through them."
    ];
    let randomNumber = Math.floor(Math.random() * standardQuotes.length);

    quote.innerText = standardQuotes[randomNumber];

}
setTimeout(atualizaQuotes(), 45000);