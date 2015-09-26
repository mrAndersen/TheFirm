var Game = function(){
    var self = this;

    this.characters = {
        'clerkmen.walk': "Resources/Sources/ClerkmenAnimation/walk.png"
    };





    this.getAnimation = function(characterName,animationType){
        return self.characters[characterName + '.' + animationType];
    };





    this.load = function(callback){
        var queue = new createjs.LoadQueue(false);
        queue.loadManifest([
            self.characters['clerkmen.walk']
        ]);
        queue.on('complete',function(){
            console.log('Game loaded!');
            callback(self);
        });
    };

};