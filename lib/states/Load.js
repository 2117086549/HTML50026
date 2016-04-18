/**
 * Handles loading assets used by the game.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

mg.Load = function() { };

/**
 * Load the assets we are going to use.
 */
mg.Load.prototype.preload = function() {
    this.game.load.image('background', 'assets/bg/forest.png');
    this.game.load.image('ground', 'assets/tiles/grass.png');
    this.game.load.spritesheet('wizard', 'assets/chars/wizard.png', 60, 64, 12);
    this.game.load.spritesheet('enemies', 'assets/chars/enemies.png', 30, 32);
};

/**
 * Define the game environment.
 */
mg.Load.prototype.create = function() {
    // Loading screen will have a white background.
    this.game.stage.backgroundColor = '#FFF';
    // Scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // Have the game centered horizontally.
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    // Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    // Move to the next state.
    this.state.start('Game');
};
