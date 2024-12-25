// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library

import { createClient } from 'redis';

async function manageRedis(): Promise<void> {
    // Подключение к Redis
    const client = createClient();

    client.on('error', (err) => {
        console.error('Redis Client Error', err);
    });

    await client.connect();

    try {
        // Сохранение ключей и значений
        await client.set('key1', 'value1');
        await client.set('key2', 'value2');

        console.log('Keys and values saved successfully.');

        // Чтение и вывод значения по ключу
        const value = await client.get('key1');
        console.log(`Value for key1: ${value}`);
    } catch (error) {
        console.error('Error working with Redis:', error);
    } finally {
        // Закрытие соединения
        await client.disconnect();
    }
}

module.exports = { manageRedis };
