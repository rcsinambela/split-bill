export default function Friend({ friend }) {
    return (
        <li>
            <img src={friend.image} alt={friend.image} />
            <h3>{friend.name}</h3>
            {friend.balance < 0 && (
                <p className="red">
                    Saya berhutang Rp{Math.abs(friend.balance)} ke {friend.name}
                </p>
            )}
            {friend.balance > 0 && (
                <p className="green">
                    {friend.name} berhutang Rp{Math.abs(friend.balance)} ke saya
                </p>
            )}
            {friend.balance === 0 && (
                <p>{friend.name} dan saya tidak mempunyai utang</p>
            )}
            <button className="button">Pilih</button>
        </li>
    );
}
