import { WeatherTempPipe } from './weather-temp.pipe';

describe('WeatherTempPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherTempPipe();
    expect(pipe).toBeTruthy();
  });
});
