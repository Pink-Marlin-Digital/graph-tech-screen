# Marvel Superhero API

**TODO: Implement the Marvel Superhero API**
 1. Create a route that returns a single superhero by slug, the route is defined in the ../index.ts file you just need to implement the handler
 2. The slug is the last part of the url, for example, the slug for the url https://localhost:3000/marvel-superhero/tony-stark is tony-stark
 3. The superhero data is in the ../services/superhero-db.ts file
 5. The superhero data is an array of objects, you need to find the object that has the slug that matches the slug in the url
 6. If the superhero is not found, return a 404 error
 7. If the superhero is found, return the superhero object
