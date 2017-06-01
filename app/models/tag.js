import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  entry: DS.hasMany('entry', {async: true})
});
