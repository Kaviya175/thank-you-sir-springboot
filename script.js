
const messages = [
    "javac ThankYou.java",
    "Compiling gratitude...",
    "Loading memories...",
    "Loading lessons...",
    "Loading inspiration...",
    "BUILD SUCCESSFUL ❤️"
];

let messageIndex = 0;

function showNextMessage() {
    const output = document.getElementById("terminal-output");
    if (messageIndex < messages.length) {
        const paragraph = document.createElement("p");
        output.appendChild(paragraph);
        let text = messages[messageIndex];
        let characterIndex = 0;
        const typingInterval = setInterval(() => {
            paragraph.innerText += text[characterIndex];
            characterIndex++;
            if (characterIndex === text.length) {
                clearInterval(typingInterval);
                messageIndex++;
                setTimeout(showNextMessage, 700);
            }
        }, 50);
    } else {
        document.getElementById("run-button").style.display = "block";
        document.getElementById("cursor").style.display = "none";
    }

}
showNextMessage();

function runThankYou() {

    document.body.classList.add("fade-out");

    setTimeout(() => {

        document.body.innerHTML = `
            <div class="message-screen screen-appear">

               <h1 class="typewriter">Hello, Sir 👋</h1>

                <p>
                    This program was written with something
                    that cannot be taught in any programming language.
                </p>

                <h2>Gratitude ❤️</h2>

                <button onclick="showLessons()">
                    CONTINUE →
                </button>

            </div>
        `;

        document.body.classList.remove("fade-out");

    }, 1000);

}

function showLessons() {

    document.body.innerHTML = `
          <div class="message-screen screen-appear memory-transition">
            <h1>Our Classroom Memories ❤️</h1>

            <h2>💭 Memory #1</h2>

            <p>
                We still remember you saying, in your own humorous way:
            </p>

            <h2>
                "Until you leave this world,
                you should attend the class —
                no excuses!" 😄
            </h2>

            <p>
                We may have laughed when you said it,
                but it is definitely something we will always remember.
            </p>

            <button onclick="showMemoryTwo()">
                NEXT MEMORY →
            </button>

        </div>
    `;

}

