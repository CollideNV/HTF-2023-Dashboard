const {
  REACT_APP_DASHBOARD_API_URL,
  REACT_APP_DEADLINE,
  REACT_APP_DASHBOARD_WEBSOCKET_URL,
} = process.env;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dashboard_api: {
    http: "https://htf.collide.be",
    websocket: "wss://htf.collide.be",
  },
  deadline: REACT_APP_DEADLINE ?? "2023-11-09T16:00:00",
};
