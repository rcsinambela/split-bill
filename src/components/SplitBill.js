export default function SplitBill({ selectedFriend }) {
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan bareng si {selectedFriend.name}</h2>

            <label htmlFor="">💵Total Tagihan</label>
            <input type="text" />

            <label htmlFor="">🙎🏼‍♂️Tagihan Kamu</label>
            <input type="text" name="" id="" />

            <label htmlFor="">🙋🏼‍♂️Tagihan {selectedFriend.name}</label>
            <input type="text" name="" id="" disabled />

            <label htmlFor="">🤑Ditalangin sama</label>
            <select name="" id="">
                <option value="user">Saya</option>
                <option value="friend">{selectedFriend.name}</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    );
}
