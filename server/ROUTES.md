# Server Route API Documentation

## Introduction

- API Version: `1.0.0`
- Base URL: `http://localhost:3000`
- Authentication: JWT

## Endpoints

`/dev/clear` POST
- Clears all databases
- Should not be available in production

`/authentication` POST
- Creates a user
- Body: `{ email, password }`

`/authentication` PUT
- Creates a token for a user that lasts for 1 day
- Body: `{ email, password }`
- Returns: `{ token }`

`/society` POST
- Prerequisites: JWT token
- Creates a society with the requesting user as president
- Returns: `{ society }`

`/society` GET
- Prerequisites: JWT token
- Lists all societies a user is involved with
- Returns: `{ involvements, societies }`

`/society` PUT
- Prerequisites: JWT token
- Body: `{ societyId }`
- Requesting user has to be at least an executive
- Updates a society

`/society` DELETE
- Prerequisites: JWT token
- Body: `{ societyId }`
- Requesting user has to be at least an executive
- Deletes a society

`/involvement` GET
- Prerequisites: JWT token
- Lists a user's involvements

`/involvement` POST
- Prerequisites: JWT token
- Body: { `societyId` }
- Adds a new involvement for the requesting user
- Warning: currently allows anyone to become president of any society
- Warning: does not let presidents/executives promote others

`/involvement` PUT
- Prerequisites: JWT token
- Body: { `societyId` }
- Updates an involvement belonging to the requesting user
- Warning: currently allows anyone to become president of any society
- Warning: does not let presidents/executives promote others

`/involvement` DELETE
- Prerequisites: JWT token
- Body: { `societyId` }
- Deletes an involvement belonging to the requesting user
- Warning: could soft-lock a society if the president relinquishes their involvement

`/form` POST
- Prerequisites: JWT token
- Body: `{ societyId, title, fields }`
- Creates a form belonging to the society
- Warning: does not check permission levels

`/form` GET
- Prerequisites: JWT token
- Body: `{ societyId }`
- Lists all forms belonging to a society
- Returns: { forms }
- Warning: does not check permission levels

`/form` PUT
- Prerequisites: JWT token
- Body: `{ formId, title, fields }`
- Updates a form
- Warning: does not check permission levels

`/form` DELETE
- Prerequisites: JWT token
- Body: `{ formId }`
- Deletes a form
- Warning: does not check permission levels
