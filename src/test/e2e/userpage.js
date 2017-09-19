module.exports = {
  'Test CYOA': function(browser) {
    browser
      .url('https://navigator-night-56630.netlify.com/User')
      .waitForElementVisible('body', 1000)
      .assert.title('Choose-Your-Own-Adventure')
      .waitForElementVisible('body', 1000)
      .end();
  }
};
