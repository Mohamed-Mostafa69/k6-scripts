import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // Key configurations for Stress in this section
  stages: [
          //spike test
   // { duration: '0.1m', target: 100 }, // traffic ramp-up from 1 to a higher 200 users over 10 minutes.
    { duration: '1m', target: 5000 },
    { duration: '1m', target: 10000 },
    { duration: '1m', target: 20000 },
    { duration: '1m', target: 30000 },
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
  const urlRes = http.get('http://dev-kts-waf.spacejat.com');
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};
