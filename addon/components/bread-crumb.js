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

  crumbClass: computed('breadCrumbs.crumbClass','route.isPrefix', function() {
    const crumbClass = get(this, 'breadCrumbs.crumbClass') || '';
    const isPrefix = get(this, 'route.isPrefix');
    return isPrefix ? `${crumbClass} is-prefix` : crumbClass;
  }),
  linkClass: oneWay('breadCrumbs.linkClass'),
  hasBlock: bool('template').readOnly()
});
