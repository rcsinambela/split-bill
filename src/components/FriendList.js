import Friend from "./Friend";

export default function FriendList({
    friends,
    onSelectedFriend,
    selectedFriend,
}) {
    return (
        <ul>
            {friends.map((friend, index) => (
                <Friend
                    friend={friend}
                    key={index}
                    onSelectedFriend={onSelectedFriend}
                    selectedFriend={selectedFriend}
                ></Friend>
            ))}
        </ul>
    );
}
