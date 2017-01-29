# Express Env Example

This is an express environment example that I wrote to demonstrate modular Express routing patterns. This environment enables easy extensibility, scalability, and proper software design practices.

## Sample endpoints

### Views
 - `/` - Default route that redirects to the home page
 - `/home` - Render the home page sample
 - `/home/info` - Render the home page sample
 - `/error` - Render the error page sample

### API
 - `/api/v1/dogs` - Get all dogs
 - `/api/v1/dogs/:id` - Get a dog with the specified id
 - `/api/v2/animals/dogs` - Get all dogs
 - `/api/v2/animals/dogs/:id` - Get a dog with the specified id