import nock from 'nock';
import Location from '../src';

const url = 'http://ip-api.com/json';

describe('success response', () => {
  nock.disableNetConnect();

  nock(url)
    .get('/1.1.1.1')
    .reply(200, {
      status: 'success',
      country: 'Russia',
    });

  const location = new Location('1.1.1.1');

  test('status: "equal"', () => expect(location.selectData()).resolves.toEqual({
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

  const location = new Location('0.0.0.0');

  test('status: "fail"', () => expect(location.selectData()).resolves.toEqual({
    status: 'fail',
  }));
});
