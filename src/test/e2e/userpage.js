
module.exports = {
  'Demo test cyoa' : function (client) {
    client
      .url('https://navigator-night-56630.netlify.com/User')
      .waitForElementVisible('body', 1000)
      .assert.title('Choose-Your-Own-Adventure')
      // .assert.visible('')
      .waitForElementVisible('body', 1000)
      .end();
  }
};

