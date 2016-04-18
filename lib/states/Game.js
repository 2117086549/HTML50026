/**
 * Defines the behaviour of the game.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

mg.Game = function() { };
mg.Game.prototype.player = '';
mg.Game.prototype.platforms = [];
mg.Game.prototype.monsters = [];

/**
 * Creates the game world.
 */
mg.Game.prototype.create = function() {
    // A simple background for our this.game.
    this.game.add.sprite(0, 0, 'background');

    // The platforms group contains the ground and the 2 ledges we can jump on.
    this.platforms = this.game.add.group();

    // Enable physics for this group.
    this.platforms.enableBody = true;

    // Create the objects belonging to this group.
    var ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
    ground.scale.setTo(10, 0.5);
    ground.body.immovable = true;

    // Let's create two ledges.
    var ledge = this.platforms.create(0, 200, 'ground');
    ledge.scale.setTo(2.5, 0.5);
    ledge.body.immovable = true;

    var ledge2 = this.platforms.create(480, 350, 'ground');
    ledge2.scale.setTo(2.5, 0.5);
    ledge2.body.immovable = true;

    // Now let's create the player.
    this.player = new mg.Player(this.game);
    this.player.create(32, this.game.world.height - 110, 'wizard');

    // Now let's create some monsters.
    this.monsters.push(new mg.Mummy(this.game));
    var positionx = 32;
    var positiony = this.game.world.height - 470;
    this.monsters[0].create(positionx, positiony, 'enemies');

    this.monsters.push(new mg.Mummy(this.game));
    positionx = 600;
    positiony = this.game.world.height - 300;
    this.monsters[1].create(positionx, positiony, 'enemies');
};

/**
 * Handles updating the game.
 */
mg.Game.prototype.update = function() {
    // Collide the player and the monsters with the platforms.
    this.addCollision(this.game, this.player.character);
    for (var i = 0; i < this.monsters.length; i++) {
        this.addCollision(this.game, this.monsters[i].character);
        // Update the monster.
        this.monsters[i].update();
    }
    // Update the player.
    this.player.update();
};

/**
 * Adds collisions between the game world and an item.
 *
 * @param {Phaser.Game} game
 * @param {mg.Player/Enemy} item
 */
mg.Game.prototype.addCollision = function(game, item) {
    this.game.physics.arcade.collide(item, this.platforms);
};
