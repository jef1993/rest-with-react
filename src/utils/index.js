export const register = async (username, email, password, setter) => {
  try {
    const response = await fetch(
      `http://${process.env.REACT_APP_DB_URL}/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    await setter(data);
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
    console.log(`login`, data);
    if (data.status === 200) await setter(data);

    if (data.accessToken) localStorage.setItem("myToken", data.accessToken);
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  localStorage.removeItem("myToken");
};

export const tokenLogin = async (setter, next, setter2, setter3) => {
  try {
    const token = localStorage.getItem("myToken");
    if (token) {
      const response = await fetch("http://localhost:5001/return", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.message !== "invalid token") {
        await setter(data);
      }
      // console.log(`token`, data);
      await setter2(data.user.username);
      await next(data.user.username, setter3);
    }
  } catch (error) {
    console.log(error);
  }
};

export const showPosts = async (username, setter) => {
  try {
    const response = await fetch(
      `http://localhost:5001/post/user=${username}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    // console.log(`posts`, data);
    await setter(data);
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(
      `http://${process.env.REACT_APP_DB_URL}/myPosts`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _id: id,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const searchPost = async (username, str, setter) => {
  try {
    const response = await fetch(
      `http://${process.env.REACT_APP_DB_URL}/myPosts/${username}/${str}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    await setter(data);
  } catch (error) {
    console.log(error);
  }
};
