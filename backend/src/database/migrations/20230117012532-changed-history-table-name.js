module.exports = {
  async up(queryInterface) {
    await queryInterface.renameTable('history', 'histories');
  },
};
