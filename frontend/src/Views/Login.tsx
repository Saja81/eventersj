import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        const token = data.token;

        // Om jag kommer in, skcikas til sida du är inloggad. Nu kommer jag till mitt kontosida. Om jag går till annan sida och ska gå tillbaka, så är jag utloggad. Hur ska jag veta/hålla koll påp att jag har loggat in. Detta är via att sätta ett token, alernativt toggla en bolean beroende på hur noga är statehanetringen för uppgiften. Skapa funktion som kollar om det finns värde i lokal storage.

        // Protected routes/toggla bolean. Kolla upp det. Vad hände rom jag inte har ett konto. Jag kommer inte åt alla rotes om jag inte uppfyller ett visst krav.  Om jag har en rout, mitt konto lder till /profile, har bara tillgång om jag togglat en bolean. Toggla true till false.

        // Sparar token i localStorage eller användarstatet
        // Exempelvis: localStorage.setItem('authToken', token);

        // Navigera till en annan sida efter inloggning
        navigate("/profile", {
          state: { username: username },
        });
      } else {
        setErrorMessage("Inloggningsuppgifterna är felaktiga.");
      }
    } catch (error) {
      setErrorMessage("Ett fel uppstod vid inloggning.");
    }
  };

  return (
    <div className="login-container">
      <h3>Logga in</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="exempel@mail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Lösenord</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="********"
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Logga in</button>
      </form>
      <p>eller</p>
      <div className="signup-link">
        <Link to="/signup">Skapa ett konto</Link>
      </div>
    </div>
  );
};

export default LoginPage;
