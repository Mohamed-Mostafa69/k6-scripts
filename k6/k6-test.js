import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
          //spike test
    { duration: '0.2m', target: 100 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '0.5m', target: 2500 },
    { duration: '1m', target: 5000 },
    { duration: '1m', target: 2500 },
    { duration: '1m', target: 0 }, // ramp-down to 0 users
          //stress test
    //{ duration: '2m', target: 100 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    //{ duration: '4m', target: 200 }, // stay at higher 200 users for 30 minutes
    //{ duration: '2m', target: 0 }, // ramp-down to 0 users
  ],
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    //http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
  },
};

export default () => {
  const req1 = {
    method: 'GET',
    url: 'http://dev-kts-waf.spacejat.com',
  };
  const req2 = {
    method: 'GET',
    url: 'http://dev-kts-waf.spacejat.com',
  };
  const responses = http.batch([req1, req2]);
  //const urlRes = http.get('http://dev-kts-waf.spacejat.com');
 // check(responses[0], {
 //   'main page status was 200': (res) => res.status === 200,
 // });
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};

