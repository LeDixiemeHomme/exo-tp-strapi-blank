module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        host: 'ec2-54-220-35-19.eu-west-1.compute.amazonaws.com',
        port:5432,
        database: 'debl63mhk7ff8g',
        password:'ab5510b4857a22935cc78b9dfe7518053a4dbec20f8bcc5cf61aab4e0dd3fc74'
      },
      options: {
        rejectUnauthorized: false
      },
    },
  },
});
