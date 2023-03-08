import app from "./src/Main.js";

const port = 3000
app.listen(port, () => {
    console.log(`Api rodando em: http://localhost:${port}`)
})