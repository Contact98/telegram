var TelegramBot = require('node-telegram-bot-api');

var token = '389470588:AAGS-8jQGNlSTsPKyfSMcxf0CtQLswDCaTY';
// Setup polling way
var bot = new TelegramBot(token, {polling: true});

bot.onText(/\/insult/, function(msg, match) {
  var fromId = msg.from.id;
  var insults = ["Dumbass", "Out of 100,000 sperm, you were the fastest?", "Look, you aint funny. Your life is just a joke."];
  var chosenInsult = insults[Math.floor(Math.random() * insults.length)];
  bot.sendMessage(fromId, chosenInsult);
});

bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "This spectacular bot just have one single command.\n/insult - Insult you.");
});
bot.onText(/\/quiz/, function(msg, match) {
  var text = 'What is the word for "one" in Spanish?';
 
  // JSON object that contains custom reply markup
  var keyboard = {
      reply_markup: JSON.stringify({
        keyboard: [
          ['Uno'],
          ['Dos'],
          ['Tres'],
          ['Cuatro']
        ]
      })
  };
 
  bot.sendMessage(msg.chat.id, text, keyboard);
});
