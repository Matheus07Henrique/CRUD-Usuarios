import mongoose from 'mongoose'

const connectDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@estudos-nodejs.5ue6xfx.mongodb.net/database?retryWrites=true&w=majority`,
        (error) => {
            if (error) return console.log('Não foi possível se conectar ao banco de dados!', error)
            return console.log('Conexão com o banco de dados realizada com sucesso!')
        }
    )
}

export default connectDatabase;