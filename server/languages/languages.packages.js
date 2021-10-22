const Languages = {
  en: "en",
  cn: "cn",
  es: "es",
};
const LanguagePackages = {
  IAmARider: "IAmARider",
  IAmADriver: "IAmADriver",
  Email: "Email", // Reuse Signup page
  Password: "Password", // Reuse Signup page
  LogIn: "LogIn", // Reuse Signup page
  DonnotHaveAnAccount: "DonnotHaveAnAccount",
  Signup: "Signup", // Reuse Signup page
  // Sign up page
  IWantToRide: "IWantToRide",
  IWantToDrive: "IWantToDrive",
  FirstName: "FirstName",
  LastName: "LastName",
  Phone: "Phone",
  AlreadyHaveAnAccount: "AlreadyHaveAnAccount",
  CarMake: "CarMake",
  CarModel: "CarModel",
  CarColor: "CarColor",
  CarCapacity: "CarCapacity",
  LicensePlate: "LicensePlate",
  Theme: "Theme",
  SelectARole: "SelectARole",
  Languages: "Languages",
  Logout: "Logout",
  // Driver Arrived & Arrived
  ArrivedAtDestination: "ArrivedAtDestination",
  HowWasYourTrip: "HowWasYourTrip",
  // Driver Pickup
  PickingUp: "PickingUp",
  PickedUp: "PickedUp",
  // On The way
  OnTheWay: "OnTheWay",
  Arrived: "Arrived",
  // Finding driver page
  LookingForNearbyDrivers: "LookingForNearbyDrivers",
  // SearchTrip
  Hello: "Hello",
  Mi: "Mi",
};

const EnPackage = {
  [LanguagePackages.IAmARider]: "I am a rider",
  [LanguagePackages.IAmADriver]: "I am a driver",
  [LanguagePackages.Email]: "Email",
  [LanguagePackages.Password]: "Password",
  [LanguagePackages.LogIn]: "Log in",
  [LanguagePackages.DonnotHaveAnAccount]: "Don't have an account?",
  [LanguagePackages.Signup]: "Sign up",
  [LanguagePackages.Phone]: "Phone",
  [LanguagePackages.IWantToDrive]: "I want to drive",
  [LanguagePackages.IWantToRide]: "I want to ride",
  [LanguagePackages.FirstName]: "First name",
  [LanguagePackages.LastName]: "Last name",
  [LanguagePackages.AlreadyHaveAnAccount]: "Already have an account?",
  [LanguagePackages.CarMake]: "Car make",
  [LanguagePackages.CarModel]: "Car model",
  [LanguagePackages.CarColor]: "Car color",
  [LanguagePackages.CarCapacity]: "Car capacity",
  [LanguagePackages.LicensePlate]: "License plate",
  [LanguagePackages.Theme]: "Theme",
  [LanguagePackages.SelectARole]: "Select a role",
  [LanguagePackages.Languages]: "Languages",
  [LanguagePackages.Logout]: "Logout",
  [LanguagePackages.ArrivedAtDestination]: "Arrived At Destination",
  [LanguagePackages.HowWasYourTrip]: "How was your trip?",
  [LanguagePackages.PickedUp]: "Picked up",
  [LanguagePackages.PickingUp]: "Picking up",
  [LanguagePackages.OnTheWay]: "On the way...",
  [LanguagePackages.Arrived]: "Arrived",
  [LanguagePackages.LookingForNearbyDrivers]: "Looking for near by drivers",
  [LanguagePackages.Hello]: "Hello",
  [LanguagePackages.Mi]: "mi",
};

