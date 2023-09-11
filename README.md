# Our Interactive Story Game 🎮

## Introduction
Welcome to our Interactive Story Game, a short adventure where you get to explore a wierd hospital.

## Features
- **Exploration and Conversation:** Explore the hospital and interact with the patients
- **Database Integration:** Seamlessly connected to a MongoDB database to store and retrieve story nodes, ensuring continuity.
- **Express Web Server:** A user-friendly web interface to play, explore, and enjoy the interactive story.

## Getting Started
1. **Cloning the Repository:** Begin by cloning this repository to your local machine using your preferred Git client.
2. **Setting Up MongoDB:** Ensure you have a MongoDB database ready. Update the MongoDB URI in the code to match your setup.
3. **Installing Dependencies:** Utilize a package manager to install the necessary dependencies.
4. **Launching the Server:** Execute the `app.js` file to start the Express web server.
5. **Exploring Stories:** Visit the provided URLs to enjoy different stories and make choices that impact the narrative.

## Database Structure
The project is designed to work with a MongoDB database to store and retrieve story nodes. Here's an example structure:

```json
{
    "_id": "1",
    "text": "The darkness begins to recede...",
    "choices": [
        {
            "text": "Look around",
            "nextNode": "2"
        },
        {
            "text": "Leave room",
            "nextNode": "3"
        }
    ]
}
