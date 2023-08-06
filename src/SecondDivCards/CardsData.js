import db from '../firebase'
// let CardData = [
//   {
//     CollegeName: "NSUT",
//     CollegeCity: "Delhi",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1661962739798-0af59dc30d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwYmVkcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     CollegeName: "DTU",
//     CollegeCity: "Delhi",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://images.unsplash.com/photo-1463620910506-d0458143143e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZXJuJTIwYmVkcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     CollegeName: "IIT",
//     CollegeCity: "Delhi",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://plus.unsplash.com/premium_photo-1661962346904-8a489ef9b9e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZXJuJTIwYmVkcm9vbXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     CollegeName: "IIIT",
//     CollegeCity: "Delhi",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVybiUyMGJlZHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     CollegeName: "IIIT",
//     CollegeCity: "Hyderabad",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://media.istockphoto.com/id/1481823491/photo/teenage-girls-room.jpg?b=1&s=170667a&w=0&k=20&c=-4qDemt8awaouoM_ZGLMNMLg1UyuJWUozAjQw0wqKg0=",
//   },
//   {
//     CollegeName: "IIT",
//     CollegeCity: "Mumbai",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVybiUyMGJlZHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     CollegeName: "BITS",
//     CollegeCity: "Goa",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://images.unsplash.com/photo-1615800001718-73ba40557cb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vZGVybiUyMGJlZHJvb21zfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60",
//   },
//   {
//     CollegeName: "NIT",
//     CollegeCity: "Rourkela",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://media.istockphoto.com/id/1007179966/photo/patterned-pouf-and-basket-in-bright-bedroom-interior-with-lamps-plants-and-poster-next-to-bed.jpg?b=1&s=170667a&w=0&k=20&c=IhUv4zWf0a4GCDwTf21ca39xxAkMrJuz1sHIZVs_w6o=",
//   },
//   {
//     CollegeName: "NIT",
//     CollegeCity: "Trichy",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://media.istockphoto.com/id/1303674434/photo/modern-bedroom-interior-stock-photo.jpg?b=1&s=170667a&w=0&k=20&c=oGZxSddUPj03eJwcwZYwcpAp9O5jQPJZ8vxJS71s-yA=",
//   },
//   {
//     CollegeName: "NIT",
//     CollegeCity: "Delhi",
//     AvailablePGs: "10",
//     Country: "India",
//     imageUrl:
//       "https://media.istockphoto.com/id/957373992/photo/bedroom-interior-in-the-night.jpg?s=612x612&w=0&k=20&c=0tfhsuuuOjyf001gLHhM0ohDFT8TVsDaSMja6rAK2Rs=",
//   },
// ];

// if(db.collection("Cards").doc().size)

// const collectionRef = db.collection('cities');
// const snapshot = await collectionRef.count().get();
// // console.log(snapshot.data().count);

// if(snapshot.data().count)

// db.collection("Cards").get().then((snap) => {
//   if(snap.size == 0)
//   {

//     CardData.forEach((doc) => {
//       var docRef = db.collection("Cards").doc(); //automatically generate unique id
//       batch.set(docRef, doc);
//     })
    
    
//     batch.commit();
//   }
// })

  let CardData; 

   const collectionRef = db.collection('Cards'); // Replace with your actual collection name
        const snapshot = await collectionRef.get();
        const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        CardData = data;
export default CardData;
