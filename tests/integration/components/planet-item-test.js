import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | planet-item', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders an empty planetitem when nothing passed', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<PlanetItem />`);

    assert.dom(this.element).hasText('');
  });

  test('it renders any content passed into planetitem', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`
      <PlanetItem>
        content to display
      </PlanetItem>
    `);

    assert.dom(this.element).hasText('content to display');
  });
});
