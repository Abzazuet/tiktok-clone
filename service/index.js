import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

// App Config
const app = express();
const port = process.env.PORT || 8001;