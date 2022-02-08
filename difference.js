const onFileChange = (event) => {
    const {
        target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
        const {
            currentTarget: { result },
        } = finishedEvent;
        console.log(finishedEvent.currentTarget)
        setAttachment(result);
    };
    reader.readAsDataURL(theFile);
};

<input type="file" accept="image/*" onChange={onFileChange} />
    <input type="submit" value="Nweet" />
{
    attachment && (
        <div>
            <img src={attachment} width="100px" height="100px" />
            <button onClick={onClearAttachment}>Clear</button>
        </div>
    )
}