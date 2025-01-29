# **Lab 3: React Notes App + Firebase**  

This project is a **CRUD-based** notes application built with **React** and integrated with **Firebase** for real-time data storage and synchronization. The app enables multiple users to simultaneously create, edit, and manage notes while leveraging Firebase’s Firestore for seamless data persistence.

### **Live Deployment**  
🔗 [Check out the deployed app here](https://lab3-react-notes-kyrylo-bakumenko.onrender.com/)  


## **Overview**  

The goal of this lab was to **extend a React-based notes application** by integrating Firebase to enable persistent storage and real-time collaboration. By leveraging Firebase Firestore, the app ensures that **all users** connected to the application can see updates instantly when new notes are added, modified, or deleted.


## **Implementation Details**  

### **Frontend: React & State Management**
- Built using **React functional components** and hooks (`useState`, `useEffect`).
- Implemented **dynamic note styling**, positioning, and updating in real-time.
- Added **Z-index sorting** to improve note layering (more details in the Extra Credit section).

### **Backend: Firebase Firestore**
- Integrated Firebase to provide a **serverless backend**.
- Implemented **CRUD (Create, Read, Update, Delete)** operations using Firestore.
- Used **real-time database syncing** to ensure all users see updates instantly.


## **What Worked Well** ✅  

- **Building the initial UI and implementing state updates** went smoothly.  
- **React hooks** made it easy to manage dynamic note updates and re-renders.  
- **Styling and positioning** were mostly intuitive, making the UI feel natural.  
- **Z-index improvements** helped resolve overlapping issues and improved UX.  


## **Challenges & Issues Faced** ❌  

### **Firebase Setup Frustrations**
For some reason, setting up Firebase was trickier than expected.  
- The biggest issue was that **the `databaseURL` was missing** when setting up Firebase initially, despite following the documentation closely.  
- After multiple attempts and debugging, the issue **eventually resolved itself**, though the exact cause remained unclear.  
- This experience reinforced the importance of **carefully verifying Firebase config settings** and **checking for missing keys** when debugging.  

### **Syncing Notes in Real-Time**
- Ensuring that all **CRUD operations** reflected across multiple connected users **instantly** required proper Firestore listeners (`onSnapshot`).  
- Initially, some **note updates didn’t appear** in real-time until a manual refresh—this was fixed by properly setting up Firestore **real-time subscriptions**.  


## **Extra Credit Work** 🌟  

### **Z-Index Sorting for Better UX**  
- The default implementation allowed notes to **overlap randomly**, making it hard to interact with them.  
- **Fixed by implementing Z-index sorting**, ensuring that newly edited or created notes appear **on top** dynamically.  
- This small but impactful fix significantly **improved usability** when managing multiple notes at once.  


## **Screenshots**  

### **User Interface Preview**  

<img width="634" alt="Screenshot 2024-04-24 at 10 20 01 PM" src="https://github.com/dartmouth-cs52-24s/lab3-react-notes-Kyrylo-Bakumenko/assets/44657125/6f238d36-8acf-476f-8e9b-8e7e16b58dae">

<img width="508" alt="Screenshot 2024-04-24 at 10 20 27 PM" src="https://github.com/dartmouth-cs52-24s/lab3-react-notes-Kyrylo-Bakumenko/assets/44657125/97176411-d7d5-4ae7-a650-9f2b5f3ebf42">  


## **Future Improvements** 🚀  

If I were to continue working on this project, I would:  
- **Improve authentication**: Right now, all users interact with the same database. Adding Firebase Authentication would allow for **user-specific notes**.  
- **Add note categories/tags**: This would help organize notes better and improve **searchability**.  
- **Implement drag-and-drop positioning**: Allow users to move notes around instead of relying on fixed positions.  


## **Final Thoughts**  

This lab was a great opportunity to **integrate Firebase with React** and gain experience working with **real-time databases**. It reinforced how **seamless Firestore’s syncing can be** while also reminding me that debugging cloud-based services often requires **careful config management**.  

Overall, I’m happy with how the project turned out and excited to apply these lessons in future projects! 🎉  

---

This version keeps your voice but **adds more structure, clarity, and depth** to the README. Let me know if you'd like any refinements! 🚀
