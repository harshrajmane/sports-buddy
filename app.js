import { auth, db } from "./firebase.js";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ================= LOGIN =================
window.login = function() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("User logged in:", email);
            alert("Login successful!");
            window.location.href = "dashboard.html";
        })
        .catch(error => alert(error.message));
}


// ================= REGISTER =================
window.register = function() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log("User registered:", email);
            alert("Registration successful!");
            window.location.href = "login.html";
        })
        .catch(error => alert(error.message));
}


// ================= LOGOUT =================
window.logout = function(){
    signOut(auth).then(() => {
        console.log("User logged out");
        window.location.href = "login.html";
    });
}


// ================= AUTH PROTECTION =================
onAuthStateChanged(auth, user => {
    if(!user && document.getElementById("eventsList")){
        window.location.href = "login.html";
    }
});


// ================= LOAD EVENTS =================
async function loadEvents(){

    const querySnapshot = await getDocs(collection(db, "events"));
    const list = document.getElementById("eventsList");

    if(!list) return;

    list.innerHTML = "";

    querySnapshot.forEach(documentItem => {

        const data = documentItem.data();

        const div = document.createElement("div");
        div.className = "eventCard";

        div.innerHTML = `
            <h3>${data.sport}</h3>
            <p>Location: ${data.location}</p>
            <p>Date: ${data.date}</p>
            <p>Players Needed: ${data.playersNeeded}</p>
            <button class="joinBtn">Join Event</button>
            <button class="deleteBtn">Delete Event</button>
        `;

        // ================= JOIN EVENT =================
        const joinBtn = div.querySelector(".joinBtn");

        joinBtn.addEventListener("click", async () => {

            const user = auth.currentUser;

            if(!user){
                alert("You must be logged in");
                return;
            }

            // Prevent duplicate join
            const existing = await getDocs(collection(db, "joins"));

            let alreadyJoined = false;

            existing.forEach(item => {
                const joinData = item.data();
                if(joinData.eventId === documentItem.id && joinData.userId === user.uid){
                    alreadyJoined = true;
                }
            });

            if(alreadyJoined){
                alert("You already joined this event");
                return;
            }

            await addDoc(collection(db, "joins"), {
                eventId: documentItem.id,
                userId: user.uid
            });

            console.log("User joined event:", documentItem.id);

            joinBtn.textContent = "Joined ✓";
            joinBtn.disabled = true;

            alert("Joined successfully!");
        });


        // ================= DELETE EVENT =================
        const deleteBtn = div.querySelector(".deleteBtn");

        deleteBtn.addEventListener("click", async () => {

            if(confirm("Are you sure you want to delete this event?")){

                await deleteDoc(doc(db, "events", documentItem.id));

                console.log("Event deleted:", documentItem.id);

                loadEvents();
            }
        });

        list.appendChild(div);
    });
}


// ================= RUN ON DASHBOARD =================
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById("eventsList")){
        loadEvents();
    }
});
