export class Room {
  id: number;
  roomName: string;
  width: number;
  height: number;
  posX: number;
  posY: number;
  light: number;
  temp: number;
  music: number;
  blinding: boolean;

  constructor(room: Room) {
    if (room) {
      this.id = room.id;
      this.roomName = room.roomName;
      this.width = room.width;
      this.height = room.height;
      this.posX = room.posX;
      this.posY = room.posY;
      this.light = room.light;
      this.temp = room.temp;
      this.music = room.music;
      this.blinding = room.blinding;
    }
  }
}
