
import { action, makeObservable, observable } from "mobx"

const list = 
[{
      name: "קפיטריה",
      descripition: "שתיה חמה וקרה ,גלידות ,חטיפים",
      child: "30",
      adult: "20",
      img: "https://i.pinimg.com/564x/14/48/08/144808bff20252a67e4f9193c671358a.jpg"

  },

  {
      name: "ג'קוזי",
      descripition: "כניסה ליום שלם",
      child: "50",
      adult: "40",
      img: "https://www.ace.co.il/media/catalog/product/cache/230be187dd2874b1367221e12e8f5484/s/c/screenshot_2023-09-13_124845.png"


  },
  {
      name: "ספא",
      descripition: "שעתים ",
      child: "20",
      adult: "30",
      img: "https://i.pinimg.com/564x/52/65/1f/52651f9cb836285786e0d5d7aed00bb9.jpg"

  },
  {
      name:" חדר כושר",
      descripition:"מאמנים מומחים ,משקולות וציוד אירובי ",
      child: "20",
      adult: "70",
      img: "https://i.pinimg.com/564x/a7/d0/f5/a7d0f56771b222ee3a162ae97987bed0.jpg"
  }, 
];

class DataStore {
  services = []
  businessData = {}
  isLogin = false;
  meetings = [];


  
  constructor() {
    makeObservable(this, {
      services: observable,
      businessData: observable,
      isLogin: observable,
      meetings: observable,
      setServices: action,
      addService: action,
      setMeetings: action,
      setBusinessData: action
    })
  }

  setBusinessData(data) {
    this.businessData = data
  }
  setServices(data) {
    this.services = [...list, ...data]

  }
  setMeetings(data) {
    this.meetings = data
  }
  addService(data) {
    this.services = [...this.services, data];
  }
  addnewAppointment(data) {
    this.meetings = [...this.meetings, data];
  }

}

export default new DataStore()