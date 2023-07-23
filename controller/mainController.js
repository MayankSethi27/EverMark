exports.home= async(req,res)=>{
    const locals={
        title:"Notes",
        description:"Free Notes App"
    }

     return res.render('home',locals);
}