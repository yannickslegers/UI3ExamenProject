import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const rooms = [
      {
        'id': 1,
        'roomName': 'Keuken',
        'height': 250,
        'width': 150,
        'posX': 0,
        'posY': 0,
        'light': 25,
        'music': 25,
        'temp': 21
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
        'temp': 0
      },
      {
        'id': 3,
        'roomName': 'Eetkamer',
        'height': 175,
        'width': 250,
        'posX': 150,
        'posY': 0,
        'light': 0,
        'music': 0,
        'temp': 0
      },
      {
        'id': 4,
        'roomName': 'Living',
        'height': 325,
        'width': 250,
        'posX': 150,
        'posY': 175,
        'light': 0,
        'music': 0,
        'temp': 0
      },
      {
        'id': 5,
        'roomName': 'Veranda',
        'height': 175,
        'width': 150,
        'posX': 400,
        'posY': 0,
        'light': 0,
        'music': 0,
        'temp': 0
      },
      {
        'id': 6,
        'roomName': 'Bureau',
        'height': 150,
        'width': 150,
        'posX': 400,
        'posY': 175,
        'light': 0,
        'music': 0,
        'temp': 0
      },
      {
        'id': 7,
        'roomName': 'Hal',
        'height': 175,
        'width': 100,
        'posX': 400,
        'posY': 325,
        'light': 0,
        'music': 0,
        'temp': 0
      }
    ];

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
            'width': 100,
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
        'rooms' : []
      },
      {
        'id' : 2,
        'floorName' : 'Attic',
        'rooms' : []
      }
    ];

    // return {rooms};
    return {floors};
  }
}
