import * as THREE from 'three';

document.addEventListener("DOMContentLoaded", () => {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
    var cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    var sphere = new THREE.SphereBufferGeometry(0.1, 16, 8);

    let light1 = new THREE.PointLight( 0xff0040, 2, 50 );
    light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
    scene.add( light1 );
    let light2 = new THREE.PointLight( 0x0040ff, 2, 50 );
    light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
    scene.add( light2 );
    let light3 = new THREE.PointLight( 0x80ff80, 2, 50 );
    light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
    scene.add( light3 );
    let light4 = new THREE.PointLight( 0xffaa00, 2, 50 );
    light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
    scene.add( light4 );

    window.addEventListener( 'resize', onWindowResize, false );

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }

    var animate = function () {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        let time = Date.now() * 0.0005;
        light1.position.x = Math.sin( time * 0.7 ) * 2;
        light1.position.y = Math.cos( time * 0.5 ) * 3;
        light1.position.z = Math.cos( time * 0.3 ) * 2;
        light2.position.x = Math.cos( time * 0.3 ) * 2;
        light2.position.y = Math.sin( time * 0.5 ) * 3;
        light2.position.z = Math.sin( time * 0.7 ) * 2;
        light3.position.x = Math.sin( time * 0.7 ) * 2;
        light3.position.y = Math.cos( time * 0.3 ) * 3;
        light3.position.z = Math.sin( time * 0.5 ) * 2;
        light4.position.x = Math.sin( time * 0.3 ) * 2;
        light4.position.y = Math.cos( time * 0.7 ) * 3;
        light4.position.z = Math.sin( time * 0.5 ) * 2;
        renderer.render( scene, camera );
    };

    animate();
}, false);
