/**
 * Defines the behaviour of the world.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Intialise the Monster.
 *
 * @param {Phaser.Game} game
 */
mg.Monster = function(game) {

    /*
     * Call parent constructor.
     */
    mg.Char.call(this, game);

    /**
     * Intialise the Monster.
     *
     * @param {int} positionx
     * @param {int} positiony
     * @param {string} sprite
     */
    this.create = function(positionx, positiony, sprite) {
        this.createCommon(positionx, positiony, sprite);

        //  Our two animations, walking left and right.
        this.character.animations.add('left', [0, 1, 2, 3], 10, true);
        this.character.animations.add('right', [5, 6, 7, 8], 10, true);

    }

    /**
     * Updates the Monster.
     */
    this.update = function() {

    }
};
mg.Monster.prototype = Object.create(mg.Char.prototype);
