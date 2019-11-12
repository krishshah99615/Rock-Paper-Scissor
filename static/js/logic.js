
function game(choice) {
    const hc = choice.id;
    const bc = randomChoice();
    const result = res(hc, bc);
    const message = mes(result);
    frontendchange(hc, bc, message);

}
function randomChoice() {
    return ['rock', 'paper', 'scissor'][Math.floor(Math.random() * 3)];

}
function res(hc, bc) {
    const data = {
        'rock': { 'rock': 0.5, 'paper': 0, 'scissor': 1 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'rock': 0, 'paper': 1, 'scissor': 0.5 },
    }
    return [data[hc][bc], data[bc][hc]];
}
function mes([hc, bc]) {
    if (hc == 1) {
        return { 'message': 'You Won !', 'color': 'green' }
    }
    if (hc == 0.5) {
        return { 'message': 'Tie', 'color': 'blue' }
    }
    if (hc == 0) {
        return { 'message': 'You Lost !', 'color': 'red' }
    }
}
function frontendchange(hc, bc, message) {
    const data = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    };
    const bot = document.getElementById('bot');

    const human = document.getElementById('human');

    bot.src = data[bc];
    human.src = data[hc];

    const h2 = document.getElementById('final')
    h2.textContent = message.message;
    h2.style.color = message.color;




}