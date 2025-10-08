import { useState, type FormEvent } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/input";
import { auth } from "../../services/firebaseConnection";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Preencha todos os campos");
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/admin", { replace: true });
        console.log("logado com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Personal
          <span className="bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl flex flex-col px-2"
      >
        <Input
          type="email"
          value={email}
          placeholder="Digite seu email.."
          onChange={(e) => setEmail(e.target.value)}
        ></Input>

        <Input
          type="password"
          value={password}
          placeholder="*******"
          onChange={(e) => setPassoword(e.target.value)}
        ></Input>

        <button
          type="submit"
          className="h-9 bg-blue-500 rounded border-0 text-lg font-medium text-white cursor-pointer"
        >
          Acessar
        </button>
      </form>
    </div>
  );
}

export default Login;
