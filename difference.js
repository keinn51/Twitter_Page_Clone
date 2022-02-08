const refreshUser = () => {
    const user = authService.currentUser;
    setUserObj({
        displayName: user.displayName,
        uid: user.uid,
        updateProfile: () => updateProfile(user, { displayName: user.displayName }),
    });
};