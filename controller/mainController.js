exports.home= async(req,res)=>{
    const locals={
        title:"Notes",
        description:"Free Notes App"
    }

     return res.render('home',{
     locals,
     layout:'../views/layouts/front-page'
     });
}

exports.about= async(req,res)=>{
    const locals={
        title:"About- Notes",
        description:"Free Notes App"
    }

     return res.render('about',locals);
}