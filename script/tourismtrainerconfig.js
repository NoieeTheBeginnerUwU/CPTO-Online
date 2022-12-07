
    import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
    import {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut
    } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
    import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

    const firebaseConfig = {
    apiKey: "AIzaSyDA1XjvPrrZiMLhYRRV1Ar23p4SF2lJq9I",
    authDomain: "cpto-d7b0b.firebaseapp.com",
    projectId: "cpto-d7b0b",
    storageBucket: "cpto-d7b0b.appspot.com",
    messagingSenderId: "633926478402",
    appId: "1:633926478402:web:3e659a8d5f50793d299bdb",
    measurementId: "G-WNZKRQGELD"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();
    const database = getDatabase(app);
    let btn = document.getElementById('btn');

    btn.addEventListener('click', (e) => {
        send();
    })

    function send(){
        let email16 = document.getElementById('email16').value;
        let prefix = document.getElementById('prefix17').value;
        let suffix = document.getElementById('suffix17').value;
        let firstname = document.getElementById('first17').value;
        let middlename = document.getElementById('middle17').value;
        let lastname = document.getElementById('last17').value;
        let maidenname = document.getElementById('maden17').value;
        let mobilenumber = document.getElementById('mobile17').value;
        let phonenumber = document.getElementById('phone17').value;
        let nationality = document.getElementById('nationality17').value;
        let birthday = document.getElementById('dob17').value;
        let gender = document.getElementById('gender17');
        let status = document.getElementById('status17');
        let type = document.getElementById('type17');
        let number = document.getElementById('no17').value;
        let street = document.getElementById('street17').value;
        let region = document.getElementById('region17').value;
        let city = document.getElementById('city17').value;
        let municipality = document.getElementById('municipality17').value;
        let permit = document.getElementById('permit17').value;
        let place = document.getElementById('place17').value;
        let valid = document.getElementById('valid17').value;
        let tgID = 0;
        alert("working");
        set(ref(database, 'Registration/Tour-Guide' + ++tgID), {
            email: email16,
            prefix: prefix,
            suffix: suffix,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            maidenname: maidenname,
            mobilenumber: mobilenumber,
            phonenumber: phonenumber,
            nationality: nationality,
            gender: gender,
            status: status,
            type: type,
            number: number,
            street: street,
            region: region,
            city: city,
            municipality: municipality,
            permit: permit,
            place: place,
            valid: valid
        }).then(alert("Tour Guide Registration Request Sent."))
    }   