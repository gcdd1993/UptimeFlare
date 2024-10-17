const pageConfig = {
  // Title for your status page
  title: '数字平台可用率监控',
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 1,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      id: 'bbs',
      name: '帆软论坛',
      method: 'GET',
      target: 'https://bbs.fanruan.com/topic',
      expectedCodes: [200],
      timeout: 5000,
    },
    {
      id: '2',
      name: '服务平台',
      method: 'GET',
      target: 'https://service.fanruan.com',
      expectedCodes: [200],
      timeout: 5000,
    },
    {
      id: '3',
      name: '帆软通行证',
      method: 'GET',
      target: 'https://fanruanclub.com/actuator/health/liveness',
      expectedCodes: [200],
      timeout: 5000,
    },
    {
      id: '4',
      name: '我的帆软首页',
      method: 'GET',
      target: 'https://home.fanruan.com',
      expectedCodes: [200],
      timeout: 5000,
    },
    {
      id: '5',
      name: '社区学院',
      method: 'GET',
      target: 'https://edu.fanruan.com/',
      expectedCodes: [200],
      timeout: 5000,
    },
    {
      id: '6',
      name: '文件预览',
      method: 'GET',
      target: 'https://knowhow.fanruan.com/preview/',
      expectedCodes: [200],
      timeout: 5000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: 'https://apprise.example.com/notify',
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: 'tgram://bottoken/ChatID',
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: 'Asia/Shanghai',
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string,
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
