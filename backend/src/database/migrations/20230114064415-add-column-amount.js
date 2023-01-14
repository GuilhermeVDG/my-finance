module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn(
      'users',
      'amount',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    );
  },
};
