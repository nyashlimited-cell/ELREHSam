document.addEventListener("DOMContentLoaded", function () {

    // Sidebar Toggle Functionality
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const sidebarClose = document.getElementById("sidebarClose");

    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener("click", function () {
            sidebar.classList.toggle("active");
        });

        if (sidebarClose) {
            sidebarClose.addEventListener("click", function () {
                sidebar.classList.remove("active");
            });
        }

        // Close sidebar when clicking on a menu item
        document.querySelectorAll(".sidebar-item").forEach(item => {
            item.addEventListener("click", function () {
                sidebar.classList.remove("active");
            });
        });
    }

    const propertyGrid = document.getElementById("propertyGrid");
    if (!propertyGrid) return; // Only run on pages with property grid

    const properties = allProperties;

    function displayProperties(propertyList) {
        propertyGrid.innerHTML = "";

        propertyList.forEach(property => {
            propertyGrid.innerHTML += `
                <div class="property-card">
                    <div class="property-number">${property.id}</div>
                    <img src="${property.image}" alt="Property">
                    <div class="property-info">
                        <h3>${property.price}</h3>
                        <p>${property.location}</p>
                        <iframe class="prop-map" src="https://maps.google.com/maps?q=${property.lat},${property.lng}&z=15&output=embed"></iframe>
                        <p class="prop-desc">${property.desc}</p>
                        <div class="property-buttons">
                            <button class="btn-details" onclick="alert('More details: ${property.desc}')">View Details</button>
                            <a href="payment.html?propertyId=${property.id}" class="btn-pay">Pay Now</a>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    displayProperties(properties);
    

    // Filter Properties
    const locationFilter = document.getElementById("locationFilter");
    locationFilter.addEventListener("change", function () {
        const selectedLocation = this.value;
        if (selectedLocation === "all") {
            displayProperties(properties);
        } else {
            const filteredProperties = properties.filter(property => property.location.includes(selectedLocation));
            displayProperties(filteredProperties);
        }
    });

    // Hero Scroll
    const viewBtn = document.getElementById("viewBtn");
    viewBtn.addEventListener("click", function () {
        document.getElementById("properties").scrollIntoView({
            behavior: "smooth"
        });
    });

});

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };

        try {
            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await res.json();
            formStatus.innerText = "Message Sent Successfully!";
            formStatus.classList.add("success");
            formStatus.classList.remove("error");
            contactForm.reset();

        } catch (error) {
            formStatus.innerText = "Error sending message. Please try again.";
            formStatus.classList.add("error");
            formStatus.classList.remove("success");
        }
    });

    // login form handling
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", async function (e) {
            e.preventDefault();
            const statusDiv = document.getElementById("loginStatus");
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            try {
                const res = await fetch("/api/auth/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });
                const result = await res.json();
                if (result.ok) {
                    statusDiv.innerText = "Login successful.";
                    statusDiv.style.color = "green";
                    // store token if needed
                    localStorage.setItem('token', result.token);
                } else {
                    statusDiv.innerText = result.message || "Login failed.";
                    statusDiv.style.color = "red";
                }
            } catch (err) {
                statusDiv.innerText = "Error contacting server.";
                statusDiv.style.color = "red";
            }
        });
    }

}