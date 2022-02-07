import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import { addDoc, collection, getDocs } from "firebase/firestore";

const Home = () => {
    const [nweet, setNweet] = useState("");
    const [nweets, setNweets] = useState([]);

    const getNweets = async () => {
        const dbNweets = await getDocs(collection(dbService, "nteets"));
        // console.log(dbNweets)
        dbNweets.forEach((document) => {
            const nweetObject = {
                ...document.data(),
                id: document.id,
            };
            setNweets((prev) => [nweetObject, ...prev]);
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(dbService, "nteets"), {
                nweet,
                createdAt: Date.now()
            })
        } catch (error) {
            console.log(error);
        }
        setNweet("");
    };

    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNweet(value);
    };

    useEffect(() => {
        getNweets();
    }, []);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={nweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="Nweet" />
            </form>
            <div>
                {nweets.map((nweet) => (
                    <div key={nweet.id}>
                        <h4>{nweet.nweet}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;