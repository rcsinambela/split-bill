import Friend from "./Friend";

export default function FriendList({ friends, onSelectedFriend }) {
    return (
        <ul>
            {friends.map((friend, index) => (
                <Friend
                    friend={friend}
                    key={index}
                    onSelectedFriend={onSelectedFriend}
                ></Friend>
            ))}
        </ul>
    );
}
