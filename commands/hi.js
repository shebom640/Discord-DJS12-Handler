module.exports = {
    name: 'hi',
    description: 'This is a ping command',
    execute(client, message, args) {
        message.channel.send('hello');
    }
}