document.addEventListener('DOMContentLoaded', function () {
    // Toggle the chatbot visibility
    window.toggleChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block";
            chatToggleBtn.style.display = "none"; // Hide toggle button when chatbot is visible
            scrollToBottom(); // Ensure chat scrolls to bottom when opened
        }
    }

    window.closeChat = function () {
        let chatbot = document.getElementById("chatbot");
        chatbot.style.display = "none";
        document.getElementById("chatToggleBtn").style.display = "block"; // Show toggle button again when chatbot is closed
    }

    window.sendMessage = function () {
        let userMessage = document.getElementById("inputText").value.trim();
        if (userMessage) {
            addMessageToChatbox("user-message", userMessage); // Add user message to chat
            document.getElementById("inputText").value = ""; // Clear input field

            // Simulate bot response after a delay
            setTimeout(() => {
                generateBotReply(userMessage);
            }, 800);
        }
    }

    function addMessageToChatbox(messageType, messageText) {
        let messageDiv = document.createElement("div");
        messageDiv.classList.add("message", messageType);
        messageDiv.textContent = messageText;
        document.getElementById("chatbody").appendChild(messageDiv);
        scrollToBottom(); // Ensure scrolling after new message
    }

    function scrollToBottom() {
        let chatbody = document.getElementById("chatbody");
        chatbody.scrollTop = chatbody.scrollHeight; // Auto-scroll to the bottom
    }

    function generateBotReply(userMessage) {
        let botReply = "Sorry, I don't understand that. Can you please clarify?";

        // Basic keyword matching for bot responses
        if (/services|offer/i.test(userMessage)) {
            botReply = "We offer web design, e-commerce solutions, and more!";
        } else if (/contact/i.test(userMessage)) {
            botReply = "You can contact us via WhatsApp at +44-753-716-8000.";
        } else if (/price|pricing/i.test(userMessage)) {
            botReply = "Our prices are flexible based on your requirements. Let’s discuss!";
        } else if (/thank/i.test(userMessage)) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        }

        addMessageToChatbox("bot-message", botReply); // Add bot reply to chat
    }

    // Listen for Enter key to send message
    document.getElementById("inputText").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});
