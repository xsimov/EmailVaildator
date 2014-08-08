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
  });


});