document.addEventListener('DOMContentLoaded', function () {
    // Toggle the chatbot visibility
    window.toggleChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block";
            chatToggleBtn.style.display = "none"; // Hide the toggle button when the chatbot is visible
            chatbot.classList.add("show"); // Add class to animate the appearance
        }
    }

    window.closeChat = function () {
        let chatbot = document.getElementById("chatbot");
        chatbot.classList.remove("show");
        setTimeout(() => {
            chatbot.style.display = "none";
            document.getElementById("chatToggleBtn").style.display = "block"; // Show the toggle button again when chatbot is closed
        }, 300); // Wait for the transition effect to complete
    }

    window.sendMessage = function () {
        let userMessage = document.getElementById("inputText").value;
        if (userMessage.trim()) {
            addMessageToChatbox("user-message", userMessage);
            document.getElementById("inputText").value = "";

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
        scrollToBottom();
    }

    function scrollToBottom() {
        let chatbody = document.getElementById("chatbody");
        chatbody.scrollTop = chatbody.scrollHeight; // Auto-scroll to the bottom on each new message
    }

    function generateBotReply(userMessage) {
        let botReply = "Sorry, I don't understand that. Can you please clarify?";

        // Basic keyword matching
        if (/services|offer/i.test(userMessage)) {
            botReply = "We offer a variety of services including web design, e-commerce solutions, and more!";
        } else if (/contact/i.test(userMessage)) {
            botReply = "You can contact us via WhatsApp at +44-753-716-8000. We're here to help!";
        } else if (/price|pricing/i.test(userMessage)) {
            botReply = "Our prices are competitive and flexible based on your requirements. Let’s discuss your project!";
        } else if (/thank/i.test(userMessage)) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        }

        addMessageToChatbox("bot-message", botReply);
    }
});
