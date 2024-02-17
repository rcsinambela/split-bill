import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";
import SplitBill from "./components/SplitBill";
import gojo from "./img/gojo-500-500-1259610.jpg";
import shoyo from "./img/shoyo-400-400-1261369.png";
import sung from "./img/sung-400-400-1093511.png";

const initialFriends = [
    {
        id: 118836,
        name: "Gojo Satoru",
        image: gojo,
        balance: -70000,
    },
    {
        id: 933372,
        name: "Sung Jin-woo",
        image: sung,
        balance: 25000,
    },
    {
        id: 499476,
        name: "Shōyō Hinata",
        image: shoyo,
        balance: 0,
    },
];

export default function App() {
    return (
        <div className="app">
            <div className="sidebar">
                <FriendList friends={initialFriends}></FriendList>
                <AddFriend></AddFriend>
                <button className="button">Tambah Teman</button>
            </div>
            <SplitBill></SplitBill>
        </div>
    );
}
