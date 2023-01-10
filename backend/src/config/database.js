module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'myfinance',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
