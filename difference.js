const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
        await deleteDoc(doc(dbService, "nweets", `${nweetObj.id}`));
    }
};

const onSubmit = async (event) => {
    event.preventDefault();
    await updateDoc(doc(dbService, "nweets", `${nweetObj.id}`), {
        text: newNweet,
    })
    setEditing(false);
};