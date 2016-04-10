/**
 * Defines the behaviour of the Mummy.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the Mummy.
 *
 * @param {Phaser.Game} game
 */
mg.Mummy = function(game) {
    this.game = game;
};
mg.Mummy.prototype = Object.create(mg.Enemy.prototype);

/**
 * Create the Mummy
 *
 * @param {int} positionx
 * @param {int} positiony
 * @param {string} sprite
 */
mg.Mummy.prototype.create = function(positionx, positiony, sprite) {
    this.char_create(positionx, positiony, sprite);

    // Increase the size of the Mummy.
    this.character.scale.setTo(1.5, 1.5);

    // Our two animations, walking left and right.
    this.character.animations.add('left', [12, 13, 14], 10, true);
    this.character.animations.add('right', [24, 25, 26], 10, true);

    // Move to the left.
    this.character.body.velocity.x = -150;
    this.character.animations.play('left');
};
