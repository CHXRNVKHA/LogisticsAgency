const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Sequelize = require('sequelize');

require('dotenv').config();

const sequelize = new Sequelize(process.env.database, process.env.user, process.env.password, {
    dialect: 'mysql',
    host: process.env.host,
    define: {
      timestamps: false
    },
});
await sequelize.sync({ force: true });

const user = sequelize.define('user', {
    idUser: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        is: /^[0-9a-f]{64}$/i,
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'user',
    },
    tokens: [{
        token: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    }],
}, {
    tableName: 'User',
});

user.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({_id: user._id.toString() }, env.secretKeyforJsonwebtoken);
    user.tokens = user.tokens.concat({ token });
    await user.save();
    return token;
};

user.pre('save', async function(next){
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

module.exports = user