const CnPackage = {
  [LanguagePackages.IAmARider]: "我是乘客",
  [LanguagePackages.IAmADriver]: "我是司机",
  [LanguagePackages.Email]: "邮箱",
  [LanguagePackages.Password]: "密码",
  [LanguagePackages.LogIn]: "登录",
  [LanguagePackages.DonnotHaveAnAccount]: "还没有账号？",
  [LanguagePackages.Signup]: "注册",
  [LanguagePackages.Phone]: "手机号",
  [LanguagePackages.IWantToDrive]: "我想驾驶",
  [LanguagePackages.IWantToRide]: "我想乘坐",
  [LanguagePackages.FirstName]: "名",
  [LanguagePackages.LastName]: "姓",
  [LanguagePackages.AlreadyHaveAnAccount]: "已经有账号？",
  [LanguagePackages.CarMake]: "汽车品牌",
  [LanguagePackages.CarModel]: "汽车型号",
  [LanguagePackages.CarColor]: "汽车颜色",
  [LanguagePackages.CarCapacity]: "汽车载客量",
  [LanguagePackages.LicensePlate]: "汽车牌照",
  [LanguagePackages.Theme]: "主题",
  [LanguagePackages.SelectARole]: "选择角色",
  [LanguagePackages.Languages]: "语言",
  [LanguagePackages.Logout]: "登出",
  [LanguagePackages.ArrivedAtDestination]: "已到达终点",
  [LanguagePackages.HowWasYourTrip]: "旅途怎么样？",
  [LanguagePackages.PickingUp]: "正在支付中...",
  [LanguagePackages.PickedUp]: "支付完成",
  [LanguagePackages.OnTheWay]: "正在路上...",
  [LanguagePackages.Arrived]: "已到达",
  [LanguagePackages.LookingForNearbyDrivers]: "正在寻找附近的司机...",
  [LanguagePackages.Hello]: "你好",
  [LanguagePackages.Mi]: "英里",
};

const EsPackage = {
  [LanguagePackages.IAmARider]: "Soy un pasajero",
  [LanguagePackages.IAmADriver]: "Soy un conductor",
  [LanguagePackages.Email]: "Correo electrónico",
  [LanguagePackages.Password]: "Contraseña",
  [LanguagePackages.LogIn]: "Iniciar sesión",
  [LanguagePackages.DonnotHaveAnAccount]: "¿No tienes una cuenta?",
  [LanguagePackages.Signup]: "Registrate",
  [LanguagePackages.Phone]: "Teléfono",
  [LanguagePackages.IWantToDrive]: "Quiero ser conductor",
  [LanguagePackages.IWantToRide]: "Quiero ser pasajero",
  [LanguagePackages.FirstName]: "Nombre",
  [LanguagePackages.LastName]: "Apellido",
  [LanguagePackages.AlreadyHaveAnAccount]: "¿Ya tienes una cuenta?",
  [LanguagePackages.CarMake]: "Marca del coche",
  [LanguagePackages.CarModel]: "Modelo del coche",
  [LanguagePackages.CarColor]: "Color del coche",
  [LanguagePackages.CarCapacity]: "Capacidad del coche",
  [LanguagePackages.LicensePlate]: "Placa",
  [LanguagePackages.Theme]: "Tema",
  [LanguagePackages.SelectARole]: "Seleccionar un rol",
  [LanguagePackages.Languages]: "Idioma",
  [LanguagePackages.Logout]: "Cerrar sesión",
  [LanguagePackages.ArrivedAtDestination]: "Ha llegado al final",
  [LanguagePackages.HowWasYourTrip]: "Cómo fue su viaje",
  [LanguagePackages.PickingUp]: "Pago...",
  [LanguagePackages.PickedUp]: "Pago completado",
  [LanguagePackages.OnTheWay]: "En camino...",
  [LanguagePackages.Arrived]: "Llegó",
  [LanguagePackages.LookingForNearbyDrivers]:
    "Buscando un conductor cercano ...",
  [LanguagePackages.Hello]: "Hola",
  [LanguagePackages.Mi]: "milla",
};

module.exports = {
  EnPackage,
  CnPackage,
  Languages,
  EsPackage,
};
