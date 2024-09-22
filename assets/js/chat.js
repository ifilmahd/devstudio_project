document.addEventListener('DOMContentLoaded', function () {
    window.toggleChat = function () {
        let chatbot = document.getElementById("chatbot");
        let chatToggleBtn = document.getElementById("chatToggleBtn");

        if (chatbot.style.display === "none" || chatbot.style.display === "") {
            chatbot.style.display = "block";
            chatToggleBtn.style.display = "none"; 
            scrollToBottom(); 
        }
    }

    window.closeChat = function () {
        document.getElementById("chatbot").style.display = "none";
        document.getElementById("chatToggleBtn").style.display = "block"; 
    }

    window.sendMessage = function () {
        let userMessage = document.getElementById("inputText").value.trim();
        if (userMessage) {
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
        chatbody.scrollTop = chatbody.scrollHeight; 
    }

    function generateBotReply(userMessage) {
        let botReply = "Sorry, I don't understand that. Can you please clarify?";

        if (/services|offer/i.test(userMessage)) {
            botReply = "We offer web design, e-commerce solutions, and more!";
        } else if (/contact/i.test(userMessage)) {
            botReply = "You can contact us via WhatsApp at +44-753-716-8000.";
        } else if (/price|pricing/i.test(userMessage)) {
            botReply = "Our prices are flexible based on your requirements. Let’s discuss!";
        } else if (/thank/i.test(userMessage)) {
            botReply = "You're welcome! Let me know if you need further assistance.";
        }

        addMessageToChatbox("bot-message", botReply);
    }

    document.getElementById("inputText").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });
});
