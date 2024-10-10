(function () {
   'use strict';

   class Task {
      constructor(message) {
         this.message = message ?? 'дефолтное значение';
      }
      run = () => console.log(this.message)
   }

   class User {
       constructor(task) {
           this.task = task;
       }

       do = () => this.task
   }

   const user = new User(Task);
   const task = new Task('писать код');

   user.do(task.run());

})();
