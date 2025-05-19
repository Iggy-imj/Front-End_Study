const form = document.getElementById("signup-form");
const errElement = document.getElementById("signup-error");

form.addEventListener("submit", signupHandler);

function signupHandler(e) {
    e.preventDefault();
    fetchSignup();
}

async function fetchSignup() {
    try { 
        const newUser = {
            name: form.elements["name"].value,
            email: form.elements["email"].value,
            password: form.elements["password"].value,
            avatar: form.elements["avatar"].value
        };

        const res = await fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        });

        if(!res.ok) { 
            throw new Error("Error Sign Up! Check your data.");
        }
        window.location.replace("/login");
    } catch (err) {
        errElement.innerText = err.message;
    }
}