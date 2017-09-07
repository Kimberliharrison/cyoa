module.exports = {
  'Demo test cyoa' : function (client) {
    client
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .assert.title('Google')
      .assert.visible('input[type=text]')
      .waitForElementVisible('body', 1000)
      .end();
  }
};