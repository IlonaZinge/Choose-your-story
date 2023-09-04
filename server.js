const { MongoClient, Int32 } = require('mongodb');

const uri = 'mongodb+srv://Nina:Shadow@cluster0.95pehej.mongodb.net/';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


client.connect(err => {
    if (err) throw err;
    const database = client.db("ShadowWithin");
    const collection = database.collection("storyNodes");
  /*Daten einfügen*/
    collection.countDocuments({}, (err, count) => {
      if (err) throw err;
  
      if (count > 0) {
        console.log("Story Nodes already inserted");
        client.close();
      } else {
  const storyNodes = [
    {
      _id: "1",
      text: "The darkness begins to recede...",
      choices: [
        { text: "Look around", nextNode: 2 },
        { text: "Leave room", nextNode: 3 }
      ]
    },
    {  
    _id: "2",
    text: "You look around the white room. It's feels cold, sterile and quite unsettling. There is a dark shadow looming in the corner, you pinch yourself to make sure you are not dreaming. Ouch! You are definitely awake. ",
    choices: [
        {text: "Leave room", nextNode: 3}
    ]
    },
    {
    _id: "3",
    text: "You enter a long white corridor that has bright likes that flicker from time to time. Clearly this place hasn't been cleaned in a while. There are four doors in total and a big double door at the end of the hallway. You are not quite sure what you are looking for, but an explanation would be nice.",
    choices: [
        {text: "Left room 1", nextNode: 4},
        {text: "Left room 2", nextNode: 5},
        {text: "Rigth room 1", nextNode: 6},
        {text: "Right room 2", nextNode: 7},
        {text: "Continue to the double doors", nextNode: 8}
    ]
    },
    {
    _id: "4",
    text: "You enter the room closest to you. You reach for the doorknob. You see a bed and the same shadow from before, except this time there are three. They are tall and all loom over the bed. You walk closer and find a scalpel lying there. Do you wish to take it?",
    choices: [
        {text: "Take the scalpel", nextNode: 9},
        {text: "Leave the scalpel", nextNode: 10}
    ]
    },
    {
    _id: "5",
    text: "You enter and find a boy sitting there.  There is a shadow that seems to be holding its hands over the boy's head. You call to him and he turns your way 'Hey, what are you doing here? We aren't supposed to leave our rooms unless we are called upon.' ",
    choices: [
        {text: "'Where are we'", nextNode: 11},
        {text: "'Who are you?'", nextNode: 12}
    ]
    },
    {
    _id: "6",
    text: "You see a man laying in bed. He seems to be covered in sweat and chained to the best. It looks like he is asleep, but at the same time it looks like he is struggling. Every few seconds, he lets out a grunt and a flinch. You get an eerie feeling that sends shivers down your Spine.",
    choices: [
        {text: "Leave", nextNode: "LEAVE"},

    ]
    },
    {
    _id: "LEAVE",
    text: "You return to the corridor. Where do you want to explore next?",
    choices: [
        {text: "Left room 1", nextNode: 4},
        {text: "Left room 2", nextNode: 5},
        {text: "Rigth room 1", nextNode: 6},
        {text: "Right room 2", nextNode: 7},
        {text: "Continue to the double doors", nextNode: 8}

    ]
    },
    {
    _id: "7",
    text: "You enter a new corridor, this time there are two doors and another double door that seems to be the way out. The only problem is, that there are comically large chains keeping you from even getting to the handle.",
    choices: [
        {text: "Check Room 1", nextNode: 18},
        {text: "Check Room 2", nextNode: 19},
        {text: "Inspect the Chains", nextNode: 20}
    ]
    },
    {
    _id: "8",
    text: "You go straight ahead and swing open the heavy doors. You get a whiff of food and you hear your stomach grumble. There is a suspicious slice of apple pie laying on one of the tables. Do you wish to take it?",
    choices: [
        {text: "Take a slice", nextNode: 13},
        {text: "Resist your hunger", nextNode: 14},
    ]
    },
    {
    _id: "9",
    text: "You decide to take it and leave the room",
    choices: [
        {text: "Go back", nextNode: "LEAVE"},
    ]
    },
    {
    _id: "10",
    text: "You decide that you don't need the scalpel, it's a hospital, after all. Considered one of the safest places, right?",
    choices: [
        {text: "Go back", nextNode: "LEAVE"}
    ]
    },
    {
    _id: "11",
    text: "'Well I'm not really sure, nor am I sure how long we have actually been here. You are the girl from room 102 right? The director told me you would probably wake up soon. It's nice to finally have some company.'",
    choices: [
        {text: "Who are you?", nextNode: 12},
        {text: "What are these shadows?", nextNode: 17}
    ]
    },
    {
    _id: "12",
    text: "'I'm Patient A03'",
    choices: [
        {text: "Where are we?", nextNode: 13},
        {text: "What are these shadows?", nextNode: 17}
    ]
},
{
    _id: "13",
    text: "You couldn't resist taking a slice, it just looked too good.",
    choices: [
        {text: "Go back", nextNode: "LEAVE"}
    ]
},
{
    _id: "14",
    text: "Your stomach winces at your decision, but you know better than to trust free food.",
    choices: [
        {text: "Go back", nextNode: "LEAVE"},
    ]
},
{
    _id: "17",
    text: "'Wait, you see them too? What does this all mean' He seems to become quiet and lost in thought. You feel a bit creeped out, maybe you should leave.",
    choices: [
        {text: "Go back", nextNode: "LEAVE"},
    ]
},
{
    _id: "18",
    text: "It's locked, no chance of breaking in.",
    choices: [
        {text: "Go back", nextNode: 7},
    ]
},
{
    _id: "19",
    text: "This door is different from the rest. It was made out of wood and had a golden door knob. You reach for the door knob and a shiver jolts down your spine. You become hesitant to open the door.",
    choices: [
        {text: "Go back", nextNode: 7},
    ]
},
{
    _id: "20",
    text: "Yea definitely no chance you are getting past these.",
    choices: [
        {text: "Go back", nextNode: 7},
    ]
}];

collection.insertMany(storyNodes, (err, result) => {
    if (err) throw err;

    console.log(`${result.insertedCount} story nodes inserted.`);

    // Close the client
    client.close();
});
}
});
});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const ejs = require('ejs');

