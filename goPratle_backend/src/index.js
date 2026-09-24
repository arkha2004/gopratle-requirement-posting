import "dotenv/config";

import { app } from "./app.js";
import connectDB from "./db/connectDb.js";

const port = process.env.PORT;

connectDB();

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});