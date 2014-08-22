window.Test = Backbone.Model.extend({

    urlRoot: "#"
});

window.TestCollection = Backbone.Collection.extend({

    model: Test,

    url: "#"

});