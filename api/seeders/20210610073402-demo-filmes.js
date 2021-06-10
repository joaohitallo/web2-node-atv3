'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Filmes', [
      {
				nome: 'Cuidado Com Quem Chama',
        sinopse: 'Grupo de amigos contrata um médium para fazer uma sessão por Zoom na quarentena. As coisas pareciam bem, até que um espírito maligno começa a invadir suas casas e eles percebem que podem não sobreviver à noite.',
				ano: '2020',
        createdAt: new Date(),
        generos_id: 2,
				updatedAt: new Date()
			},
      {
				nome: 'Ilha do Medo',
        sinopse: 'Na década de 50, a fuga de uma assassina leva o detetive Teddy Daniels e seu parceiro a investigarem o seu desaparecimento de um quarto trancado em um hospital psiquiátrico. Lá, uma rebelião se inicia e o agente terá que enfrentar seus próprios medos.',
				ano: '2020',
        createdAt: new Date(),
        generos_id: 3,
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
