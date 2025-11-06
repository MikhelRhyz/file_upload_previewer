// you will implement this logic
// on file select -> read file -> preview -> show previewContainer

const fileInput = document.getElementById("fileInput");
const previewContainer = document.getElementById("previewContainer");
const previewImage = document.getElementById("previewImg");
const clearBtn = document.getElementById("clearBtn");
const uploadBtn = document.getElementById("uploadBtn");
const saved = localStorage.getItem("uploadedImage");

if (saved) {
  previewContainer.classList.remove("d-none");
  previewImage.src = saved;
}

console.log("Saved Image from LocalStorage:", saved);

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (!file || file.length === 0) return;

  if (!file.type.startsWith("image/")) {
    alert("Please select a valid image file.");
    return;
  }

  const reader = new FileReader();

  reader.onload = () => {
    previewContainer.classList.remove("d-none");
    previewImage.src = reader.result;
  };

  reader.readAsDataURL(file);
});

clearBtn.addEventListener("click", function () {
  previewImage.src = "";
  previewContainer.classList.add("d-none");
  fileInput.value = "";
});

uploadBtn.addEventListener("click", function () {
  const base64 = previewImage.src;

  if (!base64) {
    alert("No image to upload. Please select an image first.");
    return;
  } else {
    localStorage.setItem("uploadedImage", base64);
    alert("Image uploaded successfully!");
  }
});
