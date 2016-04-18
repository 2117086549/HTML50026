/**
 * Parent class of all the enemies in the game.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

/**
 * Initialise the enemy.
 *
 * @param game
 * @constructor
 */
mg.Enemy = function(game) {
    // Store the game.
    this.game = game;

    // Call parent constructor.
    mg.CharBase.prototype.constructor.apply(this, arguments);
};
mg.Enemy.prototype = Object.create(mg.CharBase.prototype);

/**
 * Updates the Enemy.
 */
mg.Enemy.prototype.update = function() {
    if (this.needsToTurn()) {
        if (this.character.animations.currentAnim.name == 'left') {
            // Move to the right.
            this.character.body.velocity.x = 150;
            this.character.animations.play('right');
        } else {
            // Move to the left.
            this.character.body.velocity.x = -150;
            this.character.animations.play('left');
        }
    }
};

/**
 * Checks if we need to turn around.
 */
mg.Enemy.prototype.needsToTurn = function() {
    // Check if they have hit the left side of the screen.
    if (this.character.position.x <= 0) {
        this.character.position.x = 1;
        return true;
    }

    // Check if they hit the right side of the screen.
    if (this.character.position.x + this.character.width >= this.game.world.bounds.width) {
        this.character.position.x = this.game.world.bounds.width - this.character.width - 1;
        return true;
    }

    return false;
};
