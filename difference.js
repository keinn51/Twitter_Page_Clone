
const onChange = (event) => {
    const {
        target: { value },
    } = event;
    setNewDisplayName(value);
};

const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
        await updateProfile(userObj, { displayName: newDisplayName });
    }
};

<form onSubmit={onSubmit}>
    <input
        onChange={onChange}
        type="text"
        placeholder="Display name"
        value={newDisplayName}
    />
    <input type="submit" value="Update Profile" />
</form>