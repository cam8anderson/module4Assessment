const complimentBtn = document.getElementById("complimentButton");
const fortunesBtn = document.getElementById("fortuneButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const dat = res.data;
    alert(dat);
  });
};

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const inputValue = document.getElementById("myInput").value;
  console.log("Input Value:", inputValue);

  const outputContainer = document.getElementById("outputContainer");

  const newOutput = document.createElement("div");
  newOutput.textContent = inputValue;

  const outputHeading = document.createElement("h2");
  outputHeading.className = "output-heading";
  outputHeading.textContent = "Output:";

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    const outputToDelete = newOutput.textContent;
    deleteOutput(outputToDelete);
    outputContainer.removeChild(newOutput);
  });
  newOutput.appendChild(deleteButton);
  outputContainer.appendChild(newOutput);

  // Make a POST request
  axios
    .post("http://localhost:4000/api/data", { data: inputValue })
    .then((response) => {
      console.log("POST request successful:", response.data);
    })
    .catch((error) => {
      console.error("Error making POST request:", error);
    });
});

function deleteOutput(outputToDelete) {
  axios
    .delete(`http://localhost:4000/api/data/${outputToDelete}`)
    .then((response) => {
      console.log("DELETE request successful:", response.data);
    })
    .catch((error) => {
      console.error("Error making DELETE request:", error);
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const counter = document.getElementById("counter");
  const plusButton = document.querySelector(".plus");
  const minusButton = document.querySelector(".minus");

  plusButton.addEventListener("click", function () {
    let currentValue = parseInt(counter.textContent, 10);
    if (currentValue < 5) {
      counter.textContent = currentValue + 1;
      updateRating(currentValue + 1);
    }
  });

  minusButton.addEventListener("click", function () {
    let currentValue = parseInt(counter.textContent, 10);
    if (currentValue > 1) {
      counter.textContent = currentValue - 1;
      updateRating(currentValue - 1);
    }
  });

  function updateRating(newRating) {
    axios.put("http://localhost:4000/api/rating", { rating: newRating });
  }
});

complimentBtn.addEventListener("click", getCompliment);
fortunesBtn.addEventListener("click", getFortune);
