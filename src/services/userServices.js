//funciones que tienen que ver con el sistema de autenticacion

export async function login(email, password) {
    console.log("Soy un console log del servicio");
    console.log(email, password);
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({ email: email, password: password }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data);

        if (response.status === 200) {
            localStorage.setItem("access_token", data.access_token)
            return true
        }
        if (response.status === 404) {
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }
}

export async function signup(email, password) {
    console.log("Soy un console log del servicio (signup)");
    console.log(email, password);

    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log("Respuesta signup:", data);

        if (response.status === 201) {
            // opcional: si en el futuro tu backend devuelve token, se guarda aquí
            // localStorage.setItem("access_token", data.access_token);
            return true;
        }

        return false;

    } catch (error) {
        console.error("Error en signup:", error);
        return false;
    }
}

//declaracion de funcion para validar la autenticacion
export async function validAuth() {
  let token = localStorage.getItem("access_token");
  if (!token) return false; 

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/valid-auth`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    });

    if (!response.ok) return false; 

    const result = await response.json();
    return result.logged; 
  } catch (error) {
    console.error(error);
    return false;
  }
}