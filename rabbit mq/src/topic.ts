import amqp = require('amqplib/callback_api');

amqp.connect({
    protocol: 'amqp',
    hostname: 'localhost',
    port: 5673,
    username: 'guest',
    password: 'guest'
}, function (error, connection) {
    if (error) {
        throw error;
    }

    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        const exchange='backend-exchange';
        channel.assertExchange(exchange,"topic",{
            durable:false
        });
        const queue1 = 'mar';
        const queue2 = 'cielo';
        const queue3 = 'tierra';
        const queue4 = 'animales';

        const message1 = 'Pez';
        const message2 = 'Ave';
        const message3 = 'Caballo';

        const key1='animales.mar';
        const key2='animales.cielo';
        const key3='animales.tierra';
        const key4='animales.*';

        channel.assertQueue(queue1,{
            durable:false
        });
        channel.assertQueue(queue2,{
            durable:false
        });
        channel.assertQueue(queue3,{
            durable:false
        });
        //channel.bindQueue(queue1, exchange, key4);
        //channel.bindQueue(queue2, exchange, key1);
        //channel.bindQueue(queue3, exchange, key2);

        channel.publish(exchange,key4,Buffer.from(message1));
        console.log(" [x] Sent %s:'%s'", key1, message1);
       // channel.publish(exchange,key2,Buffer.from(message2));
        console.log(" [x] Sent %s:'%s'", key2, message2);
       // channel.publish(exchange,key3,Buffer.from(message3));
        console.log(" [x] Sent %s:'%s'", key3, message3);

    });
    setTimeout(function(){
        connection.close();
        process.exit(0);
    },500);
});