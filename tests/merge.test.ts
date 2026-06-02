import { merge } from '../src/merge';

describe('merge function', () => {
    it('should correctly merge and sort three collections', () => {
        const col1 = [1, 3, 5, 7, 9];
        const col2 = [10, 8, 6, 4, 2];
        const col3 = [0, 11, 15];

        const expected = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15];
        
        const actualResult = merge(col1, col2, col3);
        console.log("Merge Result:", actualResult);
        
        expect(actualResult).toEqual(expected);
    });

    it('should handle empty collections', () => {
        expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
        expect(merge([], [], [])).toEqual([]);
    });
});