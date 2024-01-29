var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    
    }
}

var game = new Phaser.Game(config);

var peixinho

function preload() {
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    // logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //peixe
    this.load.image('peixe', 'assets/peixes/peixinho_roxo.png');

    //peixedomal
    this.load.image('titulo', 'assets/PeixeDoMal-1-29-2024.png');
}

function create() {
    this.add.image(400,300, 'mar');

    // add logo
    this.add.image(400, 525, 'logo').setScale(0.5);

    // add peixe
    peixinho=this.add.image(400, 300, 'peixe');
    peixinho.setFlip(true, false);

    // add título
    this.add.image(400, 50, 'titulo').setScale(0.45);

}

function update() {

    // controle peixe
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}