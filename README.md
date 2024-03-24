# REST-API-TypeScript

## Description

This project is a **RESTful API** built with **TypeScript**. It provides endpoints for performing basic arithmetic calculations and checking health status.
The calculator endpoint supports addition, subtraction, multiplication, and division operations.

## Folder Structure

- **src**: Contains the source code for the API.
  - **middleware**: Middleware functions for logging, error handling, and timestamp handling.
  - **routes**: Endpoint handlers for different API routes.
  - **tests**: Test scripts for testing the API endpoints.
  - **types**: Type definitions used within the project.
- **dist**: Contains the compiled JavaScript code.
- **jest.config.js**: Jest configuration file.
- **tsconfig.json**: TypeScript configuration file.
- **package.json**: Project metadata and dependencies.
- **global.d.ts**: Global type definitions.

## Middleware

- **calculator.ts**: Middleware for validating calculator request body.
- **error.ts**: Middleware for handling errors and logging stack traces.
- **log.ts**: Middleware for logging request details.
- **time.ts**: Middleware for adding a timestamp to the request object.
- **index.ts**: Exports middleware functions.

## Routes

- **calculator.routes.ts**: Defines routes for performing calculations.
- **health.routes.ts**: Defines routes for checking the health status of the API.
- **cookies.routes.ts**: Defines routes for handling cookies.
- **security.routes.ts**: Defines routes for checking the security status of the request.
- **index.ts**: Exports route handlers.

## Testing

Test scripts are provided in the `tests` folder to ensure the correctness of the API endpoints.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Otavie/REST-API-TypeScript.git
   ```
2. Navigate to the project directory:
   ```bash
   cd REST-API-TypeScript
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm run start
   ```
2. The API will be accessible at `http://localhost:45223`.

## Endpoints

- `GET /calculator`: Get all calculations
- `GET /calculator/:id`: Get a calculation by ID
- `POST /calculator`: Create a new calculation
- `PUT /calculator/:id`: Update a calculation by ID
- `DELETE /calculator/:id`: Delete a calculation by ID

## Request Body (POST)

```json
{
  "operator": "+",
  "operand1": 3,
  "operand2": 5
}
```

- `operator`: The arithmetic operation (e.g., "+", "-", "\*", "/")
- `operand1`: The first operand
- `operand2`: The second operand

## Response

```json
{
  "message": "Create a new calculation",
  "timeStamp": "2024-03-28T12:00:00.000Z",
  "data": 8
}
```

- `message`: A description of the operation performed
- `timeStamp`: The timestamp of when the calculation was made
- `data`: The result of the calculation

## Credits

This project was created by [Otavie Okuoyo](https://github.com/Otavie).

## License

This project is licensed under the [MIT License](LICENSE).

## Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

---

_Disclaimer: The REST API code was written by Nerdi Coda. I only wrote the test scripts._
