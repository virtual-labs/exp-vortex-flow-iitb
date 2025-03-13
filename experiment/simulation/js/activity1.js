let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Vortex Flow</h5>
        <p>Learning Objective: Find the depth of parabola.</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>A open circular tank of diameter D = 20 cm & height 100cm, contains water upto a height h of ${height} cm. The tank is rotating at N = 300 rpm. Find the depth of parabola formed.</h5>

        <br>
        <br>

        <div style='text-align: center;'><img style='width: 40%;' src='./images/dia.png'></div>

        <br>

        <p style='text-align: center;'> <span style='display: inline-block;' >
            <span style='display: inline-block;' >
                $$ r = \\frac{D}{2} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal01-inp' > <span id='cal01-val-sp'></span> m
            <br>
            <span style='display: inline-block;' >
                $$ \\omega = \\frac{2\\pi N}{60} $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal02-inp' > <span id='cal02-val-sp'></span> rad/sec
            <br>
            <span style='display: inline-block;' >
                z is Depth of parabola and take g = 9.81 m/sec<sup>2</sup>
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ z = \\frac{\\omega^2r^2}{2g} $$
             </span>
             = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal03-inp' > <span id='cal03-val-sp'></span> m
        </p>


        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify0();'  id='temp-btn-0' >Verify</button></div>


    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb1-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    radius = diameter / 2;
    omega = (2 * Math.PI * N) / (60);
    depth = ((Math.pow(omega, 2)) * (Math.pow(radius, 2))) / (2 * g);
}
function verify0() {
    let btn = document.getElementById('temp-btn-0');
    console.log(`radius => ${radius} \n omega => ${omega} \n depth => ${depth}`);
    let inp1 = document.getElementById('cal01-inp');
    let sp1 = document.getElementById('cal01-val-sp');
    let inp2 = document.getElementById('cal02-inp');
    let sp2 = document.getElementById('cal02-val-sp');
    let inp3 = document.getElementById('cal03-inp');
    let sp3 = document.getElementById('cal03-val-sp');
    if (!verify_values(parseFloat(inp1.value), radius)) {
        alert('radius is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), omega)) {
        alert('omega is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), depth)) {
        alert('z is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(radius).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(omega).toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${(depth).toFixed(4)}`;
    alert('Your entered values are correct!!');
    btn.style.display = 'none';
    activity2();
}
activity1();
//# sourceMappingURL=activity1.js.map