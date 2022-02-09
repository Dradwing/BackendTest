const jwt=require('jsonwebtoken');



const createSendToken=async(user,status,res)=>{

    const cookieOptions={
        //browser will automatically delte it after expires
        expires: new Date(
          Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
      };
      if(process.env.ENV=="production")cookieOptions.secure=true;
      res.cookie(jwt,process.env.)


      white 
      black
      green

}