## Abstract

Welcome to the **Better Call Saul API**! This API, powered by NestJS, allows you to access information about the characters, quotes, and episodes from the popular television series **Better Call Saul**. You can retrieve all items for each category or access specific elements by their ID.

## Endpoints

1. **Characters**

   - `/api/characters`: Returns all characters.
   - `/api/characters/:id`: Returns the character with the specified ID.

2. **Quotes**

   - `/api/quotes`: Returns all quotes.
   - `/api/quotes/:id`: Returns the quote with the specified ID.

3. **Episodes**
   - `/api/episodes`: Returns all episodes.
   - `/api/episodes/:id`: Returns the episode with the specified ID.

## How to Use

To use this API, make HTTP requests to the desired endpoints using the appropriate HTTP method (e.g., GET). Here's an example using cURL:

```shell
# Get all characters
curl -X GET https://better-call-saul-api.com/api/characters

# Get a specific character by ID
curl -X GET https://better-call-saul-api.com/api/characters/123

# Get all quotes
curl -X GET https://better-call-saul-api.com/api/quotes

# Get a specific quote by ID
curl -X GET https://better-call-saul-api.com/api/quotes/456

# Get all episodes
curl -X GET https://better-call-saul-api.com/api/episodes

# Get a specific episode by ID
curl -X GET https://better-call-saul-api.com/api/episodes/789
```

## Response Format

The API will respond with JSON objects containing the requested data. Here's an example response for retrieving a character by ID:

```json
{
  "id": 123,
  "name": "Saul Goodman",
  "occupation": "Lawyer",
  "status": "Alive",
  "appearance": [1, 2, 3, 4, 5],
  "nickname": "Jimmy McGill"
  // Additional character properties...
}
```

Please note that the response will vary depending on the endpoint and the specific item being requested.

Enjoy exploring the Better Call Saul API and have a great time discovering information about your favorite characters, quotes, and episodes!
