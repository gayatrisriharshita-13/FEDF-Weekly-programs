let vdomState = { h: "00", m: "00", s: "00" };

function getTime() {
    const now = new Date();
    return {
        h: String(now.getHours()).padStart(2, '0'),
        m: String(now.getMinutes()).padStart(2, '0'),
        s: String(now.getSeconds()).padStart(2, '0')
    };
}

// 1. STANDARD DOM: Rewrite everything every second
function useDOM() {
    document.getElementById("status").innerText = "Mode: Standard DOM (Updating everything...)";
    
    setInterval(() => {
        const time = getTime();
        // Brute force: We target the containers and overwrite them regardless
        document.getElementById("hour").innerText = time.h;
        document.getElementById("min").innerText = time.m;
        document.getElementById("sec").innerText = time.s;

        // Visual Proof: Flash the background of ALL spans
        document.querySelectorAll('span').forEach(el => {
            el.style.backgroundColor = "lightcoral";
            setTimeout(() => el.style.backgroundColor = "transparent", 300);
        });
    }, 1000);
}

// 2. VIRTUAL DOM: Only update what changed
function useVDOM() {
    document.getElementById("status").innerText = "Mode: Virtual DOM (Only updating seconds!)";

    setInterval(() => {
        const time = getTime(); // This is our "New VDOM"
        
        // DIFFING: Check each part before touching the browser
        if (time.h !== vdomState.h) {
            updateElement("hour", time.h);
        }
        if (time.m !== vdomState.m) {
            updateElement("min", time.m);
        }
        if (time.s !== vdomState.s) {
            updateElement("sec", time.s);
        }

        vdomState = time; // Update our "Old VDOM" for next time
    }, 1000);
}

function updateElement(id, value) {
    const el = document.getElementById(id);
    el.innerText = value;
    // Visual Proof: Only the changed element flashes green!
    el.style.backgroundColor = "lightgreen";
    setTimeout(() => el.style.backgroundColor = "transparent", 300);
}