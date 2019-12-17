import Component from '@ember/component';

export default Component.extend({
  tagName: 'main',
  classNames: ['main', 'flex-shrink-0'],
  attributeBindings: ['role'],
  role: 'main',
  paddingClass: 'py-5'
});
