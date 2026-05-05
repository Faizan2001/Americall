import assert from 'node:assert/strict';
import { getNextSnapIndex, getSnapOffset, normalizeSnapIndex } from '../src/utils/carouselState.mjs';

assert.equal(normalizeSnapIndex(0, 4), 0, 'keeps the first index');
assert.equal(normalizeSnapIndex(5, 4), 1, 'wraps overflowing indexes');
assert.equal(normalizeSnapIndex(-1, 4), 3, 'wraps negative indexes');
assert.equal(getNextSnapIndex(0, 4), 1, 'advances to the next card');
assert.equal(getNextSnapIndex(3, 4), 0, 'loops from the final card to the first');
assert.equal(getSnapOffset(2, 320), 640, 'calculates the scroll offset for snap tracks');

console.log('carousel state helpers pass');
