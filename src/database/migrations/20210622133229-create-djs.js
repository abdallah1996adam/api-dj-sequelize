module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable("Djs", {
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
    await queryInterface.dropTable("Djs");
  },
};
