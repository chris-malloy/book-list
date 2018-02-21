# Book List

This simple app displays a list of books for a user to browse through.  It was created as part of Stephen Grider's React/Redux course to serve as a refresher on redux.

***

[Installation](https://github.com/chris-malloy/book-list#installation) | [Testing](https://github.com/chris-malloy/book-list#testing) | [Challenges and Solutions](https://github.com/chris-malloy/book-list#challenges-and-solutions) | [Code Snippets](https://github.com/chris-malloy/book-list#code-snippets) | [Acknowledgements](https://github.com/chris-malloy/book-list#acknowledgements)

***

## Installation

OS X & Linux:

```sh
npm install
```

## Testing

Snapshot testing is done with Jest which ships with React, but you can run the following command if you don't have it for some reason.

```sh
npm install --save-dev jest babel-jest babel-preset-env babel-preset-react react-test-renderer
```

Assertion testing for components and containers is done with Enzyme.

```sh
npm install --save-dev enzyme
npm install --save-dev enzyme-adapter-react-16
```

### Challenges and Solutions

Here are some of challenges I encountered along the way and how I went about solving them.

#### Testing Redux Elements

This project was my first experience testing actions, reducers and containers and it was a little bit challenging.

##### Reducer Tests

```javascript
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
```

The basic solution seems to compare weather the object the reducer returns is the same as it was before.  Since reducers can be designed to potentially return different state, this may prove problematic should the application grow, so I will need to research how to improve this test.

##### Action Tests

```javascript
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
```

This test appears to be effectively identical to the reducer tests. It will take the plain object calculated by the action and compare it will expectedAction.

##### Container Tests

I expected to use snapshot testing as I would with components, but this is not what the redux docs describe so I attempted to recreate their example.  They use assertion testing with Enzyme.  I did not get the test the work and will tinker with it and add it for a future update.

### Code Snippets

This snippet shows the standard redux syntax of wiring up the app.  

```javascript
function mapStateToProps(state){
    return{
        books: state.books
    }
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        selectBook
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
```

It looks like a lot, but after going through the process several times, it's pretty straightforward.

### Acknowledgements

Stephen Grider, thank you for the lesson.  It was a great way refined my knowledge of redux.
