describe('should check my isWeekday function', function(){

    it('should check my isWeekday function', function(){
      assert.equal(isWeekday('Saturday'), false);
      assert.equal(isWeekday('Monday'), true);

    });

});
