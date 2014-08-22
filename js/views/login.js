window.LoginView = Backbone.View.extend({
    events: {
        'click input[type="submit"]': 'login'
    },

    initialize: function () {
        this.render();
    },

    login: function(e){
        e.preventDefault();
        var login_form = $(this.el).find('#login-form')
        var login_msg = login_form.find('p.login-msg')
        var email = login_form.find('input[name="email"]').val()
        var pwd = login_form.find('input[name="pwd"]').val()
        if(email && pwd){
            $.ajax({
                url: 'http://localhost:3000/sessions/login',
                data: 'user_name='+email+'&password='+pwd,
                type: 'post',
                crossDomain: 'true',
                dataType: 'json',
                success: function(res){
                    login_msg.html('login succeed!');
                    //console.log(res);
                },
                error: function(res){
                    // http://backbonejs.org/#Router-navigate
                    app_router.navigate('register', {trigger: true, replace: true});
                    //login_msg.html('login failed!');
                }
            })
        }
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    }
});