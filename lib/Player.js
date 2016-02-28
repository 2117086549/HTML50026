/**
 * Defines the behaviour of the world.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Intialise the player.
 *
 * @param {Phaser.Game} game
 */
mg.Player = function(game) {

    /*
     * Call parent constructor.
     */
    mg.Char.call(this, game);

    /**
     * The cursors.
     */
    this.controls = '';

    /**
     * Intialise the player.
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

        // Add controls for the player.
        this.controls = game.input.keyboard.createCursorKeys();
    }

    /**
     * Updates the player.
     */
    this.update = function() {
        // Reset the players velocity (movement)
        this.character.body.velocity.x = 0;

        if (this.controls.left.isDown) {
            //  Move to the left
            this.character.body.velocity.x = -150;
            this.character.animations.play('left');
        } else if (this.controls.right.isDown) {
            //  Move to the right
            this.character.body.velocity.x = 150;
            this.character.animations.play('right');
        } else {
            //  Stand still
            this.character.animations.stop();
            this.character.frame = 4;
        }

        //  Allow the this.character to jump if they are touching the ground.
        if (this.controls.up.isDown && this.character.body.touching.down) {
            this.character.body.velocity.y = -350;
        }
    }
};
mg.Player.prototype = Object.create(mg.Char.prototype);
