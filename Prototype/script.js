import * as THREE from "three";

import {
    OrbitControls
} from "three/addons/controls/OrbitControls.js";

import {
    GLTFLoader
} from "three/addons/loaders/GLTFLoader.js";


/* =========================================================
   BACKGROUND GRID
========================================================= */

const canvas =
    document.getElementById("gridCanvas");

const ctx =
    canvas.getContext("2d");


let width;
let height;


const mouse = {

    x: 0,
    y: 0,

    targetX: 0,
    targetY: 0

};


const gridSize = 55;

const mouseRadius = 280;


/* =========================================================
   RESIZE BACKGROUND
========================================================= */

function resizeBackground() {

    width =
        window.innerWidth;

    height =
        window.innerHeight;


    canvas.width =
        width;

    canvas.height =
        height;


    if (
        mouse.x === 0 &&
        mouse.y === 0
    ) {

        mouse.x =
            width / 2;

        mouse.y =
            height / 2;

        mouse.targetX =
            width / 2;

        mouse.targetY =
            height / 2;
    }
}


resizeBackground();


window.addEventListener(
    "resize",
    resizeBackground
);


/* =========================================================
   MOUSE
========================================================= */

window.addEventListener(
    "mousemove",
    (event) => {

        mouse.targetX =
            event.clientX;

        mouse.targetY =
            event.clientY;
    }
);


/* =========================================================
   DRAW GRID
========================================================= */

function drawGrid() {

    ctx.clearRect(
        0,
        0,
        width,
        height
    );


    /* Smooth mouse */

    mouse.x +=
        (
            mouse.targetX -
            mouse.x
        ) * 0.08;


    mouse.y +=
        (
            mouse.targetY -
            mouse.y
        ) * 0.08;


    const centerX =
        width / 2;

    const centerY =
        height / 2;


    /* Vertical lines */

    for (
        let x = -width;
        x <= width * 2;
        x += gridSize
    ) {

        drawVertical(
            x,
            centerX,
            centerY
        );
    }


    /* Horizontal lines */

    for (
        let y = -height;
        y <= height * 2;
        y += gridSize
    ) {

        drawHorizontal(
            y,
            centerX,
            centerY
        );
    }


    /* Mouse glow */

    drawMouseGlow();


    requestAnimationFrame(
        drawGrid
    );
}


/* =========================================================
   VERTICAL LINE
========================================================= */

function drawVertical(
    x,
    centerX,
    centerY
) {

    ctx.beginPath();


    for (
        let y = 0;
        y <= height;
        y += 10
    ) {

        let px = x;
        let py = y;


        const dx =
            px - mouse.x;

        const dy =
            py - mouse.y;


        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        if (
            distance <
            mouseRadius
        ) {

            const force =
                1 -
                distance /
                mouseRadius;


            px +=
                (
                    mouse.x -
                    px
                ) *
                force *
                0.20;


            py +=
                (
                    mouse.y -
                    py
                ) *
                force *
                0.05;
        }


        const perspective =
            (
                py -
                centerY
            ) * 0.00015;


        px +=
            (
                px -
                centerX
            ) *
            perspective;


        if (y === 0) {

            ctx.moveTo(
                px,
                py
            );

        } else {

            ctx.lineTo(
                px,
                py
            );
        }
    }


    const distance =
        Math.abs(
            x -
            mouse.x
        );


    let opacity =
        0.055;


    if (
        distance <
        mouseRadius
    ) {

        opacity =
            0.055 +
            (
                1 -
                distance /
                mouseRadius
            ) * 0.30;
    }


    ctx.strokeStyle =
        `rgba(
            0,
            234,
            255,
            ${opacity}
        )`;


    ctx.lineWidth =
        distance <
        mouseRadius
            ? 1.4
            : 0.7;


    ctx.stroke();
}


/* =========================================================
   HORIZONTAL LINE
========================================================= */

