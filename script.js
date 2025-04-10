const noteArea = document.getElementById("noteArea");
const preview = document.getElementById("preview");

// Load saved note from localStorage
noteArea.value = localStorage.getItem("myNote") || "";
preview.innerHTML = marked.parse(noteArea.value);

// Live preview when typing
noteArea.addEventListener("input", () => {
    preview.innerHTML = marked.parse(noteArea.value);
});

// Save to localStorage
function saveNote() {
    localStorage.setItem("myNote", noteArea.value);
    alert("Note saved!");
}

// Export as text file
function downloadNote() {
    const text = noteArea.value;
    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "note.txt";
    link.click();
}
