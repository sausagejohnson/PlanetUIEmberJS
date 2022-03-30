import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | favourites', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders no favourites when no favourites set', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Favourites />`);

    assert.dom(this.element).hasText('No favourites yet.');
  });

  test('it renders no favourites when inner html is passed in', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <Favourites>
        Random text
      </Favourites>
    `);

    assert.dom(this.element).hasText('No favourites yet.');
  });
});
