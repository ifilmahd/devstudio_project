document.addEventListener('DOMContentLoaded', function () {
    // Toggle the chatbot visibility
    window.toggleChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block";
            chatToggleBtn.style.display = "none";  // Hide the toggle button when the chatbot is visible
        }
    };

    // Close the chatbot
    window.closeChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");
        chatbot.style.display = "none";
        chatToggleBtn.style.display = "block";  // Show the toggle button again when chatbot is closed
    };

    // Send message function
    window.sendMessage = function () {
        let userMessage = document.getElementById("inputText").value.trim();
        if (userMessage) {
            addMessageToChatbox("userMessage", userMessage);
            document.getElementById("inputText").value = "";

            setTimeout(() => {
                generateBotReply(userMessage);
            }, 800);
        }
    };

    // Add message to chatbox
    function addMessageToChatbox(messageType, messageText) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", messageType);
        messageDiv.textContent = messageText;
        document.getElementById("chatbox").appendChild(messageDiv);
        
        // Scroll to the bottom after adding a message
        setTimeout(scrollToBottom, 100);
    }

    // Scroll to bottom function
    function scrollToBottom() {
        let chatbox = document.getElementById("chatbox");
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Generate bot reply function
    function generateBotReply(userMessage) {
        let botReply = "Sorry, I don't understand that. Can you please clarify?";
        
        if (userMessage.toLowerCase().includes("services")) {
            botReply = "We offer custom websites, design services, and e-commerce solutions! Here are more details:";
        } else if (userMessage.toLowerCase().includes("prices") || userMessage.toLowerCase().includes("pricing")) {
            botReply = "We can discuss prices! Just let me know what you're looking for.";
        } else if (userMessage.toLowerCase().includes("book")) {
            botReply = "To book a consultation, please provide your email:";
            captureEmailForm();
        } else if (userMessage.toLowerCase().includes("thank")) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        }

        addMessageToChatbox("botMessage", botReply);
    }

    // Capture email form
    function captureEmailForm() {
        let emailForm = `
            <div>
                <input type="email" id="emailInput" placeholder="Enter your email" required>
                <button id="submitEmailBtn">Submit</button>
            </div>
        `;
        let formDiv = document.createElement("div");
        formDiv.innerHTML = emailForm;
        document.getElementById("chatbox").appendChild(formDiv);
        scrollToBottom();

        // Bind email submission event
        document.getElementById("submitEmailBtn").addEventListener("click", submitEmail);
    }

    // Submit email function
    window.submitEmail = function () {
        let emailInput = document.getElementById("emailInput");
        let email = emailInput.value.trim();
        if (email) {
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                localStorage.setItem("userEmail", email);
                addMessageToChatbox("userMessage", email);
                addMessageToChatbox("botMessage", "Thank you! We'll get in touch with you soon.");
                
                // Optionally, clear the form
                emailInput.value = "";
            } else {
                addMessageToChatbox("botMessage", "Please enter a valid email address.");
            }
        } else {
            addMessageToChatbox("botMessage", "Email field cannot be empty.");
        }
    };
});
