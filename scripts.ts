let rollCall: Array<Die>; = [];
let genBtn = document.getElementById('create');
let loop = document.getElementById('roll');

genBtn.addEventListener('click', function () {
    let d = new Die();
    rollCall.push(d);
});
loop.addEventListener('click', function () {
    for (let i = 0; i < rollCall.length; i++) {
        rollCall[i].roll();
    }
});
document.getElementById('sum').addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < rollCall.length; i++) {
        sum = sum + rollCall[i].value;
    }
    alert('The sum of the dice is ' + sum + '.');
});

class Die {
    div: HTMLDivElement;
    value: number;

    constructor() {
    this.div = document.createElement('div');
    this.div.className = 'dice';
    this.div.addEventListener('click', this.roll.bind(this))
    this.roll();
    document.body.appendChild(this.div);
}
roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    this.div.innerHTML = String(this.value);
}
}

