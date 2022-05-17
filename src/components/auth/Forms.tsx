import {FC, useState } from 'react';

interface FormProps{
  title: string;
  handleClick: (email: string, pass: string) => void;
}

const Forms: FC<FormProps> = ({title, handleClick}) => {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');

  return (
    <>
      <h1>{title}</h1>
      <form className='autorization'>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <label>Password</label>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          placeholder="Enter password"
        />
        <button className="add_btn" onClick={
          (event) => {event.preventDefault(); handleClick(email, pass);
          }} >{title}</button>
      </form>
    </>
  );
};

export {Forms};
