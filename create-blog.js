const blogForm = document.getElementById("blogForm");

blogForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const videoUrl = document.getElementById("videoUrl").value;

  const blog = { title, description, videoUrl };

  let blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));

  alert("Blog published successfully!");
  window.location.href = "index.html"; // Redirect to blog page
});
