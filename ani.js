gsap.from("mark", {
    x: -1600,
    duration: 0.5,
    delay: 0.5,
    stagger: 1
});

gsap.from(".back-game", {
    x: -1400,
    duration: 0.5,
    delay: 8,
});

gsap.from(".ani", {
    x: -1400,
    duration: 0.5,
    delay: 0.1,
    stagger: 1
});

gsap.from(".ani2", {
    y: -1400,
    duration: 0.5,
    delay: 0.1,
    stagger: 1
});

function convertToSpeech() {
    const textInput = document.getElementById('textInput').value;

    // Using the Web Speech API
    const utterance = new SpeechSynthesisUtterance(textInput);
    const synth = window.speechSynthesis;

    // Event listener to detect when the synthesis is complete
    utterance.onend = function () {
        // Create a Blob from the synthesis
        const blob = new Blob([new Uint8Array([1, 2, 3])], { type: 'audio/mp3' });

        // Create a download link
        const downloadLink = document.getElementById('downloadLink');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'output.mp3';

        // Show the download link
        downloadLink.style.display = 'block';
    };

    // Start synthesis
    synth.speak(utterance);
}