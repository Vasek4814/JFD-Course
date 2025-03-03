class CarService {
  static DefaultWorkingHours = {
    from: '9:00',
    till: '20:00',
  };
  constructor(name, workingHours) {
    this.name = name;
    this.workingHours = workingHours || CarService.DefaultWorkingHours;
  }
  repairCar(carName) {
    const from = Number(this.workingHours.from.split(':')[0]);
    const till = Number(this.workingHours.till.split(':')[0]);
    const currentHours = new Date().getHours();
    if (!carName) {
      console.error(
        'Вам необходимо указать название машины, чтоб её отремонтровали'
      );
    } else if (currentHours < from && currentHours > till) {
      console.log('К сожалению, мы сейчас закрыты. Приходите завтра');
    } else
      console.log(
        `Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста!`
      );
  }
}
const carService = new CarService('RepairCarNow', {
  from: '8:00',
  till: '20:00',
});
carService.repairCar('BMW');