function drawHorizontal(
    y,
    centerX,
    centerY
) {

    ctx.beginPath();


    for (
        let x = 0;
        x <= width;
        x += 10
    ) {

        let px = x;
        let py = y;


        const dx =
            px - mouse.x;

        const dy =
            py - mouse.y;


        const distance =
            Math.sqrt(
                dx * dx +
                dy * dy
            );


        if (
            distance <
            mouseRadius
        ) {

            const force =
                1 -
                distance /
                mouseRadius;


            px +=
                (
                    mouse.x -
                    px
                ) *
                force *
                0.05;


            py +=
                (
                    mouse.y -
                    py
                ) *
                force *
                0.20;
        }


        const perspective =
            (
                px -
                centerX
            ) * 0.00015;


        py +=
            (
                py -
                centerY
            ) *
            perspective;


        if (x === 0) {

            ctx.moveTo(
                px,
                py
            );

        } else {

            ctx.lineTo(
                px,
                py
            );
        }
    }


    const distance =
        Math.abs(
            y -
            mouse.y
        );


    let opacity =
        0.045;


    if (
        distance <
        mouseRadius
    ) {

        opacity =
            0.045 +
            (
                1 -
                distance /
                mouseRadius
            ) * 0.25;
    }


    ctx.strokeStyle =
        `rgba(
            139,
            92,
            246,
            ${opacity}
        )`;


    ctx.lineWidth =
        distance <
        mouseRadius
            ? 1.4
            : 0.7;


    ctx.stroke();
}


/* =========================================================
   MOUSE GLOW
========================================================= */

function drawMouseGlow() {

    const gradient =
        ctx.createRadialGradient(
            mouse.x,
            mouse.y,
            0,

            mouse.x,
            mouse.y,
            mouseRadius
        );


    gradient.addColorStop(
        0,
        "rgba(0,234,255,.14)"
    );


    gradient.addColorStop(
        0.35,
        "rgba(139,92,246,.08)"
    );


    gradient.addColorStop(
        1,
        "rgba(0,0,0,0)"
    );


    ctx.fillStyle =
        gradient;


    ctx.fillRect(
        mouse.x -
            mouseRadius,

        mouse.y -
            mouseRadius,

        mouseRadius * 2,

        mouseRadius * 2
    );
}


/* =========================================================
   START GRID
========================================================= */

drawGrid();


/* =========================================================
   3D MODEL
========================================================= */

const modelContainer =
    document.getElementById(
        "modelContainer"
    );

const loading =
    document.getElementById(
        "modelLoading"
    );


/* =========================================================
   THREE.JS SCENE
========================================================= */

const scene =
    new THREE.Scene();


/* =========================================================
   CAMERA
========================================================= */

const camera =
    new THREE.PerspectiveCamera(
        35,

        modelContainer.clientWidth /
        modelContainer.clientHeight,

        0.1,

        1000
    );


camera.position.set(
    0,
    1,
    5
);


/* =========================================================
   RENDERER
========================================================= */

const renderer =
    new THREE.WebGLRenderer({

        antialias: true,

        alpha: true

    });


renderer.setPixelRatio(
    Math.min(
        window.devicePixelRatio,
        2
    )
);


renderer.setSize(
    modelContainer.clientWidth,
    modelContainer.clientHeight
);


renderer.outputColorSpace =
    THREE.SRGBColorSpace;


renderer.shadowMap.enabled =
    true;


renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;


modelContainer.appendChild(
    renderer.domElement
);


/* =========================================================
   ORBIT CONTROLS
========================================================= */

const controls =
    new OrbitControls(
        camera,
        renderer.domElement
    );


controls.enableDamping =
    true;

controls.dampingFactor =
    0.06;


/* Auto 360° rotation */

controls.autoRotate =
    true;

controls.autoRotateSpeed =
    1.5;


/* Zoom */

controls.enableZoom =
    true;

controls.minDistance =
    2;

controls.maxDistance =
    8;


/* Vertical limits */

controls.minPolarAngle =
    Math.PI * 0.25;

controls.maxPolarAngle =
    Math.PI * 0.75;


/* Disable pan */

controls.enablePan =
    false;


