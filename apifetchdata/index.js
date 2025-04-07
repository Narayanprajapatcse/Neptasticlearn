
const find = document.getElementById("click");
const userID = document.getElementById("input");
const userdata = document.getElementById("data");

find.addEventListener("click", async () => {
    const userId =parseInt(userID.value);

    if (isNaN(userId) || userId < 1 || userId > 10) {
        userdata.innerHTML = '<p> Invalid userID</p>';
        return;
    }

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error("User not found!");

        const user = await response.json();

        userdata.innerHTML = `
            <p>${user.name}</p>
            <p>Email: ${user.email}</p>
            <p>city :${user.address.city}</p>
            <p>company: ${user.company.name}</p>`;
    } catch (error) {
    userdata.innerHTML = '<p>Failed data</p>';  
    }
});
