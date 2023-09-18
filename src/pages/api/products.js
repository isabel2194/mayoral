import path from "path";
import { promises as fs } from "fs";

const handler = async(req, res) => {
  const jsonDirectory = path.join(process.cwd(), "src/data");
  const fileContents = await fs.readFile(jsonDirectory + "/products.json", "utf8");
  res.status(200).json(fileContents);
};

export default handler;
