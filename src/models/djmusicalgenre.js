const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DjMusicalGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Djs, { foreignKey: "dj_id" });
      this.belongsTo(models.DjMusicalGenre, { foreignKey: "muscialgenre_id" });
    }
  }
  DjMusicalGenre.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      muscialgenre_id: {
        type: DataTypes.UUID,
        references: {
          model: "MusicalGenre",
          key: "id",
        },
      },
      dj_id: {
        type: DataTypes.UUID,
        references: {
          model: "Djs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "DjMusicalGenre",
    }
  );
  return DjMusicalGenre;
};
