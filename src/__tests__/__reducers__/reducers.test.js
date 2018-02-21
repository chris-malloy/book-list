import BookReducer from '../../reducers/BookReducer';
import ActiveBookReducer from '../../reducers/ActiveBookReducer';

describe('reducers', () => {
    describe('BookListReducer', () => {
        it('should return the inital state', () => {
            expect(BookReducer(undefined, {})).toEqual([
                { title: 'Javascript: The Good Parts', pages: 43 },
                { title: 'The Lord of the Rings', pages: 100000 },
                { title: 'Eragon', pages: 405 },
                { title: 'Brothers', pages: 378 }
            ])
        })
    })

    describe('ActiveBookReducer', () => {
        it('should return updated state', () => {
            expect(ActiveBookReducer(undefined, {})).toEqual(null)
        })
    })
})