function showMemoryTwo() {

    document.body.innerHTML = `
          <div class="message-screen screen-appear memory-transition">
            <h1>Our Classroom Memories ❤️</h1>

            <h2>💭 Memory #2</h2>

            <p>
                Every morning, we knew that another lesson was waiting for us.
            </p>

            <p>
                At 8 AM, you would come to teach us —
                sometimes on time, sometimes a little late 😄 —
                but always with the same passion and dedication.
            </p>

            <p>
                You never just came to complete a syllabus.
                You came because you genuinely wanted us to learn.
            </p>

            <button onclick="showMemoryThree()">
                NEXT MEMORY →
            </button>

        </div>
    `;

}
function showMemoryThree() {

    document.body.innerHTML = `
        <div class="message-screen screen-appear memory-transition">

            <h1>Our Classroom Memories ❤️</h1>

            <h2>💭 Memory #3</h2>

            <p>
                Sometimes, we did not attend classes regularly.
            </p>

            <p>
                Sometimes, we did not respond properly.
                Sometimes, we could not answer your questions.
            </p>

            <p>
                We know that these things may have disappointed you.
            </p>

            <p>
                But even then, you never stopped caring about us.
            </p>

            <p>
                You kept thinking about our placements,
                our careers, and our future.
            </p>

            <h2>
                That is something we will always remember. ❤️
            </h2>

            <button onclick="showThankYouLetter()">
                READ OUR LETTER 💌
            </button>

        </div>
    `;

}
function showThankYouLetter() {

    document.body.innerHTML = `
        <div class="message-screen letter screen-appear">

            <div class="letter-card">

            <h1>Dear Prasanna Mishra Kumar Sir, ❤️</h1>

            <p>
                You taught us much more than Java.
            </p>

            <p>
                You taught us Core Java, Servlets, JDBC, Spring,
                Spring Boot, Spring AOP, Microservices, and so many
                concepts that once seemed difficult.
            </p>

            <p>
                But beyond all the technologies and programming concepts,
                you taught us something even more valuable —
                discipline, dedication, consistency, and the importance
                of never giving up.
            </p>

            <p>
                You are one of the most passionate and dedicated teachers
                we have ever known. You came to teach us every day at 8 AM,
                and you always put your effort into making us better
                Java developers.
            </p>

            <p>
                Even when we did not respond properly, did not attend
                classes regularly, or were unable to answer your questions,
                you never stopped trying to teach us.
            </p>

            <p>
                Sometimes, these things may have disappointed you —
                and honestly, we may not always have understood the value
                of your efforts at that moment.
            </p>

            <h2>But today, we understand. ❤️</h2>

            <p>
                We understand the effort behind every class.
                <br>
                We understand the patience behind every explanation.
                <br>
                We understand the concern behind every question you asked us.
            </p>

            <p>
                Your concern was never limited to just completing the syllabus.
                You genuinely cared about our placements, our careers,
                and our future.
            </p>

            <p>
                We still remember you saying, in your own humorous way:
            </p>

           <blockquote>
               "Until you leave this world,
               you should attend the class —
               no excuses!" 😄
           </blockquote>

            <p>
                That is something we will always remember.
            </p>

            <p>
                You may have been strict with us, but behind that strictness
                was care. You wanted us to become disciplined, capable,
                and ready for the future.
            </p>

            <p>
                And honestly, Sir, you made us much better Java developers
                than we were before we met you.
            </p>

            <p>
                Today, when we think about Java, we don't just think about
                classes, objects, inheritance, Spring, or Microservices.
            </p>

            <p>
                We also think about the person who patiently taught us all of it.
            </p>

            <p>
                Thank you for your passion.
                <br>
                Thank you for your discipline.
                <br>
                Thank you for your dedication.
                <br>
                Thank you for your patience.
                <br>
                Thank you for believing in our future.
            </p>

            <div class="highlight-message">

                <h2>
                    You did not just teach us Java.
                    <br>
                    You helped shape us into better professionals. ❤️
                </h2>

            </div>

            <p>
                Some teachers teach subjects.
                <br><br>
                Some teachers teach lessons.
                <br><br>
                And some teachers leave a lasting impact on their students.
            </p>

            <h2>
                You are one of those teachers, Sir. ❤️
            </h2>

            <p>
                Thank you for everything.
            </p>

            <div class="signature">

                <p>With heartfelt gratitude,</p>

                <h3>Your Students ❤️</h3>

            </div>

           <button onclick="executeJavaProgram()">
               RUN THE FINAL PROGRAM 🚀
           </button>
        </div>
        </div>
    `;

}
function showFinalMessage(result) {

    document.body.innerHTML = `
        <div class="final-screen screen-appear">

            <h1>ThankYou.java</h1>
            <h2>For ${result.teacher} ❤️</h2>

            <div class="code-box" id="code-output"></div>

            <h2 id="execution-message"></h2>
            <div id="celebration"></div>

        </div>
    `;

    typeJavaCode(result);

}
function typeJavaCode(result) {

    const codeLines = [
        "public class ThankYou {",
        "    public static void main(String[] args) {",
        "        System.out.println(",
        '            "Thank you for everything, Sir ❤️"',
        "        );",
        "    }",
        "}"
    ];

    let lineIndex = 0;

    function addNextLine() {

        if (lineIndex < codeLines.length) {

            const line = document.createElement("p");

            line.innerText = codeLines[lineIndex];

            document
                .getElementById("code-output")
                .appendChild(line);

            lineIndex++;

            setTimeout(addNextLine, 500);

        } else {

          document.getElementById("execution-message").innerText =result.message;

          startCelebration();

        }

    }

    addNextLine();

}
function startCelebration() {

    const celebration = document.getElementById("celebration");

    celebration.innerHTML = `
        <p class="final-message">
            Thank you for everything, Sir. ❤️
        </p>

        <p class="final-message">
            Some teachers teach lessons.
            <br>
            Great teachers leave memories.
        </p>
    `;

}
async function executeJavaProgram() {

    try {

        const response = await fetch("/api/thankyou/execute", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                action: "RUN_PROGRAM"
            })
        });

       const result = await response.json();

        console.log(result);

        if (result.status === "SUCCESS") {
            showFinalMessage(result);
        } else {
            alert(result.message);
        }

    } catch (error) {

        console.error("Error connecting to Spring Boot:", error);

        alert("Unable to connect to Java backend.");

    }

}
