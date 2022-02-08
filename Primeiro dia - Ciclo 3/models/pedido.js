'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente);//1 Pedido possui apenas 1(belongsTo) cliente.
      Pedido.belongsToMany(models.Servico,{
        through: 'ItemPedido'
      });//Muitos pedidos podem ter muitos(belongsToMany) servicos, através da entidade associativa({trough: 'ItemPedido'}).
    }
  }
  Pedido.init({
    dataPedido: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};