import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const floors = [
      {
        'id' : 0,
        'floorName' : 'Ground Floor',
        'rooms' : [
          {
            'id': 1,
            'roomName': 'Kitchen',
            'height': 250,
            'width': 150,
            'posX': 0,
            'posY': 0,
            'light': 25,
            'music': 25,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 2,
            'roomName': 'Garage',
            'height': 250,
            'width': 150,
            'posX': 0,
            'posY': 250,
            'light': 50,
            'music': 0,
            'temp': 0,
            'blinding' : false
          },
          {
            'id': 3,
            'roomName': 'Dining room',
            'height': 175,
            'width': 250,
            'posX': 150,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 0,
            'blinding' : false
          },
          {
            'id': 4,
            'roomName': 'Living room',
            'height': 325,
            'width': 250,
            'posX': 150,
            'posY': 175,
            'light': 0,
            'music': 0,
            'temp': 0,
            'blinding' : false
          },
          {
            'id': 5,
            'roomName': 'Porch',
            'height': 175,
            'width': 150,
            'posX': 400,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 0,
            'blinding' : false
          },
          {
            'id': 6,
            'roomName': 'Office',
            'height': 150,
            'width': 150,
            'posX': 400,
            'posY': 175,
            'light': 0,
            'music': 0,
            'temp': 0,
            'blinding' : false
          },
          {
            'id': 7,
            'roomName': 'Hall',
            'height': 175,
            'width': 150,
            'posX': 400,
            'posY': 325,
            'light': 0,
            'music': 0,
            'temp': 0,
            'blinding' : false
          }
        ]
      },
      {
        'id' : 1,
        'floorName' : 'First Floor',
        'rooms' : [
          {
            'id': 8,
            'roomName': 'Bedroom 1',
            'height': 250,
            'width': 250,
            'posX': 0,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 9,
            'roomName': 'Bedroom 2',
            'height': 250,
            'width': 250,
            'posX': 0,
            'posY': 250,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 10,
            'roomName': 'Toilet',
            'height': 100,
            'width': 100,
            'posX': 250,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 11,
            'roomName': 'Hallway 1',
            'height': 300,
            'width': 100,
            'posX': 250,
            'posY': 100,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 12,
            'roomName': 'Hallway 2',
            'height': 100,
            'width': 200,
            'posX': 250,
            'posY': 400,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 13,
            'roomName': 'Bedroom 3',
            'height': 200,
            'width': 200,
            'posX': 350,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 14,
            'roomName': 'Bathroom 1',
            'height': 200,
            'width': 200,
            'posX': 350,
            'posY': 200,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 15,
            'roomName': 'Stairs 1',
            'height': 100,
            'width': 100,
            'posX': 450,
            'posY': 400,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          }
        ]
      },
      {
        'id' : 2,
        'floorName' : 'Attic',
        'rooms' : [
          {
            'id': 16,
            'roomName': 'Dressing',
            'height': 150,
            'width': 150,
            'posX': 0,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 17,
            'roomName': 'Bathroom 2',
            'height': 200,
            'width': 150,
            'posX': 0,
            'posY': 150,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 18,
            'roomName': 'Storage',
            'height': 150,
            'width': 150,
            'posX': 0,
            'posY': 350,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 19,
            'roomName': 'Master Bedroom',
            'height': 400,
            'width': 400,
            'posX': 150,
            'posY': 0,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 20,
            'roomName': 'Hallway 3',
            'height': 100,
            'width': 300,
            'posX': 150,
            'posY': 400,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          },
          {
            'id': 21,
            'roomName': 'Stairs 2',
            'height': 100,
            'width': 100,
            'posX': 450,
            'posY': 400,
            'light': 0,
            'music': 0,
            'temp': 21,
            'blinding' : false
          }
        ]
      }
    ];

    return {floors};
  }
}
