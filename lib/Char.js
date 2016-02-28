/**
 * Defines the behaviour of the world.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * The player character.
 */
mg.Char = function(game) {

    /**
     * The game.
     */
    this.game = game;

    /**
     * The player character.
     */
    this.character = '';

    /**
     * Intialise common functionality between characters.
     *
     * @param {int} positionx
     * @param {int} positiony
     * @param {string} sprite
     */
    this.createCommon = function(positionx, positiony, sprite) {
        // The player and its settings.
        this.character = this.game.add.sprite(positionx, positiony, sprite);

        //  We need to enable physics on the player.
        this.game.physics.arcade.enable(this.character);

        //  Player physics properties.
        this.character.body.bounce.y = 0.2;
        this.character.body.gravity.y = 300;
        this.character.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        this.character.animations.add('left', [0, 1, 2, 3], 10, true);
        this.character.animations.add('right', [5, 6, 7, 8], 10, true);

        // Add controls for the player.
        this.controls = game.input.keyboard.createCursorKeys();
    }
}
