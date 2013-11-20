/**
 *
 * Copyright 2012 Adobe Systems Inc.;
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

/*global require, describe, it*/

var grunt = require('grunt'),
    assert = require('assert');

describe('Topcoat button', function() {
    'use strict';

    it('should output correct mobile light css', function() {
        var actual = grunt.file.read('css/mobile-light-button.css');
        var expected = grunt.file.read('test/expected/mobile-light-button.css');
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('mobile light should not have any unrendered variables', function() {
        var actual = grunt.file.read('css/mobile-light-button.css');
        assert.equal(actual.match(/var\([a-z-]*\)/), null, 'should not have missing vars');
    });


    it('should output correct mobile dark css', function() {
        var actual = grunt.file.read('css/mobile-dark-button.css');
        var expected = grunt.file.read('test/expected/mobile-dark-button.css');
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('mobile dark should not have any unrendered variables', function() {
        var actual = grunt.file.read('css/mobile-dark-button.css');
        assert.equal(actual.match(/var\([a-z-]*\)/), null, 'should not have missing vars');
    });

    it('should output correct desktop dark css', function() {
        var actual = grunt.file.read('css/desktop-dark-button.css');
        var expected = grunt.file.read('test/expected/desktop-dark-button.css');
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('desktop dark should not have any unrendered variables', function() {
        var actual = grunt.file.read('css/desktop-dark-button.css');
        assert.equal(actual.match(/var\([a-z-]*\)/), null, 'should not have missing vars');
    });


    it('should output correct desktop light css', function() {
        var actual = grunt.file.read('css/desktop-light-button.css');
        var expected = grunt.file.read('test/expected/desktop-light-button.css');
        assert.equal(actual, expected, 'should generate correct css');
    });

    it('desktop light should not have any unrendered variables', function() {
        var actual = grunt.file.read('css/desktop-light-button.css');
        assert.equal(actual.match(/var\([a-z-]*\)/), null, 'should not have missing vars');
    });

});

