function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Find maximium rotation speed </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Find maximium rotation speed", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

        <h5>What is the maximum speed at which cylinder is to be rotated about its verticle axis so that water does not spills? What is the depth of parabola?</h5>


        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ z = \\frac{2 \\times (100 - h)}{100} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal21-inp' > <span id='cal21-val-sp'></span> m
            <br>
            <span style='display: inline-block;' >
                $$ z = \\frac{\\omega^2 r^2}{2g} $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ \\omega = \\sqrt{\\frac{2gz}{r^2}} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal22-inp' > <span id='cal22-val-sp'></span> rad/sec
            <br>
            <span style='display: inline-block;' >
                $$ N = \\frac{60\\omega}{2\\pi} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal23-inp' > <span id='cal23-val-sp'></span> r.p.m
        </p>


        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify3();'  id='temp-btn-122' >Verify</button></div>

   
    </div>

    `;
    maindiv.innerHTML += text;
    internal_calculations2();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations2() {
    a2_z = (100 - height) * 2 / 100;
    a2_omega = Math.sqrt(2 * g * a2_z) / radius;
    a2_N = (60 * a2_omega) / (2 * Math.PI);
}
function verify3() {
    let btn = document.getElementById('temp-btn-122');
    console.log(`z = ${a2_z} \n omega = ${a2_omega} \n N = ${a2_N}`);
    let inp = document.getElementById('cal21-inp');
    let sp = document.getElementById('cal21-val-sp');
    let inp1 = document.getElementById('cal22-inp');
    let sp1 = document.getElementById('cal22-val-sp');
    let inp2 = document.getElementById('cal23-inp');
    let sp2 = document.getElementById('cal23-val-sp');
    if (!verify_values(parseFloat(inp.value), a2_z)) {
        alert('z is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), a2_omega)) {
        alert('omega is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_N)) {
        alert('N is incorrect, calculate again.');
        return;
    }
    alert('You have entered correct values');
    btn.remove();
    inp.remove();
    sp.innerText = `${a2_z.toFixed(3)}`;
    inp1.remove();
    sp1.innerText = `${a2_omega.toFixed(3)}`;
    inp2.remove();
    sp2.innerText = `${a2_N.toFixed(3)}`;
    activity3();
}
//# sourceMappingURL=activity2.js.map