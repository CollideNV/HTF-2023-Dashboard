const {
  REACT_APP_DEADLINE,
} = process.env;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dashboard_api: {
    http: "https://htf.collide.be",
    websocket: "wss://htf.collide.be",
  },
  deadline: REACT_APP_DEADLINE ?? "2023-11-09T16:00:00",
};
