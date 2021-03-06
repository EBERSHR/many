import './App.css';
// const db = require("./app/models");
import db from './models'
// const TutorialController = require("./app/controllers/tutorial.controller");
import TutorialController from './controllers/tutorial.controller'
// const TagController = require("./app/controllers/tag.controller");
import TagController from './controllers/tag.controller';

function App() {

  
  
  const run = async () => {
      const tut1 = await TutorialController.create({
          title: "Tut#1",
          description: "Tut#1 Description",
        });
        
        /*
        >> Created Tutorial: {
            "id": 1,
            "title": "Tut#1",
            "description": "Tut#1 Description",
            "updatedAt": "2020-04-24T03:27:52.798Z",
            "createdAt": "2020-04-24T03:27:52.798Z"
        }
        */
        
        const tut2 = await TutorialController.create({
          title: "Tut#2",
          description: "Tut#2 Description",
        });
        
        const tut3 = await TutorialController.create({
          title: "Tut#3",
          description: "Tut#3 Description",
        });
        
        const tut4 = await TutorialController.create({
          title: "Tut#4",
          description: "Tut#4 Description",
        });
  
       // Create Tags
        
        const tag1 = await TagController.create({
          name: "Tag#1",
        });
        /*
        >> Created Tag: {
          "id": 1,
          "name": "Tag#1",
          "updatedAt": "2020-04-24T03:27:53.923Z",
          "createdAt": "2020-04-24T03:27:53.923Z"
        }
        */
        
        const tag2 = await TagController.create({
          name: "Tag#2",
        });
  
        // Add Tutorials to Tags
        
        await TagController.addTutorial(tag1.id, tut1.id);
        // >> added Tutorial id=1 to Tag id=1
        
        await TagController.addTutorial(tag1.id, tut2.id);
        // >> added Tutorial id=2 to Tag id=1
        
        await TagController.addTutorial(tag1.id, tut3.id);
        // >> added Tutorial id=3 to Tag id=1
        
        await TagController.addTutorial(tag2.id, tut3.id);
        // >> added Tutorial id=3 to Tag id=2
        
        await TagController.addTutorial(tag2.id, tut4.id);
        // >> added Tutorial id=4 to Tag id=2
        
        await TagController.addTutorial(tag2.id, tut1.id);
        // >> added Tutorial id=1 to Tag id=2
  
        // Show Tag (including Tutorials) by id
        
        const _tag1 = await TagController.findById(tag1.id);
        console.log(">> tag1", JSON.stringify(_tag1, null, 2));
        /*
        >> tag1 {
          "id": 1,
          "name": "Tag#1",
          "createdAt": "2020-04-24T03:27:53.000Z",
          "updatedAt": "2020-04-24T03:27:53.000Z",
          "tutorials": [
            {
              "id": 1,
              "title": "Tut#1",
              "description": "Tut#1 Description"
            },
            {
              "id": 2,
              "title": "Tut#2",
              "description": "Tut#2 Description"
            },
            {
              "id": 3,
              "title": "Tut#3",
              "description": "Tut#3 Description"
            }
          ]
        }
        */
  
       // Show all Tags
        
        const tags = await TagController.findAll();
        console.log(">> tags", JSON.stringify(tags, null, 2));
        /*
        >> tags [
          {
            "id": 1,
            "name": "Tag#1",
            "createdAt": "2020-04-24T03:27:53.000Z",
            "updatedAt": "2020-04-24T03:27:53.000Z",
            "tutorials": [
              {
                "id": 1,
                "title": "Tut#1",
                "description": "Tut#1 Description"
              },
              {
                "id": 2,
                "title": "Tut#2",
                "description": "Tut#2 Description"
              },
              {
                "id": 3,
                "title": "Tut#3",
                "description": "Tut#3 Description"
              }
            ]
          },
          {
            "id": 2,
            "name": "Tag#2",
            "createdAt": "2020-04-24T03:27:53.000Z",
            "updatedAt": "2020-04-24T03:27:53.000Z",
            "tutorials": [
              {
                "id": 1,
                "title": "Tut#1",
                "description": "Tut#1 Description"
              },
              {
                "id": 3,
                "title": "Tut#3",
                "description": "Tut#3 Description"
              },
              {
                "id": 4,
                "title": "Tut#4",
                "description": "Tut#4 Description"
              }
            ]
          }
        ]
        */
  
       // Show Tutorial (including Tags) by id
        
        const _tut = await TutorialController.findById(tut3.id);
        console.log(">> tut3", JSON.stringify(_tut, null, 2));
        /*
        >> tut3 {
          "id": 3,
          "title": "Tut#3",
          "description": "Tut#3 Description",
          "createdAt": "2020-04-24T03:27:53.000Z",
          "updatedAt": "2020-04-24T03:27:53.000Z",
          "tags": [
            {
              "id": 1,
              "name": "Tag#1"
            },
            {
              "id": 2,
              "name": "Tag#2"
            }
          ]
        }
        */
  
       // Show all Tutorials
        
        const tuts = await TutorialController.findAll();
        console.log(">> tuts", JSON.stringify(tuts, null, 2));
        /*
        >> tuts [
          {
            "id": 1,
            "title": "Tut#1",
            "description": "Tut#1 Description",
            "createdAt": "2020-04-24T03:27:52.000Z",
            "updatedAt": "2020-04-24T03:27:52.000Z",
            "tags": [
              {
                "id": 1,
                "name": "Tag#1"
              },
              {
                "id": 2,
                "name": "Tag#2"
              }
            ]
          },
          {
            "id": 2,
            "title": "Tut#2",
            "description": "Tut#2 Description",
            "createdAt": "2020-04-24T03:27:53.000Z",
            "updatedAt": "2020-04-24T03:27:53.000Z",
            "tags": [
              {
                "id": 1,
                "name": "Tag#1"
              }
            ]
          },
          {
            "id": 3,
            "title": "Tut#3",
            "description": "Tut#3 Description",
            "createdAt": "2020-04-24T03:27:53.000Z",
            "updatedAt": "2020-04-24T03:27:53.000Z",
            "tags": [
              {
                "id": 1,
                "name": "Tag#1"
              },
              {
                "id": 2,
                "name": "Tag#2"
              }
            ]
          },
          {
            "id": 4,
            "title": "Tut#4",
            "description": "Tut#4 Description",
            "createdAt": "2020-04-24T03:27:53.000Z",
            "updatedAt": "2020-04-24T03:27:53.000Z",
            "tags": [
              {
                "id": 2,
                "name": "Tag#2"
              }
            ]
          }
        ]
        */
        
  };
  
  // db.sequelize.sync();
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    run();
  });
  
  // ??? First, we import our database object and controller above.
  // ??? Then we call Sequelize sync() method.
  
  // db.sequelize.sync();
  // In development, you may need to drop existing tables and re-sync database. Just use force: true as following code:
  
  
  // db.sequelize.sync({ force: true }).then(() => {
  //   console.log("Drop and re-sync db.");
  // });
  // Now, we???re gonna test the result by putting the next lines of code inside run() function.
  // You can run the this Sequelize Many-to-Many Node.js application with command: node server.js.
  
  // Create Tutorials
  
  



















  return (
    <div className="App">
      Hola Sequelize!!!
    </div>
  );
}

export default App;
