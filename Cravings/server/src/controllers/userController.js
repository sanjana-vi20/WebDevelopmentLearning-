import cloudinary  from "../config/cloudinary.js";


export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobnumber } = req.body;
    const currentUser = req.user;

    if (!fullName || !email || !mobnumber) {
      const error = new Error("All Fields are Required");
      error.statusCode = 400;
      return next(error);
    }
    console.log("Old data ", currentUser);

    currentUser.fullName = fullName;
    currentUser.email = email;
    currentUser.mobnumber = mobnumber;

    await currentUser.save();

    console.log("New data ", currentUser);

    res
      .status(200)
      .json({ message: "Updated Successfully", data: currentUser });

    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserPhotoUpdate = async(req ,res ,next) => {
   try {
    // console.log("body: ", req.body);

    // console.log("file:", req.file);

    const currentUser= req.user;
    const dp = req.file;
    if(!dp)
    {
      const error = new Error("Profile Picture required")
      error.statusCode = 400;
      return next(error)
    }
    if(currentUser.photo.publicID)
    {
      await cloudinary.uploader.destroy(currentUser.photo.publicID)
    }

    const b64 = Buffer.from(dp.buffer).toString("based64");
    console.log(b64.slice(0,100));
    const dataURI = `data:${dp.mimetype};based64,${b64}`;
    console.log("Data URI" , dataURI.slice(0,100));

    const result = await cloudinary.uploader.upload(dataURI , {
      folder:"Cravings/User",
      width:500,
      height:500,
      crop:"fill"
    })

    console.log("Image Uploaded successfully :" , result);
    currentUser.photo.url=result.secure_url;
    currentUser.photo.publicID=result.public_id;

    await currentUser.save();
    res.status(200).json({ message: "Photo Updated" , data:currentUser });
  } catch (error) {
    next(error);
  }

}
