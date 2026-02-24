function checkTransactionState() {
    const historyContainer = document.getElementById("history-container");
    const emptyHistory = document.getElementById("empty-history");

    if (historyContainer.children.length === 0) {
        emptyHistory.classList.remove("hidden");
        historyContainer.classList.add("hidden");
    } else {
        emptyHistory.classList.add("hidden");
        historyContainer.classList.remove("hidden");
    }
}

// Page load হলে check করো
document.addEventListener("DOMContentLoaded", function () {
    checkTransactionState();
});