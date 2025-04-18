document.addEventListener("DOMContentLoaded", function () {
    fetch("./json/gallery.json")
        .then(response => response.json())
        .then(images => {
            const gallery = document.getElementById("gallery");
            const modalImage = document.getElementById("modalImage");
            const imageCaption = document.getElementById("imageCaption");

            images.forEach(image => {
                const col = document.createElement("div");
                col.classList.add("col");

                const imgElement = document.createElement("img");
                imgElement.src = image.thumbnail;
                imgElement.alt = image.caption;
                imgElement.classList.add("img-fluid");

                imgElement.setAttribute("data-bs-toggle", "modal");
                imgElement.setAttribute("data-bs-target", "#imageModal");
                imgElement.addEventListener("click", function () {
                    modalImage.src = image.image;
                    imageCaption.textContent = image.caption;
                });

                col.appendChild(imgElement);
                gallery.appendChild(col);
            });
        })
        .catch(error => console.error("Error loading gallery:", error));
});
