# benderjs-chai

[Chai](http://chaijs.com) assertions adapter for Bender.js

## Installation

```
npm install benderjs-chai
```

## Usage

Add `benderjs-chai` to the `plugins` array in your `bender.js` configuration file:

```javascript
var config = {
    applications: {...}

    browsers: [...],

    plugins: ['benderjs-chai'], // load the plugin

    tests: {...}
};

module.exports = config;
```

From now on [Chai APIs](http://chaijs.com/api/) - `should`, `assert` and `expect` - will be available in the global namespace of a test page.

## License

MIT, for license details see: [LICENSE.md](https://github.com/benderjs/benderjs-chai/blob/master/LICENSE.md).
