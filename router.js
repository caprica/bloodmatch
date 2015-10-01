Router.configure({
    layoutTemplate : 'MainLayout',
    loadingTemplate: 'Loading'
});

Router.plugin('dataNotFound', {
    notFoundTemplate: 'NotFound'
});

Router.route('/', function () {
   this.redirect('/intro');
});
