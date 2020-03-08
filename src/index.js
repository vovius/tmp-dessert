const path = require('path');
const fs = require('fs');

const KiwiPkg = require('@nucleus-integration/kiwi');
const LemonPkg = require('@nucleus-integration/lemon');
const BananaPkg = require('nucleus-integration-banana');

const MEAL = 'dessert';

function getPackage() {
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')));
}

function getPackageVersion() {
    return getPackage().version;
}

function getPackageName() {
    return getPackage().name;
}

function getMealType() {
    return MEAL;
}

function getMealContent() {
    return [
        KiwiPkg.getPackageFruit(),
        LemonPkg.getPackageFruit(),
        BananaPkg.getPackageFruit()
    ];
}

module.exports = {
    getPackageVersion,
    getPackageName,
    getPackage,
    getMealType,
    getMealContent
};