const path = require('path');

/*Shadows.ejs*/
app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://Nina:Shadow@cluster0.95pehej.mongodb.net/ShadowWithin?retryWrites=true&w=majority');

const storySchema = new mongoose.Schema({
  _id: String,
  text: String,
  choices: [
    {
      text: String,
      nextNode: String
    },
    {
      text: String,
      nextNode: String
    }
  ]
});

const Story = mongoose.model('Story', storySchema, 'storyNodes');

app.get('/play', async (req, res) => {
  try {
    const storyNode = await Story.findById(1).exec();
    if (!storyNode) {
      console.error('Story Node not found');
      return res.status(404).send('Story Node not found');
    }
    res.render('Shadows', {
      storyList: [storyNode]  
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getStoryNode/:id', async (req, res) => {
  try {
    const nodeId = req.params.id;
    const storyNode = await Story.findById(nodeId).exec();
    res.json(storyNode);
  } catch (err) {
    console.error(err);
    res.status(404).json({ error: 'Story Node not found' });
  }
});
/*Alle anderen Files zum Anzeigen rendern*/
app.get('/index.html', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.get('/info.html', (req, res) => {
  const filePath = path.join(__dirname, 'info.html');
  res.sendFile(filePath);
});
app.get('/play.html', (req, res) => {
  const filePath = path.join(__dirname, 'play.html');
  res.sendFile(filePath);
});
app.get('/story1.html', (req, res) => {
  const filePath = path.join(__dirname, 'story1.html');
  res.sendFile(filePath);
});
app.get('/style.css', (req, res) => {
  const filePath = path.join(__dirname, 'style.css');
  res.sendFile(filePath);
});
app.get('/app.js', (req, res) => {
  const filePath = path.join(__dirname, 'app.js');
  res.sendFile(filePath);
});
app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'index.html');
  res.sendFile(filePath);
});

app.listen(4440, () => {
  console.log('Server is running');
});
