const mainEntry = require('../index');
const PKG_NAME = 'nucleus-integration-js-dessert';

const FRUIT_LIST = ['kiwi', 'banana', 'lemon'];

describe('simple unit testing', () => {
    it('should return version', () => {
        const packageVersion = mainEntry.getPackageVersion();
        expect(packageVersion).toBeDefined();
    });

    it('should return package name', () => {
        const packageName = mainEntry.getPackageName();
        expect(typeof packageName).toBe('string');
        expect(packageName).toBe(PKG_NAME);
    });

    it('should return package version', () => {
        const packageName = mainEntry.getPackageVersion();
        expect(typeof packageName).toBe('string');
        expect(packageName).toContain('.');
    });
});

describe('simple dessert testing', () => {
    it('should implement getMealType', () => {
        expect(mainEntry.getMealType).toBeDefined();
    });

    it('should implement getMealContent', () => {
        expect(mainEntry.getMealContent).toBeDefined();
    });

    it('should have fruits', () => {
        const mealContent = mainEntry.getMealContent();
        expect(mealContent).toBeDefined();
        expect(mealContent).toHaveLength(3);
        expect(mealContent.sort()).toEqual(FRUIT_LIST.sort());
    });
});