function upDate(previewPic) {
  console.log("upDate được kích hoạt:", previewPic.alt);
  const preview = document.getElementById("image");
  preview.textContent = previewPic.alt;
  preview.style.backgroundImage = `url("${previewPic.src}")`;
  preview.style.backgroundSize = "cover";
  preview.style.backgroundPosition = "center";
  preview.style.color = "#ffffff";
  preview.style.textShadow = "0 1px 4px #000";
}

function undo() {
  console.log("undo được kích hoạt");
  const preview = document.getElementById("image");
  preview.textContent = "Di chuyển chuột hoặc focus vào một hình ảnh để xem ảnh tại đây.";
  preview.style.backgroundImage = "none";
  preview.style.backgroundColor = "#e9eef5";
  preview.style.color = "#243247";
  preview.style.textShadow = "none";
}

function addTabFocus() {
  console.log("addTabFocus được kích hoạt khi trang tải xong");
  const images = document.querySelectorAll(".gallery-grid img");
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
