'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Series', [
			{
				nome: 'A love so a beautiful',
        sinopse: 'A Love So Beautiful é uma websérie chinesa exibida pela Tencent Video entre 9 de novembro e 7 de dezembro de 2017, estrelada por Shen Yue e Hu Yitian. A série foi popular durante sua execução e recebeu críticas positivas por sua caracterização e história.',
				ano: '2017',
        createdAt: new Date(),
        generos_id: 1,
				updatedAt: new Date()
			},
			{
				nome: 'Start-up',
        sinopse: 'Seo Dal Mi sonha em se tornar o Steve Jobs da Coreia, e com seu primeiro amor genial, um investidor e um insider de negócios ao seu lado, seu sonho pode estar mais perto do que ela pensa.',
				ano: '2020',
        createdAt: new Date(),
        generos_id: 1,
				updatedAt: new Date()
			},
      {
				nome: 'Joathan o destruidor de restaurantes',
        sinopse: 'Joathan é um garoto com um fome insasiavel e é famoso por destruir e levar a falencias os estabelecimentos em que ele almoça ',
				ano: '2019',
        createdAt: new Date(),
        generos_id: 2,
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
