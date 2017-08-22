const airports: IAirportData[] = [
  {
    'id': 1,
    'name': 'Vancouver International Airport',
    'continent': 'North America',
    'country': 'Canada',
    'city': 'Richmond',
    'phone': '+1 604-207-7077',
    'image': 'can_01.jpg',
    'social_name': '@vancouver_air',
  },
  {
    'id': 2,
    'name': 'Nice Côte d\'Azur Airport',
    'continent': 'Europe',
    'country': 'France',
    'city': 'Nice',
    'phone': '+33 820 42 33 33',
    'image': 'fr_01.jpg',
    'social_name': '@nice_air',
  },
  {
    'id': 3,
    'name': 'Frankfurt Airport',
    'continent': 'Europe',
    'country': 'Germany',
    'city': 'Frankfurt',
    'phone': '+49 180 6 3724636',
    'image': 'ger_01.jpg',
    'social_name': '@ger_air',
  },
  {
    'id': 4,
    'name': 'Aeroporto di Siena',
    'continent': 'Europe',
    'country': 'Italy',
    'city': 'Siena Ampugnano',
    'phone': '+39 0577 314772',
    'image': 'ita_01.jpg',
    'social_name': '@ita_air',
  },
  {
    'id': 5,
    'name': 'Tokyo International Airport',
    'continent': 'Asia',
    'country': 'Japan',
    'city': 'Tokyo',
    'phone': '+81 3-5757-8111',
    'image': 'jap_01.jpg',
    'social_name': '@jap_air',
  },
  {
    'id': 6,
    'name': 'Domodedovo International Airport',
    'continent': 'Europe',
    'country': 'Russia',
    'city': 'Moscow',
    'phone': '+7 495 933-66-66',
    'image': 'rus_01.jpg',
    'social_name': '@rus_air',
  },
  {
    'id': 7,
    'name': 'Heathrow Airport',
    'continent': 'Europe',
    'country': 'United Kingdom',
    'city': 'London',
    'phone': '+44 844 335 1801',
    'image': 'uk_01.jpg',
    'social_name': '@uk_air',
  },
  {
    'id': 8,
    'name': 'O\'Hare International Airport',
    'continent': 'North America',
    'country': 'United States',
    'city': 'Chicago',
    'phone': '+1 800-832-6352',
    'image': 'us_01.jpg',
    'social_name': '@us_air',
  },
];

const socials: ISocialsData[] = [
  {
    id: 1, username: '@vancouver_air',
    likes: 309081, followers: 5774,
    image: 'can_02.jpg'
  },
  {
    id: 1, username: '@nice_air',
    likes: 185825, followers: 3231,
    image: 'fr_02.jpg'
  },
  {
    id: 1, username: '@ger_air',
    likes: 943667, followers: 5987,
    image: 'ger_02.jpg'
  },
  {
    id: 1, username: '@ita_air',
    likes: 905223, followers: 8196,
    image: 'ita_02.jpg'
  },
  {
    id: 1, username: '@jap_air',
    likes: 30244, followers: 3375,
    image: 'jap_02.jpg'
  },
  {
    id: 1, username: '@rus_air',
    likes: 95140, followers: 8737,
    image: 'rus_02.jpg'
  },
  {
    id: 1, username: '@uk_air',
    likes: 59682, followers: 9236,
    image: 'uk_02.jpg'
  },
  {
    id: 1, username: '@us_air',
    likes: 304480, followers: 7927,
    image: 'us_02.jpg'
  },
];

export let WeatherTypes = {
  sun: 1,
  sun_cloud: 2,
  cloud: 3,
  rain: 4,
  storm: 5,
};

const weather: IWeatherData[] = [
  {
    city: 'Richmond',
    temp: 3,
    type: WeatherTypes.storm,
  },
  {
    city: 'Nice',
    temp: 15,
    type: WeatherTypes.rain,
  },
  {
    city: 'Frankfurt',
    temp: 22,
    type: WeatherTypes.cloud,
  },
  {
    city: 'Siena Ampugnano',
    temp: 29,
    type: WeatherTypes.sun_cloud,
  },
  {
    city: 'Tokyo',
    temp: 15,
    type: WeatherTypes.sun,
  },
  {
    city: 'Moscow',
    temp: -12,
    type: WeatherTypes.storm,
  },
  {
    city: 'London',
    temp: 7,
    type: WeatherTypes.sun_cloud,
  },
  {
    city: 'Chicago',
    temp: -1,
    type: WeatherTypes.rain,
  },
];

export class Airport implements IAirportData, IAirport {
  public id;
  public name;
  public continent;
  public country;
  public city;
  public phone;
  public image;
  public social_name;

  constructor(data: IAirportData) {
    this.id = data.id;
    this.name = data.name;
    this.continent = data.continent;
    this.country = data.country;
    this.city = data.city;
    this.phone = data.phone;
    this.image = data.image;
    this.social_name = data.social_name;
  }

  public getImage(): string {
    return this.image;
  }
}

export class SocialInfo implements ISocialsData, ISocials {
  public id;
  public username;
  public likes;
  public followers;
  public image;

  constructor(data: ISocialsData) {
    this.id = data.id;
    this.username = data.username;
    this.likes = data.likes;
    this.followers = data.followers;
    this.image = data.image;
  }

  getImage(): string {
    return this.image;
  }
}

export class WeatherInfo implements IWeatherData {
  city: string;
  temp: number;
  type: number;

  constructor(data: IWeatherData) {
    this.city = data.city;
    this.temp = data.temp;
    this.type = data.type;
  }
}

export class Api {
  private _airports: IAirportData[];
  private _socials: ISocialsData[];
  private _weather: IWeatherData[];

  constructor() {
    this._airports = airports;
    this._socials = socials;
    this._weather = weather;
  }

  public getAirportsData(): IAirportData[] {
    return this._airports;
  }

  public getSocialInfo(username: string): SocialInfo {
    for (const social of this._socials) {
      if (social.username === username) {
        return new SocialInfo(social);
      }
    }
    return null;
  }

  public getWeatherInfo(city: string): WeatherInfo {
    for (const item of this._weather) {
      if (item.city === city) {
        return new WeatherInfo(item);
      }
    }
    return null;
  }
}
