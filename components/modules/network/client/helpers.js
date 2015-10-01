Template.Network.rendered = function() {
    $('#networkForm')
        .form({
            name: {
                identifier  : 'networkPassword',
                rules: [
                    {
                        type   : 'maxLength[8]',
                        prompt : 'Network password must not be more than 8 characters'
                    }
                ]
            }
        })
    ;
};
