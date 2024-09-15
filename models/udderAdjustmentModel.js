const { updateUdderCount } = require('./cowModel');

// 5% chance to reduce udder count after milking
function milkCow(cow, callback) {
    if (cow.udder_count === 4 && Math.random() < 0.05) {
        const newUdderCount = cow.udder_count - 1;
        updateUdderCount(cow.id, newUdderCount, callback);
    } else {
        callback(null, cow); // No udder reduction
    }
}

// 20% chance to restore 3-udder cow to 4 udders
function restoreUdder(cow, callback) {
    if (cow.udder_count === 3 && Math.random() < 0.20) {
        const newUdderCount = 4;
        updateUdderCount(cow.id, newUdderCount, callback);
    } else {
        callback(null, cow); // No udder change
    }
}

module.exports = { milkCow, restoreUdder };
