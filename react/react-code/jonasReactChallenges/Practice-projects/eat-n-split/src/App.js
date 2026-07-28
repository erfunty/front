import { use, useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen,setIsOpen]=useState(false)
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        {!isOpen&&<Button onClick={setIsOpen}>add friend</Button>}
        
        {isOpen&&<FormAddFriend/>}
        {isOpen &&<Button onClick={setIsOpen}>close</Button>}
        
      </div>
      <FormSplitBill />
    </div>
  );
}
function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((f) => (
        <Friend f={f} />
      ))}
    </ul>
  );
}
function Friend({ f }) {
  return (
    <li>
      <img src={f.image} alt={f.name} />
      <h3>{f.name}</h3>
      {f.balance > 0 && (
        <p className="green">
          {f.name} owes u {Math.abs(f.balance)}$
        </p>
      )}
      {f.balance < 0 && (
        <p className="red">
          u owe {f.name} {Math.abs(f.balance)}$
        </p>
      )}
      {f.balance === 0 && <p>even</p>}
      <button className="button">select</button>
    </li>
  );
}

function Button({onClick, children }) {
  return<button className="button" onClick={()=>onClick(s=>!s)}>{children}</button>;
}
function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label># Friend name</label>
      <input type="text" />

      <label>img URL</label>
      <input type="text" />

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label> Bill value</label>
      <input type="text" />

      <label> Your expense</label>
      <input type="text" />

      <label> X's expense</label>
      <input type="text" disabled />

      <label> Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default App;
