document.getElementById('send-btn').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value.trim().toLowerCase();

    if (userInput !== "") {
        appendMessage('user', document.getElementById('user-input').value);

        setTimeout(function() {
            if (userInput === "hello") {
                var combinedMessage = "How can we help you today?\nSelect the query by choosing the relevant number from 1-12.<br><br>" + createOptions();
                appendMessageWithDelay('bot', combinedMessage);
            } else {
                appendMessageWithDelay('bot', "Please type hello to start the chat.");
            }
        }, 1000); // 1000 milliseconds = 1 second

        document.getElementById('user-input').value = '';
    }
});

// function appendMessage(sender, message) {
//     var messageElement = document.createElement('div');
//     messageElement.classList.add('message', sender);
//     messageElement.innerHTML = message.replace(/\n/g, '<br>');
//     document.getElementById('chat-box').appendChild(messageElement);
//     document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
// }


function appendMessage(sender, message) {
    var messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);
    messageElement.innerHTML = message.replace(/\n/g, '<br>');
    document.getElementById('chat-box').appendChild(messageElement);
    document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
}


function appendMessageWithDelay(sender, message, delay = 1000) {
    setTimeout(function() {
        appendMessage(sender, message);
    }, delay);
}

function createOptions() {
    var options = [
        "Case status",
        "How to apply for primary source verification",
        "Technical error",
        "Refund request",
        "Report clarification",
        "Additional document verification",
        "Download final report (completed case only)",
        "Report re-issuance queries",
        "Re-verification and appeal enquiries",
        "Sharing documents/information requested by DataFlow",
        "FAQ",
        "Others"
    ];

    var buttonsHtml = options.map(function(option, index) {
        return `<button onclick="handleOptionClick(${index + 1})">${index + 1}. ${option}</button>`;
    }).join('<br>');

    return buttonsHtml;
}


function handleFAQOptionClick(optionNumber) {
    var faqResponses = {
        1: "You can connect to the sales department by emailing sales@dataflowgroup.com.",
        2: "For PSV, a translated document is sufficient. A regional copy is not required.",
        3: "UIN/Unique ID is a unique identifier assigned to your DataFlow application for tracking purposes.",
        4: "For specific document requirements for a regulator, please refer to the regulator's guidelines or contact our support.",
        5: "If you are unable to open the report with the password, please verify the password or contact support for assistance.",
        6: "The due date for your case may be changed or extended due to various reasons. Please check your case status or contact support.",
        7: "The validity of your DataFlow report is typically specified in the report itself. For detailed information, please contact support.",
        8: "To authenticate/validate your DataFlow report, please refer to the authentication guidelines provided in the report or contact support.",
        9: "Verification may be stopped for your documents due to missing information or other issues. Please contact support for details."
    };

    var response = faqResponses[optionNumber] || "Invalid option selected.";
    var buttons = `
        <br><br>
        <button onclick="showMainMenu()">Main Menu</button>
        <button onclick="exitChat()">Exit</button>
    `;
    
    appendMessageWithDelay('bot', response + buttons);
}


// function handleOptionClick(optionNumber) {
//     if (optionNumber === 1) {  // "Case status"
//         var caseStatusMessage = `
//             To check the status of your application or to download the report, please click the following link: <a href="http://www.dataflowstatus.com" target="_blank">www.dataflowstatus.com</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', caseStatusMessage);
//     } else if (optionNumber === 2) {  // "How to apply for primary source verification"
//         var combinedMessage = `
//             Please find the detailed process here: <a href="https://www.dataflowgroup.com/verification-services/education/ministry-of-education-uae/" target="_blank">https://www.dataflowgroup.com/verification-services/education/ministry-of-education-uae/</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 4) {  // "Refund"
//         var combinedMessage = `
//             Please visit the cosmos portal to raise a ticket<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 5) {  // "Report clarification"
//         var combinedMessage = `
//             Please visit the cosmos portal to raise a ticket<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);

