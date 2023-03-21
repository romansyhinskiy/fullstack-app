import User from "../models/user.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors/index.js";

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("please provide all values");
  }

  const userAlreadyExists = await User.findOne({ email });

  if (userAlreadyExists) {
    throw new BadRequestError("Email should be unique");
  }

  const user = await User.create({ name, email, password });
  const token = user.createJWT();

  res.status(StatusCodes.OK).json({
    user: {
      name: user.name,
      lastName: user.lastName,
      email: user.email,
      location: user.location,
    },
    token,
    location: user.location,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide all values!");
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new BadRequestError("Invalid credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new BadRequestError("Invalid credentials");
  }

  const token = user.createJWT();
  user.password = undefined;

  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });
};

const updateUser = async (req, res) => {
  const { email, name, lastName, location } = req.body;
  console.log(req.body);
  if (!email || !name || !lastName || !location) {
    throw new BadRequestError("Authentication lalala");
  }

  const user = await User.findOne({ _id: req.user.userId });
  console.log(user);

  user.email = email;
  user.name = name;
  user.lastName = lastName;
  user.location = location;

  await user.save();

  const token = user.createJWT();
  res.status(StatusCodes.OK).json({
    user,
    token,
    location: user.location,
  });

  res.send("updateUser");
};

export { register, login, updateUser };
