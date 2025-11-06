// you will implement this logic
// on file select -> read file -> preview -> show previewContainer

const fileInput = document.getElementById("fileInput");
const previewContainer = document.getElementById("previewContainer");
const previewImage = document.getElementById("previewImg");
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {
 previewImage.src = "";
 previewContainer.classList.add("d-none");
 fileInput.value = "";
});

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
