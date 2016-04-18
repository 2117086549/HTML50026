/**
 * Parent class of all the characters in the game.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the character.
 *
 * @constructor
 */
mg.CharBase = function(game) {
    this.game = game;
};

/**
 * Initialise common functionality between characters.
 *
 * @param {int} positionx
 * @param {int} positiony
 * @param {string} sprite
 */
mg.CharBase.prototype.create = function(positionx, positiony, sprite) {
    // The character and it's settings.
    this.character = this.game.add.sprite(positionx, positiony, sprite);

    // We need to enable physics on the character.
    this.game.physics.arcade.enable(this.character);

    // Character physics properties.
    this.character.body.bounce.y = 0.2;
    this.character.body.gravity.y = 300;
    this.character.body.collideWorldBounds = true;
};
