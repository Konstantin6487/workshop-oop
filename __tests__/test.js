import nock from 'nock';
import Location from '../src';

const url = 'http://ip-api.com/json';
const location = new Location();

describe('success response', () => {
  nock.disableNetConnect();

  nock(url)
    .get('/1.1.1.1')
    .reply(200, {
      status: 'success',
      country: 'Russia',
    });

  test('status: "success"', () => expect(location.getLocationData('1.1.1.1')).resolves.toEqual({
    status: 'success',
    country: 'Russia',
  }));
});

describe('fail response', () => {
  nock.disableNetConnect();
  nock(url)
    .get('/0.0.0.0')
    .reply(200, {
      status: 'fail',
    });

  test('status: "fail"', () => expect(location.getLocationData('0.0.0.0')).resolves.toEqual({
    status: 'fail',
  }));
});
