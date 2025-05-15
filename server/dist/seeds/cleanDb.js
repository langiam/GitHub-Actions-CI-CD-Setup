import models from '../models/index.js';
import db from '../config/connection.js';
export default async function cleanDb(modelName, collectionName) {
    const model = models[modelName];
    if (!model) {
        throw new Error(`Model "${modelName}" not found in models/index.js`);
    }
    const mongooseConn = db;
    if (!mongooseConn.db) {
        throw new Error('Database connection is not ready');
    }
    const existing = await mongooseConn.db
        .listCollections({ name: collectionName })
        .toArray();
    if (existing.length > 0) {
        await mongooseConn.db.dropCollection(collectionName);
    }
}
