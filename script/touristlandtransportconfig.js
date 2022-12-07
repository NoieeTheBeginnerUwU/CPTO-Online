
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
    var submitData = document.getElementById('send');

    send.addEventListener('click', (e) => {

    var email = document.getElementById("email21");
    var tin = document.getElementById("tin21");
    var name = document.getElementById("name21");
    var address = document.getElementById("address21");
    var estab = document.getElementById("estab21");
    var website = document.getElementById("number21");
    var email2 = document.getElementById("emailad21");
    var date = document.getElementById("date21");
    var owner = document.getElementById('owner21');
    var add = document.getElementById("add21");
    var nationality1 = document.getElementById("nationality21");
    var compname = document.getElementById("compname21");
    var compadd = document.getElementById("address212");
    var orgtype = document.getElementById("orgtype");
    var permittype = document.getElementById("permittype");
    var date2 = document.getElementById("datee21");
    var manager = document.getElementById("manager21");
    var mancotact = document.getElementById("contact21");
    var manemail = document.getElementById("email213");
    var manemail2 = document.getElementById("email211");
    var mannat = document.getElementById("nationality21");
    var stockholder1 = document.getElementById("Stockholder21");
    var stockholder2 = document.getElementById("Stockholder21.1");
    var stockholder3 = document.getElementById("Stockholder21.2");
    var stockholder4 = document.getElementById("Stockholder21.3");
    var stockholder5 = document.getElementById("Stockholder21.4");
    var stockholder6 = document.getElementById("Stockholder21.5");
    var stockholder7 = document.getElementById("Stockholder21.6");
    var stockholder8 = document.getElementById("Stockholder21.7");
    var stockholder9 = document.getElementById("Stockholder21.8");
    var stockholder10 = document.getElementById("Stockholder21.9");
    var pos1 = document.getElementById("position21");
    var pos2 = document.getElementById("position21.1");
    var pos3 = document.getElementById("position21.2");
    var pos4 = document.getElementById("position21.3");
    var pos5 = document.getElementById("position21.4");
    var pos6 = document.getElementById("position21.5");
    var pos7 = document.getElementById("position21.6");
    var pos8 = document.getElementById("position21.7");
    var pos9 = document.getElementById("position21.8");
    var pos10 = document.getElementById("position21.9");
    var nationality1 = document.getElementById("nationality21.0");
    var nationality2 = document.getElementById("nationality21.1");
    var nationality3 = document.getElementById("nationality21.2");
    var nationality4 = document.getElementById("nationality21.3");
    var nationality5 = document.getElementById("nationality21.4");
    var nationality6 = document.getElementById("nationality21.5");
    var nationality7 = document.getElementById("nationality21.6");
    var nationality8 = document.getElementById("nationality21.7");
    var nationality9 = document.getElementById("nationality21.8");
    var nationality10 = document.getElementById("nationality21.9");
    var amount1 = document.getElementById("amount21");
    var amount2 = document.getElementById("amount21.1");
    var amount3 = document.getElementById("amount21.2");
    var amount4 = document.getElementById("amount21.3");
    var amount5 = document.getElementById("amount21.4");
    var amount6 = document.getElementById("amount21.5");
    var amount7 = document.getElementById("amount21.6");
    var amount8 = document.getElementById("amount21.7");
    var amount9 = document.getElementById("amount21.8");
    var amount10 = document.getElementById("amount21.9");
    var paid1 = document.getElementById("amountpaid21");
    var paid2 = document.getElementById("amountpaid21.1");
    var paid3 = document.getElementById("amountpaid21.2");
    var paid4 = document.getElementById("amountpaid21.3");
    var paid5 = document.getElementById("amountpaid21.4");
    var paid6 = document.getElementById("amountpaid21.5");
    var paid7 = document.getElementById("amountpaid21.6");
    var paid8 = document.getElementById("amountpaid21.7");
    var paid9 = document.getElementById("amountpaid21.8");
    var paid10 = document.getElementById("amountpaid21.9");
    var pat1 = document.getElementById("foreign21");
    var pat2 = document.getElementById("local21");
    var services1 = document.getElementById("services21");
    var services2 = document.getElementById("services22");
    var services3 = document.getElementById("services23");
    var services4 = document.getElementById("services24");
    var services5 = document.getElementById("services25");
    var services6 = document.getElementById("services26");
    var rep = document.getElementById("repname21");
    var designation = document.getElementById("designation21");
    var repcon = document.getElementById("contactnum21");
    var repemail = document.getElementById("emailadd211");

    set(ref(database, 'AmbulatoryClinic/ '), {
        email: email,
        tin: tin,
        estabName: estab,
        estabAddress:estab,
        estabWebsite: website,
        estabEmail: email12,
        date: date,
        owner: owner,
        add: add,
        nationality: nationality1,
        compname: compname,
        compadd: compadd,
        orgtype: orgtype,
        permittype: permittype,
        expdate: date2, 
        manager: manager,
        mancotact: mancotact,
        manemail: manemail,
        manemail2: manemail2,
        mannat: mannat,
        stockholder1: stockholder1,
        pos1: pos1,
        nationality1: nationality1,
        amount1: amount1,
        paid1: paid1,
        stockholder2: stockholder2,
        pos2: pos2,
        nationality2: nationality2,
        amount2: amount2,
        paid2: paid2,
        stockholder3: stockholder3,
        pos3: pos3,
        nationality3: nationality3,
        amount3: amount3,
        paid4: paid4,
        stockholder4: stockholder4,
        pos4: pos4,
        nationality4: nationality4,
        amount4: amount4,
        paid4: paid4,
        stockholder5: stockholder5,
        pos5: pos5,
        nationality5: nationality5,
        amount5: amount5,
        paid5: paid5,
        stockholder6: stockholder6,
        pos6: pos6,
        nationality6: nationality6,
        amount6: amount6,
        paid6: paid6,
        stockholder7: stockholder7,
        pos7: pos7,
        nationality7: nationality1,
        amount7: amount7,
        paid8: paid7,
        stockholder8: stockholder8,
        pos8: pos8,
        nationality8: nationality8,
        amount8: amount8,
        paid8: paid8,
        stockholder9: stockholder9,
        pos9: pos9,
        nationality9: nationality9,
        amount9: amount9,
        paid9: paid9,
        stockholder10: stockholder10,
        pos10: pos10,
        nationality10: nationality10,
        amount10: amount10,
        paid10: paid10,
        pat1: pat1,
        pat2: pat2,
        services1: services1,
        services2: services2,
        services3: services3,
        services4: services4,
        services5: services5,
        services6: services6,
        rep: rep,
        designation: designation,
        repcon: repcon,
        repemail: repemail
    }).then(alert("Ambulatory Clinic Accreditation Form Submitted, please wait for our response via email."))

    });
    