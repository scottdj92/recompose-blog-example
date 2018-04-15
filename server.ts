import * as express from "express";
import * as cors from "cors";
import * as Bundler from "parcel-bundler";

const app = express();
const bundler = new Bundler("index.html");
app.use(cors());

app.use(bundler.middleware());

app.listen(1234, () => {
    console.log("app running on port 1234");
});
