import Route from '@ember/routing/route';

export default Route.extend({
  model({id}){
    this.store.findRecord('author', id);
  }
});
