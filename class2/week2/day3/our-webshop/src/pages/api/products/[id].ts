// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "../../../data/laptops.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const product = products.find((p) => p.id.toString() === req.query.id);
  res.status(200).json(product);
}
