import { Api } from "./api.js";
import { ErrorExtendedHandler } from "./error.js";

const displayUsers = async () => {
  try {
    const users = await Api.getAll();
    const usersList = document.getElementById("container");
    usersList.innerHTML = "";
    users.forEach((user) => {
      const userElement = document.createElement("div");
      userElement.classList.add("list-item");
      userElement.innerHTML = `
        <h2 class="list-title">${user.name}</h2>
        <ul class="list-container">
            <li>Email: ${user.email}</li>
            <li>Status: ${user.status}</li>
            <li>Gender: ${user.gender}</li>
        </ul>
        <button class="edit-button" data-id="${user.id}">Edit</button>
        `;

      usersList.appendChild(userElement);
    });

    const editButtons = document.querySelectorAll(".edit-button");

    editButtons.forEach((button) => {
      button.addEventListener("click", async () => {
        const userId = button.dataset.id;
        const user = await Api.getOne(userId);
        const newName = prompt(`Enter new  name for ${user.name}:`);

        if (newName) {
          await Api.updateOne({ id: Number(userId), name: newName });
          await displayUsers();
        }
      });
    });
  } catch (error) {
    ErrorExtendedHandler.errorHandling(error);
    ErrorExtendedHandler.alertError(error);
  }
};

displayUsers()
  .then(() => {
    console.log("all users list for the first time");
  })
  .catch((error) => {
    console.log(error);
  });
