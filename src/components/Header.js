import logo from '../logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
        <div className='flex col-span-10'>
        <Link to="/">
            <img 
            className='h-8 mx-3'
            alt='logo'
            src={logo}
            //src='https://image.winudf.com/v2/image/Y29tLnZpZGVvLm11c2ljLnZpZC5yZWxvYWRlZGFwcF9zY3JlZW5fMF8xNTIxNjAwNTIwXzAwMg/screen-0.webp?fakeurl=1&type=.webp'
             />
            </Link>
        </div>
        <div className='col-span-1 px-10'>
        <Link to={"/cart"} >   
            <div className='relative text-2xl font-bold'>
              Cart
            </div>
            </Link> 
        </div>
        <div className='col-span-1'>
            <img 
            className='h-8'
            alt='user' 
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmoGtyISMVoKuWRqAo9KLfl1g84gWVdOvCYk41aKGhUMDKrryDgM3hAYXRmm-Ad1wUaEE' />
        </div>
    </div>
  )
}

export default Header