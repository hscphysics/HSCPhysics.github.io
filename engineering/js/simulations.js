// Simulations JavaScript

function initSimulations() {
    calcMachine();
    updateBeam();
    updateCircuit();
}

function calcMachine() {
    const load = parseFloat(document.getElementById('loadForce').value);
    const effort = parseFloat(document.getElementById('effortForce').value);
    const loadDist = parseFloat(document.getElementById('loadDist').value);
    const effortDist = parseFloat(document.getElementById('effortDist').value);
    
    const ma = load / effort;
    const vr = effortDist / loadDist;
    const eff = (ma / vr) * 100;
    const workIn = effort * effortDist;
    const workOut = load * loadDist;
    
    document.getElementById('maResult').textContent = ma.toFixed(2);
    document.getElementById('vrResult').textContent = vr.toFixed(2);
    document.getElementById('effResult').textContent = eff.toFixed(1) + '%';
    document.getElementById('workIn').textContent = workIn.toFixed(1) + ' J';
    document.getElementById('workOut').textContent = workOut.toFixed(1) + ' J';
}

function updateBeam() {
    const canvas = document.getElementById('beamCanvas');
    const ctx = canvas.getContext('2d');
    const load = parseFloat(document.getElementById('loadSlider').value);
    const length = parseFloat(document.getElementById('lengthSlider').value);
    
    document.getElementById('loadValue').textContent = load + ' kN';
    document.getElementById('lengthValue').textContent = length + ' m';
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const beamY = 200;
    ctx.fillStyle = '#DEE2E6';
    ctx.fillRect(100, beamY - 10, 600, 20);
    
    ctx.fillStyle = '#004E89';
    ctx.beginPath();
    ctx.moveTo(100, beamY + 10);
    ctx.lineTo(80, beamY + 30);
    ctx.lineTo(120, beamY + 30);
    ctx.closePath();
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(700, beamY + 10);
    ctx.lineTo(680, beamY + 30);
    ctx.lineTo(720, beamY + 30);
    ctx.closePath();
    ctx.fill();
    
    ctx.strokeStyle = '#FF6B35';
    ctx.fillStyle = '#FF6B35';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(400, 50);
    ctx.lineTo(400, beamY - 20);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(400, beamY - 20);
    ctx.lineTo(392, beamY - 35);
    ctx.lineTo(408, beamY - 35);
    ctx.closePath();
    ctx.fill();
    
    ctx.font = 'bold 16px Manrope';
    ctx.fillText(load + ' kN', 415, 60);
    
    const deflection = (load * Math.pow(length, 2)) / 10;
    document.getElementById('deflection').textContent = deflection.toFixed(1) + ' mm';
    
    if (deflection < 20) {
        document.getElementById('status').innerHTML = '<span style="color: var(--success)">✓ SAFE</span>';
    } else if (deflection < 40) {
        document.getElementById('status').innerHTML = '<span style="color: var(--warning)">⚠ CAUTION</span>';
    } else {
        document.getElementById('status').innerHTML = '<span style="color: var(--danger)">✗ UNSAFE</span>';
    }
}

function updateCircuit() {
    const canvas = document.getElementById('circuitCanvas');
    const ctx = canvas.getContext('2d');
    const voltage = parseFloat(document.getElementById('voltageSlider').value);
    const resistance = parseFloat(document.getElementById('resistanceSlider').value);
    
    document.getElementById('voltageValue').textContent = voltage + ' V';
    document.getElementById('resistanceValue').textContent = resistance + ' Ω';
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 3;
    ctx.strokeRect(100, 120, 60, 60);
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 18px Manrope';
    ctx.fillText(voltage + 'V', 110, 155);
    
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(130, 100);
    ctx.lineTo(130, 120);
    ctx.moveTo(130, 180);
    ctx.lineTo(130, 220);
    ctx.moveTo(130, 100);
    ctx.lineTo(500, 100);
    ctx.moveTo(130, 220);
    ctx.lineTo(500, 220);
    ctx.stroke();
    
    ctx.strokeStyle = '#004E89';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(500, 100);
    ctx.lineTo(500, 130);
    ctx.lineTo(520, 140);
    ctx.lineTo(480, 150);
    ctx.lineTo(520, 160);
    ctx.lineTo(480, 170);
    ctx.lineTo(520, 180);
    ctx.lineTo(480, 190);
    ctx.lineTo(500, 200);
    ctx.lineTo(500, 220);
    ctx.stroke();
    
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Manrope';
    ctx.fillText(resistance + 'Ω', 530, 160);
    
    const current = voltage / resistance;
    const power = voltage * current;
    
    document.getElementById('current').textContent = current.toFixed(3) + ' A';
    document.getElementById('power').textContent = power.toFixed(2) + ' W';
}
