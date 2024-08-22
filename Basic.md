# Is JavaScript single threaded or multi-threaded?
## JavaScript is a single thread language. This mean It has one call stack and one memory heap. As excpected , it executes code in order and must finish executing a piece code before moving onto the next. This is what allows JavaScript to be non-blocking and use async operations

## However, JavaScript also has asynchronous behaviour. This is what allow to use setTimeout, Ajax and promises. These functions are handled by the browser, not by javaScript itself. This is allow JavaScript to be non-blocking for main thread operations.