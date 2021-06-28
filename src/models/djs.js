const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Djs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Clubs);
      this.belongsToMany(models.MusicalGenres, {
        through: "DjMusicalGenre",
        foreignKey: "dj_id",
        as: "muscial_genres",
      });
    }
  }
  Djs.init(
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
      url_name: {
        type: DataTypes.STRING,
      },
      biography: {
        type: DataTypes.STRING,
      },
      soundcloud: {
        type: DataTypes.STRING,
      },
      facebook: {
        type: DataTypes.STRING,
      },
      instgram: {
        type: DataTypes.STRING,
      },
      spoyify: {
        type: DataTypes.STRING,
      },
      beatport: {
        type: DataTypes.STRING,
      },
      mixcloud: {
        type: DataTypes.STRING,
      },
      youtube: {
        type: DataTypes.STRING,
      },
      club_id: {
        type: DataTypes.UUID,
        references: {
          model: "Clubs",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Djs",
    }
  );
  return Djs;
};
