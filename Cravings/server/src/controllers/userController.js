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
