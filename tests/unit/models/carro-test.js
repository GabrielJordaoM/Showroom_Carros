import { setupTest } from 'showroom-carros/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | carro', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('carro', {});
    assert.ok(model, 'model exists');
  });
});