//     } else if (optionNumber === 11) {  // "FAQ"
//         var faqMessage = `
//             Please select your query:<br><br>
//             <button onclick="handleFAQOptionClick(1)">1. I want to connect to sales department</button><br>
//             <button onclick="handleFAQOptionClick(2)">2. Is a translated document enough for PSV, or is a regional copy needed?</button><br>
//             <button onclick="handleFAQOptionClick(3)">3. Unclear about document requirement for regulator.</button><br>
//             <button onclick="handleFAQOptionClick(4)">4. Unable to open the report with the password</button><br>
//             <button onclick="handleFAQOptionClick(5)">5. Why my case due date has been changed / extended?</button><br>
//             <button onclick="handleFAQOptionClick(6)">6. What is the validity of my DataFlow report?</button><br>
//             <button onclick="handleFAQOptionClick(7)">7. How can I authenticate/validate my DataFlow report?</button><br>
//             <button onclick="handleFAQOptionClick(8)">8. Why verification has been stopped for my documents?</button>
//         `;
//         appendMessageWithDelay('bot', faqMessage);
//     } else if (optionNumber === 7) {  // "Download final report (completed case only)"
//         var combinedMessage = `
//             To check the status of your application or to download the report, please click the following link: <a href="http://www.dataflowstatus.com" target="_blank">www.dataflowstatus.com</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 9) {  // "Download final report (completed case only)"
//         var combinedMessage = `
//         Please find the detailed process here : <a href="https://support.dataflowgroup.com/support/solutions/articles/17000125186-dataflow-appeal-process" target="_blank">https://support.dataflowgroup.com/support/solutions/articles/17000125186-dataflow-appeal-process</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 10) {  // "Download final report (completed case only)"
//         var combinedMessage = `
//         I can see there are no pending cases with us.<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);

//     } else if (optionNumber === 12) {  // "Others"
//         var combinedMessage = `
//         Please visit the cosmos portal to raise a ticket.<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 3) {  // "Technical error"
//         var combinedMessage = `
//             Select the issue you are facing:<br><br>
//             <button onclick="handleTechnicalIssue('Logging Issue')">1. Logging Issue</button><br>
//             <button onclick="handleTechnicalIssue('Unable to Submit Application')">2. Unable to Submit Application</button><br>
//             <button onclick="handleTechnicalIssue('Others')">3. Others</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else {
//         var response = "Invalid option selected.";
//         appendMessageWithDelay('bot', response);
//     }
// }


// function handleOptionClick(optionNumber) {
//     var selectedMessage = '';
    
//     // Append user message
//     var options = [
//         "Case status",
//         "How to apply for primary source verification",
//         "Technical error",
//         "Refund request",
//         "Report clarification",
//         "Additional document verification",
//         "Download final report (completed case only)",
//         "Report re-issuance queries",
//         "Re-verification and appeal enquiries",
//         "Sharing documents/information requested by DataFlow",
//         "FAQ",
//         "Others"
//     ];
    
//     // Display user message
//     if (optionNumber >= 1 && optionNumber <= options.length) {
//         selectedMessage = options[optionNumber - 1];
//         appendMessage('user', selectedMessage);
//     }
    
//     // Handle options
//     if (optionNumber === 1) {
//         var caseStatusMessage = `
//             To check the status of your application or to download the report, please click the following link: <a href="http://www.dataflowstatus.com" target="_blank">www.dataflowstatus.com</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', caseStatusMessage);
//     } else if (optionNumber === 2) {
//         var combinedMessage = `
//             Please find the detailed process here: <a href="https://www.dataflowgroup.com/verification-services/education/ministry-of-education-uae/" target="_blank">https://www.dataflowgroup.com/verification-services/education/ministry-of-education-uae/</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 4) {
//         var combinedMessage = `
//             Please visit the cosmos portal to raise a ticket<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 5) {
//         var combinedMessage = `
//             Please visit the cosmos portal to raise a ticket<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);

//     } else if (optionNumber === 11) {
//         var faqMessage = `
//             Please select your query:<br><br>
//             <button onclick="handleFAQOptionClick(1)">1. I want to connect to sales department</button><br>
//             <button onclick="handleFAQOptionClick(2)">2. Is a translated document enough for PSV, or is a regional copy needed?</button><br>
//             <button onclick="handleFAQOptionClick(3)">3. Unclear about document requirement for regulator.</button><br>
//             <button onclick="handleFAQOptionClick(4)">4. Unable to open the report with the password</button><br>
//             <button onclick="handleFAQOptionClick(5)">5. Why my case due date has been changed / extended?</button><br>
//             <button onclick="handleFAQOptionClick(6)">6. What is the validity of my DataFlow report?</button><br>
//             <button onclick="handleFAQOptionClick(7)">7. How can I authenticate/validate my DataFlow report?</button><br>
//             <button onclick="handleFAQOptionClick(8)">8. Why verification has been stopped for my documents?</button>
//         `;
//         appendMessageWithDelay('bot', faqMessage);
//     } else if (optionNumber === 7) {
//         var combinedMessage = `
//             To check the status of your application or to download the report, please click the following link: <a href="http://www.dataflowstatus.com" target="_blank">www.dataflowstatus.com</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 9) {
//         var combinedMessage = `
//         Please find the detailed process here : <a href="https://support.dataflowgroup.com/support/solutions/articles/17000125186-dataflow-appeal-process" target="_blank">https://support.dataflowgroup.com/support/solutions/articles/17000125186-dataflow-appeal-process</a><br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 10) {
//         var combinedMessage = `
//         I can see there are no pending cases with us.<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);

