import { module, test } from 'qunit';
import { setupTest } from 'showroom-carros/tests/helpers';

module('Unit | Controller | cadastro', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:cadastro');
    assert.ok(controller);
  });
});
