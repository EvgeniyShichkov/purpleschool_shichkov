export default class Task {
   constructor(message) {
      this.message = message ?? 'дефолтное значение';
   }
   run = () => console.log(this.message)
}