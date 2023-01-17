module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn(
      'history',
      'comment',
      {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 0,
      },
    );
  },
};
