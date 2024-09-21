document.addEventListener('DOMContentLoaded', function () {
    // Toggle the chatbot visibility
    window.toggleChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block";
            chatToggleBtn.style.display = "none"; // Hide the toggle button when the chatbot is visible
        }
    }

    window.closeChat = function () {
        document.getElementById("chatbot").style.display = "none";
        document.getElementById("chatToggleBtn").style.display = "block"; // Show the toggle button again when chatbot is closed
    }

    window.sendMessage = function () {
        let userMessage = document.getElementById("inputText").value;
        if (userMessage) {
            addMessageToChatbox("userMessage", userMessage);
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
        chatbody.scrollTop = chatbody.scrollHeight;
    }

    function generateBotReply(userMessage) {
        let botReply = "Sorry, I don't understand that. Can you please clarify?";
        
        if (userMessage.toLowerCase().includes("services")) {
            botReply = "We offer a variety of services! From custom web design to e-commerce solutions, everything can be discussed to suit your needs.";
            botReply += " Feel free to ask more about any specific service!";
        } else if (userMessage.toLowerCase().includes("contact")) {
            botReply = "You can contact us via WhatsApp at <strong>+44-753-716-8000</strong>. We're here to help!";
        } else if (userMessage.toLowerCase().includes("price") || userMessage.toLowerCase().includes("pricing")) {
            botReply = "Our prices are competitive and flexible based on your requirements. Let’s discuss your project!";
        } else if (userMessage.toLowerCase().includes("thank")) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        }
        
        addMessageToChatbox("botMessage", botReply);
    }
});
