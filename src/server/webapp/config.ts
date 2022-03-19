export const WebappConfig = () => ({
  port: parseInt(process.env.NEST_PORT, 10) || 3000,
});
