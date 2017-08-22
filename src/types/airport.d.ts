interface IAirportData {
  id: number;
  name: string;
  continent: string;
  country: string;
  city: string;
  phone: string;
  image: string;
  social_name: string;
}

interface IAirport {
  getImage(): string;
}
