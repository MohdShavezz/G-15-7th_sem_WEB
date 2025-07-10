const userIdInput = document.getElementById("userId");
const getUserAsyncBtn = document.getElementById("getUserAsyncBtn");
const getAllUsersBtn = document.getElementById("getAllUsersBtn");
const userInfo = document.getElementById("userInfo");
const userList = document.getElementById("userList");
const loading = document.getElementById("loading");

function toggleLoading(show) {
  loading.style.display = show ? "block" : "none";
}

function validateUserId() {
  const id = parseInt(userIdInput.value);
  if (id >= 1 && id <= 10) return id;
  alert("Enter a number from 1 to 10");
  return null;
}

async function getUserWithAsync() {
  const id = validateUserId();
  if (!id) return;

  toggleLoading(true);
  userInfo.innerHTML = '';
  userList.innerHTML = '';

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) throw new Error("User not found");
    const user = await res.json();

    userInfo.innerHTML = `
      <p><b>Name:</b> ${user.name}</p>
      <p><b>Email:</b> ${user.email}</p>
      <p><b>Phone:</b> ${user.phone}</p>
      <p><b>Website:</b> ${user.website}</p>
    `;
  } catch (err) {
    userInfo.innerHTML = `<p style="color:red;">${err.message}</p>`;
  } finally {
    toggleLoading(false);
  }
}

async function getAllUsers() {
  toggleLoading(true);
  userInfo.innerHTML = '';
  userList.innerHTML = '';

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    setTimeout(() => {
      users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
      });
      toggleLoading(false);
    }, 2000);
  } catch {
    userList.innerHTML = `<p style="color:red;">Failed to load users</p>`;
    toggleLoading(false);
  }
}

getUserAsyncBtn.addEventListener("click", getUserWithAsync);
getAllUsersBtn.addEventListener("click", getAllUsers);
