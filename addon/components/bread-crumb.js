import Ember from 'ember';
import layout from '../templates/components/bread-crumb';
import computed from 'ember-new-computed';

const {
  get,
  Component
} = Ember;
const {
  oneWay,
  bool
} = computed;

export default Component.extend({
  layout,
  tagName: 'li',
  classNameBindings: ['crumbClass'],

  crumbClass: oneWay('breadCrumbs.crumbClass'),
  linkClass: computed('breadCrumbs.linkClass', 'route.isPrefix', function() {
    const linkClass = get(this, 'breadCrumbs.linkClass');
    const isPrefix = get(this, 'route.isPrefix');
    return isPrefix ? `${linkClass} is-prefix` : linkClass;
  }),
  hasBlock: bool('template').readOnly()
});
