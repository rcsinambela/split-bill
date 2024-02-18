import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import SplitBill from "./components/SplitBill";
import gojo from "./img/gojo-500-500-1259610.jpg";
import shoyo from "./img/shoyo-400-400-1261369.png";
import sung from "./img/sung-400-400-1093511.png";
import { useState } from "react";

const initialFriends = [
    {
        id: 118836,
        name: "Gojo Satoru",
        image: `${gojo}?=118836`,
        balance: -70000,
    },
    {
        id: 933372,
        name: "Sung Jin-woo",
        image: `${sung}?=933372`,
        balance: 25000,
    },
    {
        id: 499476,
        name: "Shōyō Hinata",
        image: `${shoyo}?=49947`,
        balance: 0,
    },
];

export default function App() {
    const [friends, setFriends] = useState(initialFriends);
    const [showAddFriend, setShowAddFriend] = useState(false);

    function handleShowAddFriend() {
        setShowAddFriend((showAddFriend) => !showAddFriend);
    }

    function handleAddFriend(friend) {
        setFriends((friends) => [...friends, friend]);
    }
    return (
        <div className="app">
            <div className="sidebar">
                <FriendList friends={friends}></FriendList>
                {showAddFriend && (
                    <AddFriend onAddFriend={handleAddFriend}></AddFriend>
                )}
                <button className="button" onClick={handleShowAddFriend}>
                    {showAddFriend ? "Tutup" : "Tambah Teman"}
                </button>
            </div>
            <SplitBill></SplitBill>
        </div>
    );
}
