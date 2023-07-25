exports.isLoggedIn=function(req,res,next){
    if(req.user){
        next();
    }
    else{
        console.log('unauthorized user');
        return res.status(401).send('Unauthorized Access');
    }
}