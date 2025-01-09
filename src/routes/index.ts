import arrays from "./arrays";

/**
 * @swagger
 * /code-test/arrays:
 *   get:
 *     summary: Array operations endpoint
 *     description: Handles various array-related operations
 *     responses:
 *       200:
 *         description: Successful operation
 * 
 * /marvel-superhero/{slug}:
 *   get:
 *     summary: Get Marvel superhero details
 *     description: Retrieves information about a specific Marvel superhero
 *     parameters:
 *       - in: path
 *         name: slug
 *         required: true
 *         schema:
 *           type: string
 *         description: The superhero's unique identifier
 *     responses:
 *       200:
 *         description: Successful operation
 *       404:
 *         description: Superhero not found
 */
export const getRoutes = () => {
  return [
    {
      route: "/code-test/arrays",
      handler: arrays,
    },
    {
      
      route: "/marvel-superhero/:slug",
      handler: () => {
        throw new Error("Not implemented");
      },
    },
  ];
};
