import express from "express";
import UserModel from "../src/models/user.model.js";

const app = express();
app.use(express.json());

// listar usuários
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// listar usuário por id
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// adicionar usuário
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// atualizar usuário
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// remover usuário
app.delete("/users/:id", async (req, res) => {
    try {
      const id = req.params.id;
      const user = await UserModel.findByIdAndDelete(id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.listen(8080, () => {
  console.log("Rodando...");
});