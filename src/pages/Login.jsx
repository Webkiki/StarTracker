import Layout from "../layouts/Layout";
import { useAuth } from "../context/AuthContext"; // Contextul de autentificare
import { useForm } from "../hooks/useForm"; // Hook-ul personalizat pentru gestionarea formularului
import { InputGroup } from "../components/InputGroup";
import { useState } from "react";

export const Login = () => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validare date
    if (!values.email || !values.password) {
      setError("Te rog să completezi toate câmpurile.");
      return;
    }

    // Folosim functia login din context pentru a autentifica utilizatorul
    login(values);
  };

  return (
    <Layout>
      <div className="min-h-screen flex justify-center items-center  p-4">
        <div className="w-full sm:w-96 bg-slate-900 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Login
          </h1>

          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}

          <form onSubmit={handleSubmit}>
            <InputGroup
              name={"email"}
              type={"email"}
              value={values.email}
              handleChange={handleChange}
              placeholder="Email"
            />
            <InputGroup
              name={"password"}
              type={"password"}
              value={values.password}
              handleChange={handleChange}
              placeholder="Parolă"
            />

            <button
              type="submit"
              className="w-full py-2 bg-green-900 text-white rounded mt-4 hover:bg-green-700 transition duration-200"
            >
              Login
            </button>
          </form>

          <div className="mt-4 text-center text-sm text-gray-400">
            <p>
              <a
                href="/forgot-password"
                className="text-blue-400 hover:underline"
              >
                Ai uitat parola?
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
