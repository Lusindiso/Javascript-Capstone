import itemsCounter from '../module/itemsCounter.js';

describe('Returns number of items on the fetched from the api', () => {
  it('returns 0 if the meals array is empty', () => {
    const items = [];
    expect(itemsCounter(items)).toBe(0);
  });

  it('returns the number of items in the list', () => {
    const items = [
      {
        strMeal: 'Beef Bourguignon',
        idMeal: '52904',
      },
      {
        strMeal: 'Beef Brisket Pot Roast',
        idMeal: '52812',
      },
      {
        strMeal: 'Beef Dumpling Stew',
        idMeal: '52873',
      },
    ];
    expect(itemsCounter(items)).toBe(3);
  });
});