/* =========================================================
   LIGHTS
========================================================= */


/* Cyan */

const cyanLight =
    new THREE.PointLight(
        0x00eaff,
        100,
        10
    );


cyanLight.position.set(
    2,
    3,
    4
);


scene.add(
    cyanLight
);


/* Purple */

const purpleLight =
    new THREE.PointLight(
        0x8b5cf6,
        100,
        10
    );


purpleLight.position.set(
    -3,
    1,
    2
);


scene.add(
    purpleLight
);


/* White front */

const frontLight =
    new THREE.DirectionalLight(
        0xffffff,
        3
    );


frontLight.position.set(
    0,
    4,
    5
);


scene.add(
    frontLight
);


/* Ambient */

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        1.5
    );


scene.add(
    ambientLight
);


/* =========================================================
   LOAD GLTF
========================================================= */

let model = null;


const loader =
    new GLTFLoader();


/*
    MODEL LOCATION

    C:\Users\Solicode\Desktop\main\MyProjects\models\spider_robot_free\scene.gltf
*/

const MODEL_PATH =
    "./models/spider_robot_free/scene.gltf";


loader.load(

    MODEL_PATH,


    /* =====================================================
       MODEL LOADED
    ===================================================== */

    (gltf) => {

        console.log(
            "3D MODEL LOADED:",
            gltf
        );


        model =
            gltf.scene;


        /* Enable shadows */

        model.traverse(
            (object) => {

                if (
                    object.isMesh
                ) {

                    object.castShadow =
                        true;

                    object.receiveShadow =
                        true;


                    if (
                        object.material
                    ) {

                        object.material.needsUpdate =
                            true;
                    }
                }

            }
        );


        /* ================================================
           CALCULATE SIZE
        ================================================ */

        const box =
            new THREE.Box3()
                .setFromObject(
                    model
                );


        const size =
            box.getSize(
                new THREE.Vector3()
            );


        const center =
            box.getCenter(
                new THREE.Vector3()
            );


        /* ================================================
           CENTER MODEL
        ================================================ */

        model.position.sub(
            center
        );


        /* ================================================
           MOVE MODEL UP
        ================================================ */

        model.position.y += 0.2;


        /* ================================================
           AUTO SCALE
        ================================================ */

        const maxSize =
            Math.max(
                size.x,
                size.y,
                size.z
            );


        const targetSize =
            3.2;


        if (
            maxSize > 0
        ) {

            const scale =
                targetSize /
                maxSize;


            model.scale.setScalar(
                scale
            );
        }


        /* ================================================
           ADD MODEL
        ================================================ */

        scene.add(
            model
        );


        /* ================================================
           HIDE LOADING
        ================================================ */

        loading.classList.add(
            "hidden"
        );


        setTimeout(
            () => {

                resize3D();

            },
            50
        );

    },


    /* =====================================================
       LOADING
    ===================================================== */

    (progress) => {

        if (
            progress.total > 0
        ) {

            const percent =
                (
                    progress.loaded /
                    progress.total
                ) * 100;


            loading.textContent =
                `LOADING 3D ${Math.round(percent)}%`;
        }

    },


    /* =====================================================
       ERROR
    ===================================================== */

    (error) => {

        console.error(
            "3D MODEL ERROR:",
            error
        );


        loading.textContent =
            "3D MODEL ERROR";


        loading.style.color =
            "#ff3b3b";
    }

);


/* =========================================================
   RESIZE 3D
========================================================= */

function resize3D() {

    const w =
        modelContainer.clientWidth;


    const h =
        modelContainer.clientHeight;


    if (
        w === 0 ||
        h === 0
    ) {

        return;
    }


    camera.aspect =
        w / h;


    camera.updateProjectionMatrix();


    renderer.setSize(
        w,
        h
    );
}


window.addEventListener(
    "resize",
    resize3D
);


/* =========================================================
   ANIMATION
========================================================= */

function animate3D() {

    requestAnimationFrame(
        animate3D
    );


    controls.update();


    renderer.render(
        scene,
        camera
    );
}


animate3D();
