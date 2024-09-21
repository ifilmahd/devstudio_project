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
        scrollToBottom();
    }

    // Scroll to bottom function
    function scrollToBottom() {
        let chatbox = document.getElementById("chatbox");
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    // Quick reply function
    window.quickReply = function (message) {
        document.getElementById("inputText").value = message;
        sendMessage();
    };

    // Generate bot reply
    function generateBotReply(userMessage) {
        let botReply = "Sorry, I don't understand that. Can you please clarify?";
        
        if (userMessage.toLowerCase().includes("services")) {
            botReply = "We offer modern websites, UI/UX design, and e-commerce solutions. Everything is customized for your needs.";
            addQuickReplies(["Contact via WhatsApp", "Discuss Details"]);
        } else if (userMessage.toLowerCase().includes("prices") || userMessage.toLowerCase().includes("pricing")) {
            botReply = "Our pricing is flexible and designed to fit your needs. Please contact us directly for a good price!";
            addQuickReplies(["Contact via WhatsApp"]);
        } else if (userMessage.toLowerCase().includes("book")) {
            botReply = "To book a consultation, please contact us via WhatsApp or provide your email.";
            captureEmailForm();
        } else if (userMessage.toLowerCase().includes("thank")) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        }
        
        addMessageToChatbox("botMessage", botReply);
    }

    // Add quick replies
    function addQuickReplies(options) {
        let quickReplyDiv = document.createElement("div");
        quickReplyDiv.classList.add("quickReplies");
        
        options.forEach(option => {
            let button = document.createElement("button");
            button.textContent = option;
            if (option === "Contact via WhatsApp") {
                button.onclick = function () { window.openWhatsApp(); };
            } else {
                button.onclick = function () { window.quickReply(option); };
            }
            quickReplyDiv.appendChild(button);
        });

        document.getElementById("chatbox").appendChild(quickReplyDiv);
        scrollToBottom();
    }

    // Open WhatsApp function
    window.openWhatsApp = function () {
        window.open("https://wa.me/447537168000", "_blank");
    };

    // Capture email form
    window.captureEmailForm = function () {
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
        document.getElementById("submitEmailBtn").addEventListener("click", window.submitEmail);
    };

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
