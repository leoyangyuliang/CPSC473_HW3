(function(window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    console.log('running the Datastore function');
    this.data = {};
  }
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  };
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  DataStore.prototype.getAll = function() {
    return this.data;
  };
  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  };
  DataStore.prototype.removeAll = function() {
    for (var key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        this.remove(key);
      }
    }
  };


  //public
  App.DataStore = DataStore;
  window.App = App;
})(window);
