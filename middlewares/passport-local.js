const passport = require("passport");

passport.use(new LocalStratrgy(async(username,password,done)=>{
    try {
        if (user) {
            if(password==req.params){

            }
            
         else {
            return done(null,false);
            
        }
    }else{
        return done(null,false);
    }
    } catch (error) {
        return done(error,false);
    }
}));
passport.serializeUser((user,done)=>{
    return done(null,user.id);
})