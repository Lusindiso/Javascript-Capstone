import commentsCounter from '../module/commentsCounter.js';

describe('Returns number of the comments from the api', () => {
  it('returns 0 if the comments array is empty', () => {
    const comments = [];
    expect(commentsCounter(comments)).toBe(0);
  });

  it('returns the number of comments in the list', () => {
    const comments = [{
      name: 'John',
      comment: 'This is a comment',
    },
    {
      name: 'Jane',
      comment: 'This is a comment',
    },
    {
      name: 'John',
      comment: 'This is a comment',
    },
    ];
    expect(commentsCounter(comments)).toBe(3);
  });
});