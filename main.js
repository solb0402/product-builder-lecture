const names = {
    male: {
        classic: ["James", "John", "Robert", "Michael", "William"],
        modern: ["Liam", "Noah", "Oliver", "Elijah", "William"],
        cute: ["Leo", "Milo", "Owen", "Finn", "Caleb"]
    },
    female: {
        classic: ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth"],
        modern: ["Olivia", "Emma", "Ava", "Charlotte", "Sophia"],
        cute: ["Lily", "Zoe", "Stella", "Chloe", "Mia"]
    }
};

const recommendBtn = document.getElementById("recommend-btn");
const nameEl = document.getElementById("name");
const genderInput = document.getElementById("gender");
const styleInput = document.getElementById("style");
const themeBtn = document.getElementById("theme-btn");

// Theme Toggle Logic
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeBtn.textContent = "☀️ Light Mode";
}

themeBtn.addEventListener("click", () => {
    let theme = document.body.getAttribute("data-theme");
    if (theme === "dark") {
        document.body.removeAttribute("data-theme");
        themeBtn.textContent = "🌙 Dark Mode";
        localStorage.setItem("theme", "light");
    } else {
        document.body.setAttribute("data-theme", "dark");
        themeBtn.textContent = "☀️ Light Mode";
        localStorage.setItem("theme", "dark");
    }
});

recommendBtn.addEventListener("click", () => {
    const gender = genderInput.value.toLowerCase();
    const style = styleInput.value.toLowerCase();

    if (names[gender] && names[gender][style]) {
        const nameList = names[gender][style];
        const randomIndex = Math.floor(Math.random() * nameList.length);
        nameEl.textContent = nameList[randomIndex];
    } else {
        nameEl.textContent = "Please try again";
    }
});