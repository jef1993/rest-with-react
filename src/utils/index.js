export const fetchRegister = async (username, email, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_DB_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    await setter(data);
    localStorage.setItem("myToken", data.accessToken);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password, setter) => {
  try {
    const response = await fetch(`http://localhost:5001/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();
    await setter(data);
    localStorage.setItem("myToken", data.accessToken);
  } catch (error) {
    console.log(error);
  }
};

export const tokenLogin = async (setter) => {
  try {
    const token = localStorage.getItem("myToken");
    const response = await fetch("http://localhost:5001/return", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();

    await setter(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
