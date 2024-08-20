import { currentUser } from "@clerk/nextjs/server";
import User from "@/modals/user.modal"; // Ensure your model path is correct
import { connect } from "@/db"; // Your database connection logic

export async function addUserToDatabase() {
  await connect();
  const user = await currentUser();

  if (!user) {
    console.log("No user logged in");
    return;
  }

  const existingUser = await User.findOne({ clerkId: user.id });
  if (existingUser) {
    console.log("User already exists in the database");
    return;
  }

  const newUser = new User({
    clerkId: user.id,
    email: user.emailAddresses[0].emailAddress, // Assuming you're storing the first email address
    name: user.username || `${user.firstName} ${user.lastName}`, // Fall back to full name if username is not available
  });

  await newUser.save();
  console.log("User added to database");

}
