import selectBook from '../../actions/index';

describe('Select Book Action', () => {
    it('should create an action to select a book', () => {
        const book = 'Javascript: The Good Parts';
        const expectedAction = {
            type: 'BOOK_SELECTED',
            payload: book
        };
        expect(selectBook(book)).toEqual(expectedAction);
    });
});