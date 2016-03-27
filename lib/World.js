/**
 * Defines the behaviour of the world.
 *
 * @author Mark Nelson
 * @copyright 2016 Mark Nelson
 * @license http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

var mg = mg || {};

mg.World = {

    platforms : '',

    /**
     * Load the assets we are going to use.
     *
     * @param {Phaser.Game} game
     */
    loadAssets : function(game) {
        game.load.image('background', 'assets/bg/forest.png');
        game.load.image('ground', 'assets/tiles/grass.png');
        game.load.spritesheet('wizard', 'assets/chars/wizard.png', 60, 64, 12);
        game.load.spritesheet('enemies', 'assets/chars/enemyspritesheet.png', 30, 32);
    },

    /**
     * Creates the world.
     *
     * @param {Phaser.Game} game
     */
    create : function(game) {
        // We're going to be using physics, so enable the Arcade Physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);

        // A simple background for our game.
        game.add.sprite(0, 0, 'background');

        // The platforms group contains the ground and the 2 ledges we can jump on.
        this.platforms = game.add.group();

        // Enable physics for this group.
        this.platforms.enableBody = true;

        // Create the objects belonging to this group.
        var ground = this.platforms.create(0, game.world.height - 64, 'ground');
        ground.scale.setTo(10, 0.5);
        ground.body.immovable = true;

        // Let's create two ledges.
        var ledge = this.platforms.create(480, 400, 'ground');
        ledge.scale.setTo(2.5, 0.5);
        ledge.body.immovable = true;

        var ledge2 = this.platforms.create(0, 250, 'ground');
        ledge2.scale.setTo(2.5, 0.5);
        ledge2.body.immovable = true;
    },

    /**
     * Adds collisions between the game world and an item.
     *
     * @param {Phaser.Game} game
     * @param {mg.Player/Monster} item
     */
    addCollision : function(game, item) {
        game.physics.arcade.collide(item, this.platforms);
    }
};
