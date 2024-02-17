export default function SplitBill() {
    return (
        <form action="" className="form-split-bill">
            <h2>Patungan bareng si X</h2>

            <label htmlFor="">💵Total Tagihan</label>
            <input type="text" />

            <label htmlFor="">🙎🏼‍♂️Tagihan Kamu</label>
            <input type="text" name="" id="" />

            <label htmlFor="">🙋🏼‍♂️Tagihan X</label>
            <input type="text" name="" id="" disabled />

            <label htmlFor="">🤑Ditalangin sama</label>
            <select name="" id="">
                <option value="user">Saya</option>
                <option value="friend">X</option>
            </select>

            <button className="button">Tambah</button>
        </form>
    );
}
