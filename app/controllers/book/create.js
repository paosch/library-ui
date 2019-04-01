import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    selectAuthor(author) {
      console.log(author)
    },
    searchAuthor(authorQuery){
      return this.store.query('author', {filter: {query: authorQuery}});
    }
  }
});
