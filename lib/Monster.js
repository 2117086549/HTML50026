/**
 * Defines the behaviour of the monster.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the Monster.
 *
 * @param {Phaser.Game} game
 */
mg.Monster = function(game) {
    this.game = game;
};
mg.Monster.prototype = new mg.Char(this.game);

/**
 * Create the monster
 *
 * @param {int} positionx
 * @param {int} positiony
 * @param {string} sprite
 */
mg.Monster.prototype.create = function(positionx, positiony, sprite) {
    this.char_create(positionx, positiony, sprite);

    // Increase the size of the monster.
    this.character.scale.setTo(1.5, 1.5);
};
