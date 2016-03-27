/**
 * Defines the behaviour of the player.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the player.
 *
 * @param {Phaser.Game} game
 */
mg.Player = function(game) {
   // Store the game.
   this.game = game;
   // Add controls for the player.
   this.controls = game.input.keyboard.createCursorKeys();
};
mg.Player.prototype = new mg.Char(this.game);

/**
 * Create the player.
 *
 * @param {int} positionx
 * @param {int} positiony
 * @param {string} sprite
 */
mg.Player.prototype.create = function(positionx, positiony, sprite) {
    this.char_create(positionx, positiony, sprite);

    // Decrease the size of the character.
    this.character.scale.setTo(0.8, 0.8);

    // Our two animations, walking left and right.
    this.character.animations.add('left', [3, 4, 5], 10, true);
    this.character.animations.add('right', [6, 7, 8], 10, true);
};

/**
 * Updates the player.
 */
mg.Player.prototype.update = function() {
    // Reset the players velocity.
    this.character.body.velocity.x = 0;

    if (this.controls.left.isDown) {
        // Move to the left.
        this.character.body.velocity.x = -150;
        this.character.animations.play('left');
    } else if (this.controls.right.isDown) {
        // Move to the right.
        this.character.body.velocity.x = 150;
        this.character.animations.play('right');
    } else {
        // Stand still.
        this.character.animations.stop();
    }

    // Allow the character to jump if they are touching the ground.
    if (this.controls.up.isDown && this.character.body.touching.down) {
        this.character.body.velocity.y = -350;
    }
};

