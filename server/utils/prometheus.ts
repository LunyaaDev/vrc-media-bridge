import { Counter, Histogram, register } from 'prom-client'

export const prometheusPlatformRequestsTotal = new Counter({
  name: 'vrcmb_platform_requests_total',
  help: 'Total number of requests to video providers',
  labelNames: ['provider', 'successful', 'cached'],
})

export const prometheusPlatformRequestDurationSeconds = new Histogram({
  name: 'vrcmb_platform_request_duration_seconds',
  help: 'Duration of video requests in seconds',
  labelNames: ['provider', 'successful', 'cached'],
  buckets: [0.1, 0.3, 1, 3, 5],
})

register.registerMetric(prometheusPlatformRequestsTotal)
register.registerMetric(prometheusPlatformRequestDurationSeconds)
