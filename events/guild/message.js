const fetch = require("node-fetch").default;

module.exports = (Discord, client, message) => {
  const prefix = process.env.PREFIX;

  if (message.channel.name === "chat-with-the-bot") {
    if (message.author.bot) return;
    fetch(`
        https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
      .then((response) => response.json())
      .then((data) => {
        message.channel.send(data.response);
      });
  }

  if (message.channel.id === "890340387531673610") {
    if (message.author.bot) return;
    fetch(`
        https://api.monkedev.com/fun/chat?msg=${message.content}&uid=${message.author.id}`)
      .then((response) => response.json())
      .then((data) => {
        message.channel.send(data.response);
      });
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const cmd = args.shift().toLowerCase();

  const command =
    client.commands.get(cmd) ||
    client.commands.find((a) => a.aliases && a.aliases.includes(cmd));

  if (command) command.execute(client, message, args, cmd, Discord);
};
