import httpMocks from 'node-mocks-http';
import Location from '../src';

describe('success response', () => {
  const res = httpMocks.createResponse({
    locals: {
      data: {
        as: '',
        city: 'South Brisbane',
        country: 'Australia',
        countryCode: 'AU',
        isp: 'APNIC Debogon Project',
        lat: -27.4748,
        lon: 153.017,
        org: 'APNIC Debogon Project',
        query: '1.2.3.4',
        region: '',
        regionName: 'Queensland',
        status: 'success',
        timezone: 'Australia/Brisbane',
        zip: '4101',
      },
    },
  });

  const httpClient = {
    get() {
      return Promise.resolve(res.locals);
    },
  };

  test('status: "success"', async () => {
    await expect(new Location(httpClient).getLocationData('1.2.3.4')).resolves.toEqual(res.locals.data);
  });
});
