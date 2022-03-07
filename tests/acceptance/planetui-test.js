import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | planetui', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /favourites', async function (assert) {
    await visit('/favourites');

    assert.strictEqual(currentURL(), '/favourites');
    assert.dom('.favourites').hasText('No favourites yet.');
  });

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('.list').isVisible();
    assert.dom('.details').isVisible();
  });
});
