# Better Call Saul

## Documentation

Welcome to the Better Call Saul API documentation. Here you will find all the information
you need to get started with the API. Give our documentation a read and start building your
own applications.

## Base URL
https://better-call-saul-api.onrender.com/

## Character Endpoints

#### Character Attributes

| Attribute   | Type          | Description  |
| ----------- |:-------------:| ------------ |
| char_id     | integer       | Unique key
| name        | string        | A character's full name |
| birthday    | string        | A character's birthday  |
| occupation  | array         | List of character's known occupation    |
| img         | string        | Character's image (as jpg)   |
| status      | string        | Are they alive(or did Heisenberg get to them??)    |
| nickname    | string        | A known nickname they are refered as     |
| appearance  | array         | List of seasons that the character appeared in    |
| firstAppearance | string    | Episode name where they appeared first. |
| lastAppearancearray | string    | Episode name where they appeared last time. |

#### Get all characters
Endpoint to retrieve information from all characters.
```
/characters
```

#### Get single character by ID
```
/characters/:char_id
```
#### Get single character by Name
```
/characters/character/:name
```

#### Get a random character
```
/characters/random
```

## Episode Endpoints

#### Episode Attributes

| Attribute   | Type          | Description  |
| ----------- |:-------------:| ------------ |
| id          | integer       | Unique Id per episode |
| title       | string        | The title of the episode |
| season      | integer       | The season that the episode belongs to |
| episode     | integer       | The episode number of it's season   |
| air_date    | string        | The original air date of the episode   |
| characters  | array         | Main characters that are associated with the episode   |

#### Get all episodes
```
/episodes
```

#### Get episode by ID
```
/episodes/:episode_id
```

#### Get a random episode
```
/episodes/random
```

#### Get episode by Title
```
/episodes/episode/:title
```
