// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

// Use Mongoose library

import mongoose from "mongoose";

type DuplicatedUsers = {
    email: string
}

async function manageUsers(): Promise<DuplicatedUsers[]> {
    const mongoose = require('mongoose');
    const { Schema, model } = mongoose;

    const userSchema = new Schema({
        name: { type: String, required: true },
        email: { type: String, required: true },
    });

    const UserModel = model('User', userSchema);

    await mongoose.connect('mongodb://127.0.0.1:27017/my_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // Добавление пользователей
    const usersToAdd = [
        { name: 'Ayan', email: 'ayan@example.com' },
        { name: 'Agytai', email: 'agyt@example.com' },
        { name: 'Mukhtar', email: 'muha@example.com' }, // Дубликат email
    ];
    await UserModel.insertMany(usersToAdd);

    // Поиск дублирующихся email
    const duplicatedEmails = await UserModel.aggregate([
        { $group: { _id: '$email', count: { $sum: 1 } } },
        { $match: { count: { $gt: 1 } } },
        { $project: { email: '$_id', _id: 0 } },
    ]);

    await mongoose.connection.close();

    return duplicatedEmails;

    return []
}

module.exports = { manageUsers }