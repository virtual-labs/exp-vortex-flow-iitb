function activity3() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find the amount of liquid that spills out. </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act3();' id='temp-btn-3' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function start_act3() {
    let temp_btn = document.getElementById('temp-btn-3');
    if (temp_btn) {
        temp_btn.remove();
    }
    a3_N = Math.round(1.1 * a2_N);
    let btn_text = get_collapse_btn_text("Find the amount of liquid that spills out", "tb3-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb3-box'>

        <h5>A open circular tank of diameter D = 20 cm & height 100cm, contains water upto a height h of ${height} cm. The tank is rotating at N = ${a3_N} rpm. Find the amount of liquid that spills out of the tank.</h5>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ \\omega = \\frac{2\\pi N}{60} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal31-inp' > <span id='cal31-val-sp'></span> rad/sec
            <br>
            <span style='display: inline-block;' >
                $$ z = \\frac{\\omega^2 r^2}{2g} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal32-inp' > <span id='cal32-val-sp'></span> m
            <br>
            <span style='display: inline-block;' >
            Volume of paraboloid
                $$  = \\frac{\\pi}{4} \\times D^2 \\times \\frac{z}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal33-inp' > <span id='cal33-val-sp'></span> m<sup>3</sup>
            <br>
            <span style='display: inline-block;' >
                Volume of water spilled = volume of paraboloid
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal34-inp' > <span id='cal34-val-sp'></span> m<sup>3</sup>
        </p>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify4();'  id='temp-btn-127' >Verify</button></div>
   
    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations3();
    setTimeout(() => { show_step('tb3-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations3() {
    a3_omega = 2 * Math.PI * a3_N / 60;
    a3_z = ((Math.pow(a3_omega, 2)) * (Math.pow(radius, 2))) / (2 * g);
    a3_volume = (Math.PI / 4) * (Math.pow(diameter, 2)) * (a3_z / 2);
}
function verify4() {
    let btn = document.getElementById('temp-btn-127');
    console.log(`omega = ${a3_omega} \n z = ${a3_z} \n volume = ${a3_volume} \n volume = ${a3_volume}`);
    let inp = document.getElementById('cal31-inp');
    let sp = document.getElementById('cal31-val-sp');
    let inp1 = document.getElementById('cal32-inp');
    let sp1 = document.getElementById('cal32-val-sp');
    let inp2 = document.getElementById('cal33-inp');
    let sp2 = document.getElementById('cal33-val-sp');
    let inp3 = document.getElementById('cal34-inp');
    let sp3 = document.getElementById('cal34-val-sp');
    if (!verify_values(parseFloat(inp.value), a3_omega)) {
        alert('omega is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), a3_z)) {
        alert('z is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a3_volume)) {
        alert('first volume is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), a3_volume)) {
        alert('final volume value is incorrect, calculate again.');
        return;
    }
    alert('You have entered correct values');
    btn.remove();
    inp.remove();
    sp.innerText = `${a3_omega.toFixed(3)}`;
    inp1.remove();
    sp1.innerText = `${a3_z.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${a3_volume.toFixed(3)}`;
    inp3.remove();
    sp3.innerText = `${a3_volume.toFixed(3)}`;
}
//# sourceMappingURL=activity3.js.map