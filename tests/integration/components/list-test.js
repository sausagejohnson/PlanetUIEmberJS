import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders nothing on default or passed inner html', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<List />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <List>
        nothing to yield
      </List>
    `);

    assert.dom(this.element).hasText('');
  });
});
