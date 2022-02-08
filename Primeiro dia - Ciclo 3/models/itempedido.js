'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemPedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ItemPedido.belongsTo(models.Pedido);//1 ItemPedido pertence a apenas 1 Pedido.
      ItemPedido.belongsTo(models.Servico);//1 ItemPedido pertence a apenas 1 Servico.
    }
  }
  ItemPedido.init({
    quantidade: DataTypes.INTEGER,
    valor: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'ItemPedido',
  });
  return ItemPedido;
};