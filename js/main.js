var AppRouter = Backbone.Router.extend({

    routes: {
        ""                  : "login",
        "register"          : "register"
    },

    initialize: function () {
        this.headerView = new HeaderView();
        $('#header').html(this.headerView.el);
        this.footerView = new FooterView();
        $('#footer').html(this.footerView.el);
    },

	login: function() {
        this.loginView = new LoginView();
        $("#content").html(this.loginView.el);
    },

    register: function(){
        this.registerView = new RegisterView();
        $("#content").html(this.registerView.el);
    }
});