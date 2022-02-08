const getMyNweets = async () => {
    const q = query(
        collection(dbService, "nweets"),
        where("creatorId", "==", userObj.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
    });
};

useEffect(() => {
    getMyNweets();
}, []);