import { useState, type FormEvent } from "react";

import { Link } from "react-router-dom";
import { Input } from "../../components/input";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassoword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log({
      email: email,
      password: password,
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
