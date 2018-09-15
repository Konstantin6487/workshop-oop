import httpMocks from 'node-mocks-http';
import Location from '../src';

const location = new Location();

describe('success response', () => {
  const res = httpMocks.createResponse({
    locals: { data: { status: 'success', country: 'Russia' } },
  });

  test('status: "success"', () => expect(location.getLocationData('1.1.1.1', res.locals)).resolves.toEqual({
    status: 'success',
    country: 'Russia',
  }));
});

describe('fail response', () => {
  const res = httpMocks.createResponse({
    locals: { data: { status: 'fail' } },
  });

  test('status: "fail"', () => expect(location.getLocationData('0.0.0.0', res.locals)).resolves.toEqual({
    status: 'fail',
  }));
});
