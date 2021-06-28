const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class MusicalGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Djs, {
        through: "MusicalGenres",
        foreignKey: "muscialgenre_id",
        as: "Djs",
      });
    }
  }
  MusicalGenre.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "MusicalGenres",
    }
  );
  return MusicalGenre;
};
