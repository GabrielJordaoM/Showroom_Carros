import { module, test } from 'qunit';
import { setupTest } from 'showroom-carros/tests/helpers';

module('Unit | Route | carros', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:carros');
    assert.ok(route);
  });
});
