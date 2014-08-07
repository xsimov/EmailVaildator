context = describe;

describe("the email parser", function(){

  describe("has a function called detector that", function(){
    it("searches for the string 'at' ", function(){
      expect(detector("blatblahblah")).toBeTruthy();
    });

    it("searches for the string 'AT' ", function(){
      expect(detector("blATblahblah")).toBeTruthy();
    });
  })



});