import  { expect } from 'chai';
import request from 'supertest';
  import 'babel-polyfill';

   import app from '../app';

/* Default Mocha Test */

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});


