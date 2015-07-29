Router.route('/', function () {
  this.render('Home', {
   // data: function () { return Items.findOne({_id: this.params._id}); }
  });
});
      
Router.route('/Stenography', function () {
  this.render('Stenography', {
    //data: function () { return Items.findOne({_id: this.params._id}); }
  });
});

Router.route('/References', function () {
  this.render('References', {
    //data: function () { return Items.findOne({_id: this.params._id}); }
  });
});

Router.route('/Examples', function () {
  this.render('Examples', {
    //data: function () { return Items.findOne({_id: this.params._id}); }
  });
});

Router.route('/Credits', function () {
  this.render('Credits', {
    //data: function () { return Items.findOne({_id: this.params._id}); }
  });
});