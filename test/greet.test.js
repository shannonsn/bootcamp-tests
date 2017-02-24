var assert = chai.assert

describe('The greet function', function(){

    it('should greet Janine correctly', function(){
        assert.equal(greet('Janine'),"Hello, Janine");
    });

});
