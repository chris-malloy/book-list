import reducer from '../../reducers/BookReducer';

describe('Book Reducer', () => {
    it('should return the inital state', () => {
        expect(reducer(undefined, {})).toEqual([
            { title: 'Javascript: The Good Parts' },
            { title: 'The Lord of the Rigns' },
            { title: 'Eragon' },
            { title: 'Brothers' }
        ])
    })
})