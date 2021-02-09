module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-54-220-35-19',
        port: '5432',
        database: 'dekbog319ffhgo',
        username: 'pdgxtqqbsoabni',
        password: 'd0ac89e01d08a55661cc0c148563425eced68ce97ceaf037a8336c4dbd1e9b1a',
      },
      options: {
        ssl: false,
      },
    },
  },
});
