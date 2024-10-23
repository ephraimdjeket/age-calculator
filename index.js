// Receive validation errors if:
//   - Any field is empty when the form is submitted
//   - The day number is not between 1-31
//   - The month number is not between 1-12
//   - The date is in the future
//   - The date is invalid e.g. 31/04/1991 (there are 30 days in April)

const formEl = document.querySelector("form");
const dayInput = document.getElementById("day");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const inputs = document.querySelectorAll("input");
const inputGroups = document.querySelectorAll(".input-group");

const labels = ["day", "month", "year"];

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const dayValue = dayInput.value.trim();
  const monthValue = monthInput.value.trim();
  const yearhValue = yearInput.value.trim();

  const convertedDayInput = dayValue ? Number(dayValue) : null;
  const convertedMonthInput = monthValue ? Number(monthValue) : null;
  const convertedYearInput = yearhValue ? Number(yearhValue) : null;

  if (
    convertedDayInput === null ||
    convertedMonthInput === null ||
    convertedYearInput === null ||
    (convertedDayInput === 31 && [2, 4, 6, 9, 11].includes(convertedMonthInput))
  ) {
    inputGroups.forEach((inputGroup, index) => {
      if (!inputGroup.querySelector(".errorMessage")) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Must be a valid ${labels[index]}`;
        errorMessage.classList.add("errorMessage");
        inputs.forEach((input) => {
          input.style.border = "1px solid var(--Light-red)";
        });
        inputGroup.classList.add("errorInput");
        inputGroup.appendChild(errorMessage);
      }
    });
  } else {
  }
});
