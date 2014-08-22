window.RegisterView = Backbone.View.extend({
    events: {
        'click input[type="submit"]': 'register'
    },

    initialize: function () {
        this.render();
    },

    register: function(e){
        e.preventDefault();
        var login_form = $(this.el).find('#login-form')
        var login_msg = login_form.find('p.login-msg')
        var email = login_form.find('input[name="email"]').val()
        var pwd = login_form.find('input[name="pwd"]').val()
        var pwd_confirm = login_form.find('input[name="pwd-confirm"]').val()
        if(email && pwd && pwd_confirm){
            $.ajax({
                url: 'http://localhost:3000/sessions/login',
                data: 'user_name='+email+'&password='+pwd+'&password-confirm='+pwd_confirm,
                type: 'post',
                crossDomain: 'true',
                dataType: 'json',
                success: function(res){
                    login_msg.html('register succeed!');
                    //console.log(res);
                },
                error: function(res){
                    //app_router.navigate('', { trigger: true });
                    login_msg.html('register failed!');
                }
            })
        }
    },

    render: function () {
        $(this.el).html(this.template());
        return this;
    }
});