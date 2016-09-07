var assert = require('assert');
var fs = require('fs');

function read(file) {
    return fs.readFileSync(file, 'utf8');
}

describe('Topcoat Button', function() {

    it('should create desktop dark', function() {
        console.log(require('../package.json').name)
        var actual = read('css/desktop-dark-button.css').trim();
        var expected = read('test/expected/desktop-dark-button.css').trim();
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('should create desktop light', function() {
        console.log(require('../package.json').name)
        var actual = read('css/desktop-light-button.css').trim();
        var expected = read('test/expected/desktop-light-button.css').trim();
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('should create mobile dark', function() {
        console.log(require('../package.json').name)
        var actual = read('css/mobile-dark-button.css').trim();
        var expected = read('test/expected/mobile-dark-button.css').trim();
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('should create mobile light', function() {
        console.log(require('../package.json').name)
        var actual = read('css/mobile-light-button.css').trim();
        var expected = read('test/expected/mobile-light-button.css').trim();
        assert.equal(actual, expected, 'should generate correct css');
    });

});
