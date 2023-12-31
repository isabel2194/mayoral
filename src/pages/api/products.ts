import path from "path";
import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async(req: NextApiRequest, res: NextApiResponse) => {
  const jsonDirectory = path.join(process.cwd(), "src/pages/api/__mocks__");
  const fileContents = await fs.readFile(jsonDirectory + "/products.json", "utf8");
  res.status(200).json(fileContents);
};

export default handler;
