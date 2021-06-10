'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Generos', [
			{
				nome: 'Terror',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				nome: 'Suspense',
				createdAt: new Date(),
				updatedAt: new Date()
			},
	], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
