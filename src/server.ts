import mongoose from "mongoose";
import config from "./app/config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(
        `Courier and Parcel Management App listening on port ${config.port} 😊`
      );
    });
  } catch (error) {
    console.log(error);
  }
}

main();
