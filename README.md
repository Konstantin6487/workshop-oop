[![Build Status](https://travis-ci.org/Konstantin6487/workshop-oop.svg?branch=master)](https://travis-ci.org/Konstantin6487/workshop-oop)[![Maintainability](https://api.codeclimate.com/v1/badges/11643fefb5b03daf117e/maintainability)](https://codeclimate.com/github/Konstantin6487/workshop-oop/maintainability)[![Test Coverage](https://api.codeclimate.com/v1/badges/11643fefb5b03daf117e/test_coverage)](https://codeclimate.com/github/Konstantin6487/workshop-oop/test_coverage)

## Usage
```
const location = new Location();
location.getLocationData('1.2.3.4');
/*
{ as: '',
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
  zip: '4101' }
*/

```

## Start

```
$ make run
```

## Setup

```
$ make install
```

## Run tests

```
$ make test
```

## Build

```
$ make build
```

## ESLint

```
$ make lint
```
