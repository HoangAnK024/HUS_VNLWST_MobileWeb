const sliderImg = document.getElementById("slider-img");
const dots = document.querySelectorAll(".dot");
const images = [
  "static/slider1.png",
  "static/slider2.png",
  "static/slider3.png"
];

let index = 0;

// Chuyển ảnh theo hướng (trước hoặc sau)
function changeImage(direction) {
  index = (index + direction + images.length) % images.length;
  updateSlider();
}

// Chuyển tới ảnh theo chỉ định của dấu chấm
function currentSlide(n) {
  index = n;
  updateSlider();
}

// Cập nhật ảnh và thay đổi dấu chấm
function updateSlider() {
  sliderImg.src = images[index];
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Tự động chuyển ảnh sau mỗi 3 giây
function autoSlide() {
  setInterval(() => {
    index = (index + 1) % images.length; // Tăng index và quay lại đầu khi đến cuối
    updateSlider();
  }, 3000); // 3000ms = 3s
}

// Gọi hàm autoSlide khi trang web được tải
autoSlide();

// Initial setup (thiết lập ban đầu)
updateSlider();
