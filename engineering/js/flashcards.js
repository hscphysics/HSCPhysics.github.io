// Flashcards data and functionality

const flashcards = [
    {q: "What is Mechanical Advantage (MA)?", a: "MA = Load / Effort<br><br>How much a machine multiplies your force"},
    {q: "What is Velocity Ratio (VR)?", a: "VR = Distance moved by Effort / Distance moved by Load<br><br>Theoretical advantage based on geometry"},
    {q: "What is the efficiency formula for machines?", a: "Efficiency = (MA / VR) × 100%<br><br>Also = (Work Out / Work In) × 100%"},
    {q: "Can a machine have 100% efficiency?", a: "NO! All real machines have friction.<br><br>Efficiency is always < 100%"},
    {q: "VR for a lever?", a: "VR = Effort distance from fulcrum / Load distance from fulcrum"},
    {q: "VR for a wheel and axle?", a: "VR = Wheel radius / Axle radius<br>(or diameter/diameter)"},
    {q: "VR for a pulley system?", a: "VR = Number of rope segments supporting the load"},
    {q: "VR for an inclined plane?", a: "VR = Length of slope / Height of slope<br>OR VR = 1 / sin(θ)"},
    {q: "VR for a screw?", a: "VR = 2πr / p<br><br>r = radius you turn<br>p = pitch (thread spacing)"},
    {q: "What is stress?", a: "σ = F / A<br><br>Force per unit area (Pa or N/m²)"},
    {q: "What is Young's Modulus?", a: "E = σ / ε<br><br>Measures stiffness of material"},
    {q: "What is Ohm's Law?", a: "V = IR<br><br>Voltage = Current × Resistance"},
    {q: "Electrical power formula?", a: "P = VI = I²R = V²/R"},
    {q: "What are the four forces of flight?", a: "1. Lift (upward)<br>2. Weight (downward)<br>3. Thrust (forward)<br>4. Drag (backward)"},
    {q: "Conditions for equilibrium?", a: "ΣF = 0 (sum of forces = zero)<br>ΣM = 0 (sum of moments = zero)"},
    {q: "Newton's Second Law?", a: "F = ma<br><br>Force = mass × acceleration"},
    {q: "Kinematic equations?", a: "v = u + at<br>s = ut + ½at²<br>v² = u² + 2as"},
    {q: "What is Factor of Safety?", a: "FoS = Ultimate Strength / Working Stress<br><br>Safety margin in design"},
    {q: "Braking distance formula?", a: "d = v² / (2μg)<br><br>Distance ∝ v² (double speed = 4× distance!)"},
    {q: "What are crumple zones?", a: "Car sections that collapse to absorb energy.<br><br>Increases collision time → reduces force"},
    {q: "Active vs Passive safety?", a: "Active: Prevent crashes (ABS, ESC)<br>Passive: Reduce injury (airbags, seatbelts)"},
    {q: "Analog vs Digital signals?", a: "Analog: continuous, infinite values<br>Digital: discrete (0s and 1s)<br><br>Digital is better!"},
    {q: "Wave equation for EM waves?", a: "c = fλ<br><br>c = 3 × 10⁸ m/s (speed of light)"},
    {q: "What is biocompatibility?", a: "Ability of material to exist in body without harm or rejection"},
    {q: "Why are triangles used in trusses?", a: "Only shape that cannot deform without changing side lengths.<br><br>Maximum stability!"},
    {q: "Lift equation?", a: "L = ½ρv²AC_L<br><br>Lift ∝ v² (speed squared!)"},
    {q: "Drag force formula?", a: "F_drag = ½ρv²AC_d<br><br>Drag also ∝ v²"},
    {q: "What is moment/torque?", a: "M = F × d<br><br>Force × perpendicular distance from pivot"},
    {q: "Work formula?", a: "W = F × d<br><br>Work = Force × distance moved"},
    {q: "Three classes of levers?", a: "Class 1: Fulcrum in middle<br>Class 2: Load in middle<br>Class 3: Effort in middle"},
    {q: "Fixed vs movable pulley MA?", a: "Fixed: MA = 1 (changes direction only)<br>Movable: MA = 2 (force advantage)"},
    {q: "Types of loads on structures?", a: "Dead, Live, Wind, Snow, Seismic, Impact"},
    {q: "Australian drawing standard?", a: "AS 1100 - Third angle projection"},
    {q: "Main material types?", a: "Metals, Polymers, Ceramics, Composites"},
    {q: "Efficiency: why always < 100%?", a: "Energy lost to:<br>• Friction<br>• Heat<br>• Sound<br>• Deformation"}
];

let currentCard = 0;

function initFlashcards() {
    currentCard = 0;
    updateCard();
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function nextCard() {
    currentCard = (currentCard + 1) % flashcards.length;
    updateCard();
}

function previousCard() {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

function updateCard() {
    document.getElementById('flashcard').classList.remove('flipped');
    document.getElementById('question-text').innerHTML = flashcards[currentCard].q;
    document.getElementById('answer-text').innerHTML = flashcards[currentCard].a;
    document.getElementById('card-counter').textContent = `Card ${currentCard + 1} of ${flashcards.length}`;
}
