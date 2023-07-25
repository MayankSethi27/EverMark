const Note=require('../models/Notes');
const mongoose=require('mongoose');

exports.dashboard = async (req, res) => {

    let perPage = 12;
    let page = req.query.page || 1;
  
    const locals = {
      title: "Dashboard",
      description: "Free NodeJS Notes App.",
    };
  
    try {
      // Mongoose "^7.0.0 Update
      const notes = await Note.aggregate([
        { $sort: { updatedAt: -1 } },
        { $match: { user:new mongoose.Types.ObjectId(req.user.id) } },
        {
          $project: {
            title: { $substr: ["$title", 0, 30] },
            body: { $substr: ["$body", 0, 100] },
          },
        }
        ])
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec(); 
  
      const count = await Note.count();
  
      res.render('dashboard/index', {
        userName: req.user.firstName,
        locals,
        notes,
        layout: "../views/layouts/dashboard",
        current: page,
        pages: Math.ceil(count / perPage)
      });
    } catch (error) {
        console.log(error);
      }
    };


    // get view specific notes
    exports.dashboardViewNote = async (req, res) => {
        try {
          const note = await Note.findById(req.params.id)
            .where({ user: req.user.id })
            .exec(); // Use 'exec()' to execute the query
      
          if (note) {
            res.render('dashboard/view-notes', {
              noteId: req.params.id,
              note,
              layout: '../views/layouts/dashboard'
            });
          } else {
            res.send("Note not found or unauthorized access.");
          }
        } catch (err) {
          console.error(err);
          res.status(500).send("Something went wrong");
        }
      };
      
    //   PUT update specific Note
exports.dashboardUpdateNote=async(req,res) =>{
    try{
      
        await Note.findOneAndUpdate(
            {_id:req.params.id},
            {title:req.body.title, body:req.body.body}
        ).where({ user:req.user.id});

        res.redirect('/dashboard');
    }catch(err){
      console.log(err,'error in update note');
    }
}


exports.dashboardDeleteNote=async (req,res)=>{
    try{
        await Note.deleteOne({_id:req.params.id}).where({user:req.user.id})
        res.redirect('dashboard');
    }catch(err){
        console.log(err,'error in delete note');
    }
}