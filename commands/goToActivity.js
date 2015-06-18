/* @author: Prabuddha Chakraborty */

exports.command = function() {
var client = this;

client
    .moveToElement('#wp-admin-bar-my-account > a.ab-item',5,5)
    .pause(1000)
    .click('#wp-admin-bar-my-account-activity a.ab-item')
    .waitForElementVisible('body', 2500)
    .pause(2000)

return this;
};
