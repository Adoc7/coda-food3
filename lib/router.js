Router.configure({
    layoutTemplate: 'layout',
    waitOn: function() { return Meteor.subscribe('categories'); }
});

Router.route('/', {
    name: 'Categories'
});


Router.route('/pages/:name', function() {
    this.render(this.params.name,{
        data: {
            name: this.params.name
        }});
});

// Router.route('/page/:_id', {
//     name: "page",
//     data: function(){
//         return {
//             id: this.params._id
//         }
//     }
// });


// Router.route('/page/:_id', {
//     name: "page",
//     data: function() { return Categories.find; }});
