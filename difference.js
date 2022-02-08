const onFileChange = (event) => {
    const {
        target: { files },
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
        console.log(finishedEvent);
    };
    reader.readAsDataURL(theFile);
};

<input type="file" accept="image/*" onChange={onFileChange} />

