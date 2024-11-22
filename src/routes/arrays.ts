import type { Request, Response } from "express";

export const route = (req: Request, res: Response) => {
  // Sample array
  const sampleArray = [1, 2, 3, 4, 5];

  // Perform some array operations
  const doubledArray = [2,4,6,8,10];
  const filteredArray =[3,4,5];
  const sum = 15;

  // Send the results as a response
  res.json({
    original: sampleArray,
    doubled: doubledArray,
    filtered: filteredArray,
    sum: sum,
  });
};

export default route;
