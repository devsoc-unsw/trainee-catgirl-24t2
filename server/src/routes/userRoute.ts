import express, { type Request, type Response } from 'express';

const router =  express.Router();

// TODO: Remove this later.
// TODO: Check if this middleware function should be declared asynchronously.
const userLog = async (req: Request, res: Response, next: Function) => {
    console.log('USER');
    next();
}
router.use(userLog);

// TODO: Move this to its own file.
// TODO: Figure out how this function should handle user not found.
// Skeleton authentication function. Match the user's password hash 
// against the hash stored in the database, then return a JWT or error.
async function authenticate(username: string, password: string) {
  const user = ["bob@bob.com", "aAasihfAIFUBasfbB"]; // await db.query();

  if (user.length > 1) {
    console.log('More than one user exists');
  } else if (user.length === 1) {
    console.log('User authenticated');
  } else {
    console.log('Invalid username or password');
  }
}

router.post('/login', async (req: Request, res: Response) => {
  // username and email are the same.
  const {username, password} = req.body;

  if (!username || !password) {
    return res.status(400).json({message: "Username and password are required"});
  }

  // Check if the a user with the given username and password exists.
  // Need to implement some form of password hashing later for security.
  if (authenticate(username, password) == null) {
    res.status(401).json({message: "Invalid username or password", token: null});
  } else {
    let token = "aaaaaaaaaaaa";
    res.status(200).json({message: "Login successful", token: token})
  }
});

router.post('/user', async (req: Request, res: Response) => {
  let {username, password} = req.body;

  // Check if the user exists in the database.

  // Insert the user into the database.

});

router.put('/user', async (req: Request, res: Response) => {
  let {username, password} = req.body;

  // Check if the user exists in the database.

  // Authenticate the user.

  // Update the user's database entry with the provided details.

});

router.delete('/user', async (req: Request, res: Response) => {
  let {username, password} = req.body;

  // Check if the user exists in the database.

  // Authenticate the user.

  // Delete the user from the database.

});

module.exports = router;