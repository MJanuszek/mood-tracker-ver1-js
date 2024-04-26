// const emotionsIcons = document.querySelectorAll('div[class*="emotion-icon"]');

const emotionsIcons = document.querySelectorAll(".emotion");
let moodHistory = document.getElementById("history");

const moods = [];
let currentPage = 1;
const itemsPerPage = 5;

// -----------
function saveMood(event) {
  console.log(`Clicked on: ${event.currentTarget.id}`, moods);

  const formattedDate = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  moods.push({ date: formattedDate, mood: event.currentTarget.id });
  displayMoods();
}

function displayMoods() {
  moodHistory.textContent = "";
  const page = currentPage - 1;
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = moods.slice(start, end);
  paginatedItems.map((data) => {
    let moodDiv = document.createElement("div");
    moodDiv.classList.add("mood");
    moodDiv.textContent = `You felt ${data.mood} on ${data.date}`;
    moodHistory.appendChild(moodDiv);
  });
}

emotionsIcons.forEach((icon) => {
  icon.addEventListener("click", saveMood);
});

function paginationControls() {
  const nextPage = document.querySelector("#next-page");
  const prevPage = document.querySelector("#prev-page");

  nextPage.addEventListener("click", () => {
    currentPage++;
    displayMoods();
  });

  prevPage.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayMoods();
    }
  });
}

displayMoods();
paginationControls();
