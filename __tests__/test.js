import httpMocks from 'node-mocks-http';
import Location from '../src';

describe('fail response', () => {
  const res = httpMocks.createResponse({
    locals: {
      data: { message: 'invalid query', query: 'xxx', status: 'fail' },
    },
  });

  const httpClient = {
    get() {
      return Promise.resolve(res.locals);
    },
  };

  test('status: "fail"', async () => {
    try {
      await new Location(httpClient).getLocationData('0.0.0.0');
    } catch (e) {
      expect(e).toEqual({ message: 'invalid query', query: 'xxx', status: 'fail' });
    }
  });
});

describe('success response', () => {
  const res2 = httpMocks.createResponse({
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

  const httpClient2 = {
    get() {
      return Promise.resolve(res2.locals);
    },
  };

  test('status: "success"', async () => {
    try {
      await new Location(httpClient2).getLocationData('1.2.3.4');
    } catch (e) {
      expect(e).toEqual(res2.locals.data);
    }
  });
});