//     } else if (optionNumber === 12) {
//         var combinedMessage = `
//         Please visit the cosmos portal to raise a ticket.<br><br>
//             <button onclick="showMainMenu()">Main Menu</button>
//             <button onclick="exitChat()">Exit</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else if (optionNumber === 3) {
//         var combinedMessage = `
//             Select the issue you are facing:<br><br>
//             <button onclick="handleTechnicalIssue('Logging Issue')">1. Logging Issue</button><br>
//             <button onclick="handleTechnicalIssue('Unable to Submit Application')">2. Unable to Submit Application</button><br>
//             <button onclick="handleTechnicalIssue('Others')">3. Others</button>
//         `;
//         appendMessageWithDelay('bot', combinedMessage);
//     } else {
//         var response = "Invalid option selected.";
//         appendMessageWithDelay('bot', response);
//     }
// }


function handleOptionClick(optionNumber) {
    // User's selected message
    var options = [
        "Case status",
        "How to apply for primary source verification",
        "Technical error",
        "Refund request",
        "Report clarification",
        "Additional document verification",
        "Download final report (completed case only)",
        "Report re-issuance queries",
        "Re-verification and appeal enquiries",
        "Sharing documents/information requested by DataFlow",
        "FAQ",
        "Others"
    ];

    // Append user message
    if (optionNumber >= 1 && optionNumber <= options.length) {
        var selectedMessage = options[optionNumber - 1];
        appendMessage('user', selectedMessage);
    }

    // Respond with bot message
    var response;
    switch (optionNumber) {
        case 1:
            response = `
                To check the status of your application or to download the report, please click the following link: <a href="http://www.dataflowstatus.com" target="_blank">www.dataflowstatus.com</a><br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 2:
            response = `
                Please find the detailed process here: <a href="https://www.dataflowgroup.com/verification-services/education/ministry-of-education-uae/" target="_blank">https://www.dataflowgroup.com/verification-services/education/ministry-of-education-uae/</a><br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 3:
            response = `
                Select the issue you are facing:<br><br>
                <button onclick="handleTechnicalIssue('Logging Issue')">1. Logging Issue</button><br>
                <button onclick="handleTechnicalIssue('Unable to Submit Application')">2. Unable to Submit Application</button><br>
                <button onclick="handleTechnicalIssue('Others')">3. Others</button>
            `;
            break;
        case 4:
            response = `
                Please visit the cosmos portal to raise a ticket<br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 5:
            response = `
                Please visit the cosmos portal to raise a ticket<br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 6:
            response = `
                For additional document verification, please visit <a href="https://www.dataflowgroup.com" target="_blank">DataFlow Group</a>.<br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 7:
            response = `
                To check the status of your application or to download the report, please click the following link: <a href="http://www.dataflowstatus.com" target="_blank">www.dataflowstatus.com</a><br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 8:
            response = `
                For report re-issuance queries, please visit the <a href="https://www.dataflowgroup.com" target="_blank">DataFlow Group</a> portal.<br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 9:
            response = `
                Please find the detailed process here: <a href="https://support.dataflowgroup.com/support/solutions/articles/17000125186-dataflow-appeal-process" target="_blank">https://support.dataflowgroup.com/support/solutions/articles/17000125186-dataflow-appeal-process</a><br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 10:
            response = `
                I can see there are no pending cases with us.<br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        case 11:
            response = `
                Please select your query:<br><br>
                <button onclick="handleFAQOptionClick(1)">1. I want to connect to sales department</button><br>
                <button onclick="handleFAQOptionClick(2)">2. Is a translated document enough for PSV, or is a regional copy needed?</button><br>
                <button onclick="handleFAQOptionClick(3)">3. Unclear about document requirement for regulator.</button><br>
                <button onclick="handleFAQOptionClick(4)">4. Unable to open the report with the password</button><br>
                <button onclick="handleFAQOptionClick(5)">5. Why my case due date has been changed / extended?</button><br>
                <button onclick="handleFAQOptionClick(6)">6. What is the validity of my DataFlow report?</button><br>
                <button onclick="handleFAQOptionClick(7)">7. How can I authenticate/validate my DataFlow report?</button><br>
                <button onclick="handleFAQOptionClick(8)">8. Why verification has been stopped for my documents?</button>
            `;
            break;
        case 12:
            response = `
                Please visit the cosmos portal to raise a ticket.<br><br>
                <button onclick="showMainMenu()">Main Menu</button>
                <button onclick="exitChat()">Exit</button>
            `;
            break;
        default:
            response = "Invalid option selected.";
            break;
    }

    appendMessageWithDelay('bot', response);
}



function handleTechnicalIssue(issueType) {
    if (issueType === 'Logging Issue') {
        appendMessageWithDelay('bot', "Please may I have the email address you are using for Login?");
        
        document.getElementById('send-btn').addEventListener('click', handleLoggingIssue);
    } else {
        var response = issueType === 'Unable to Submit Application' ? 
            "Please visit Cosmos Portal to raise a ticket.<br><br>" :
            "Okay<br><br>";
        response += '<button onclick="showMainMenu()">Main Menu</button><button onclick="exitChat()">Exit</button>';
        appendMessageWithDelay('bot', response);
    }
}

function handleLoggingIssue() {
    var userInput = document.getElementById('user-input').value.trim();

    if (userInput !== "") {
        appendMessage('user', userInput);
        
        appendMessageWithDelay('bot', "Are you using Google Chrome browser for login?<br><br>" +
            "<button onclick=\"handleChromeBrowser('Yes')\">Yes</button>" +
            "<button onclick=\"handleChromeBrowser('No')\">No</button>"
        );
        
        document.getElementById('user-input').value = '';
    }
}

function handleChromeBrowser(response) {
    if (response === 'Yes') {
        appendMessageWithDelay('bot', "Are you using Desktop or Laptop for login?<br><br>" +
            "<button onclick=\"handleDesktopLaptop('Yes')\">Yes</button>" +
            "<button onclick=\"handleDesktopLaptop('No')\">No</button>"
        );
    } else {
        appendMessageWithDelay('bot', "Please visit Cosmos Portal to raise a ticket.<br><br>" +
            "<button onclick=\"showMainMenu()\">Main Menu</button>" +
            "<button onclick=\"exitChat()\">Exit</button>"
        );
    }
}

function handleDesktopLaptop(response) {
    if (response === 'Yes') {
        appendMessageWithDelay('bot', "Have you tried selecting 'Forgot Password' option to receive a temporary password for login?<br><br>" +
            "<button onclick=\"handleForgotPassword('Yes')\">Yes</button>" +
            "<button onclick=\"handleForgotPassword('No')\">No</button>"
        );
    } else {
        appendMessageWithDelay('bot', "Please visit Cosmos Portal to raise a ticket.<br><br>" +
            "<button onclick=\"showMainMenu()\">Main Menu</button>" +
            "<button onclick=\"exitChat()\">Exit</button>"
        );
    }
}

function handleForgotPassword(response) {
    if (response === 'Yes') {
        appendMessageWithDelay('bot', "Please visit Cosmos Portal to raise a ticket.<br><br>" +
            "<button onclick=\"showMainMenu()\">Main Menu</button>" +
            "<button onclick=\"exitChat()\">Exit</button>"
        );
    } else {
        appendMessageWithDelay('bot', "Okay<br><br>" +
            "<button onclick=\"showMainMenu()\">Main Menu</button>" +
            "<button onclick=\"exitChat()\">Exit</button>"
        );
    }
}

function showMainMenu() {
    var combinedMessage = "How can we help you today?\nSelect the query by choosing the relevant number from 1-12.<br><br>" + createOptions();
    appendMessageWithDelay('bot', combinedMessage);
}

function exitChat() {
    var exitMessage = `
        Thank you for contacting the DataFlow Group. Your feedback is valuable to us. We would greatly appreciate if you could rate the service.<br><br>
        <button onclick="rateService('Good')">Good</button>
        <button onclick="rateService('Bad')">Bad</button>
    `;
    appendMessageWithDelay('bot', exitMessage);
}

function rateService(rating) {
    appendMessage('user', rating);
    appendMessageWithDelay('bot', 'Thank you for your feedback!');
}
