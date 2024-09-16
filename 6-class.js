class Car {
    #make;
    #model;
    #run;
    constructor(make, model,run){
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get run (){
        return this.#run;
    }

    set run (newRun){
        this.#run = newRun
    }

    info = () => `Марка: ${this.#make}, Модель: ${this.#model}, Пробег: ${this.#run}км`
}



const car = new Car('BMW', '320d', '1000')
