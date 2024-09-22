document.addEventListener('DOMContentLoaded', function () {
    window.toggleChat = function () {
        const chatbot = document.getElementById("chatbot");
        const chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "flex"; // Show chatbot
            chatToggleBtn.style.display = "none"; // Hide toggle button
            scrollToBottom(); // Scroll to bottom on open
        }
    }

    window.closeChat = function () {
        document.getElementById("chatbot").style.display = "none";
        document.getElementById("chatToggleBtn").style.display = "block"; // Show toggle button again
    }

    window.sendMessage = function () {
        const userMessage = document.getElementById("inputText").value.trim();
        if (userMessage) {
            addMessageToChatbox("user-message", userMessage);
            document.getElementById("inputText").value = ""; 

            setTimeout(() => {
                generateBotReply(userMessage);
            }, 800);
        }
    }

    function addMessageToChatbox(messageType, messageText) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", messageType);
        messageDiv.textContent = messageText;
        document.getElementById("chatbody").appendChild(messageDiv);
        scrollToBottom(); // Scroll to the latest message
    }

    function scrollToBottom() {
        const chatbody = document.getElementById("chatbody");
        chatbody.scrollTop = chatbody.scrollHeight; // Ensure the latest message is visible
    }

    function generateBotReply(userMessage) {
        let botReply = "Sorry, I didn't understand that. Can you please clarify?";

        if (/services|offer/i.test(userMessage)) {
            botReply = "We offer web design, e-commerce solutions, and more!";
        } else if (/contact/i.test(userMessage)) {
            botReply = "You can contact us via WhatsApp at +44-753-716-8000.";
        } else if (/price|pricing/i.test(userMessage)) {
            botReply = "Our prices are flexible based on your requirements. Let’s discuss!";
        } else if (/thank/i.test(userMessage)) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        } else if (/hello|hi/i.test(userMessage)) {
            botReply = "Hello! How can I help you today?";
        } else if (/help/i.test(userMessage)) {
            botReply = "I’m here to help! What do you need assistance with?";
        }

        addMessageToChatbox("bot-message", botReply); // Show bot reply
    }

    document.getElementById("inputText").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage(); // Send message on Enter key press
        }
    });
});
