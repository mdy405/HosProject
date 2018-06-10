const express = require('express');
const app = express();
const userRouter = express.Router();

const user = require('../server/models/user');

userRouter.route('/add').post(function (req, res) {
  const newUser = new user(req.body);
  newUser.save()
    .then(user => {
        res.json('new user added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

userRouter.route('/').get(function (req, res) {
    user.find(function (err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

userRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  user.findById(id, function (err, user){
      res.json(user);
  });
});

userRouter.route('/update/:id').post(function (req, res) {
    user.findById(req.params.id, function(err, user) {
    if (!user)
      return next(new Error('Could not load Document'));
    else {
      // do your updates here
      user.userName = req.body.userName;
      user.phone = req.body.phone;
      user.password = req.body.password;
      user.email = req.body.email;

      user.save().then(user => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

userRouter.route('/delete/:id').get(function (req, res) {
    user.findByIdAndRemove({_id: req.params.id},
       function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = userRouter;