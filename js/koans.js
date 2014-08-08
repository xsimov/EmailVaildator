context = describe;

describe("Camouflaged email converter", function() {
  it("converts a camuflaged email", function() {
    expect(converter('holaATgmail.com')).toBe('hola@gmail.com');
    expect(converter('holaATgmailDOTcom')).toBe('hola@gmail.com');
    expect(converter('hola@gmailDOTcom')).toBe('hola@gmail.com');
  });

  it("does not change the input when the format is incorrect", function() {
    expect(converter('holaATgmailcom')).toBe('holaATgmailcom');
    expect(converter('ATgmail.com')).toBe('ATgmail.com');
    expect(converter('gmail.comAT')).toBe('gmail.comAT');
    expect(converter('.holaATgmailcom')).toBe('.holaATgmailcom');
    expect(converter('gmailATcom.')).toBe('gmailATcom.');
    expect(converter('gm@ilDOT')).toBe('gm@ilDOT');
    expect(converter('gmailDOT@')).toBe('gmailDOT@');
    expect(converter('gm.ailATgmailcom')).toBe('gm.ailATgmailcom');
    expect(converter('oscar.xavierATgmail.com')).toBe('oscar.xavier@gmail.com');
  });


  it("returns a valid email if format was correct", function(){

    the_user_puts_some_input('ruruATgmail.com');

    the_user_asks_for_the_conversion();

    the_app_outputs_the_result('ruru@gmail.com');

  });

});