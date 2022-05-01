const {Sequelize} = require('sequelize');

/**
 * Représentation du model CategorySubject appartenant à la table intermédiaire
 * de la relation Many To Many entre le model Category et Subject.
 * @param {Sequelize} sequelize
 * @returns
 */

module.exports = (sequelize) => {

    const CategorySubject = sequelize.define('categorySubject', {}, {
        timestamps: false,
        tableName: 'categorySubject'
    });

    return CategorySubject;
};
