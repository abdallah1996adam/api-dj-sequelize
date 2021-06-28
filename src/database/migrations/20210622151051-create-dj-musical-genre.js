module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("DjMusicalGenres", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      muscialgenre_id: {
        type: DataTypes.UUID,
        references: {
          model: "MusicalGenres",
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
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable("DjMusicalGenres");
  },
};
