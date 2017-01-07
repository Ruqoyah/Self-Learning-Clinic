'use strict'

var findMinMax = require('../app/MinMaxlab.js').findMinMax;

describe('Min-Max Numbers in a List: ', function () {

  describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

    it('should return [1,4] for [1, 2, 3 , 4]', function () {
      expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
    });

    it('should return [4, 6] for [6, 4]', function () {
      expect(findMinMax([6, 4])).toEqual([4, 6]);
    });

    it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
      expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
    });

  });

  describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

    it('should return [4] for [4, 4, 4, 4]', function () {
      expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
    });
    it('should return [5] for [5, 5, 5, 5]', function () {
      expect(findMinMax([5, 5, 5, 5])).toEqual([5]);
    });
    it('should return [6] for [6, 6, 6, 6]', function () {
      expect(findMinMax([6, 6, 6, 6])).toEqual([6]);
    });
    it('should return [7] for [7, 7, 7, 7]', function () {
      expect(findMinMax([7, 7, 7, 7])).toEqual([7]);
    });
    it('should return [8] for [8, 8, 8, 8]', function () {
      expect(findMinMax([8, 8, 8, 8])).toEqual([8]);
    });
    it('should return [9] for [9, 9, 9, 9]', function () {
      expect(findMinMax([9, 9, 9, 9])).toEqual([9]);
    });
    it('should return [10] for [10, 10, 10, 10]', function () {
      expect(findMinMax([10, 10, 10, 10])).toEqual([10]);
    });

  });

});
}