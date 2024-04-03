import { useState, useEffect } from 'react'
import Navbar from './nav';
import Message from './components/message';
import Mymessage from './components/myMessage';


const Home = () => {

    const [color, setColor] = useState('#C9E8E4');
    const [isReplying, setIsReplying] = useState(false);
    const [message, setReplyMessage] = useState('');

    const handleMassage = (messageText, username) => {
        // Perform the reply action here
        setReplyMessage(messageText)
        handleReply()
    };

    const handleReply = () => {
        // Perform the reply action here
        setIsReplying(!isReplying)
    };

    const click = color => {
        setColor(color)
    }
    /* This is where we actually
       change background color */
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])

    const handleComment = () => {

    }

    return (
        <div className="home">

            <Message replyHandle={handleMassage} />

            <Mymessage />



            <form action="" className="newM" onSubmit={e => e.preventDefault()}>
                <div className={isReplying ? "repling" : "unvisible"} id='repling'>
                    <div className="line"></div>
                    <div className="replyTo">Amir <br />{message}</div>
                    <button onClick={() => {
                        handleReply();
                    }}>

                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.4 24L0 21.6L9.6 12L0 2.4L2.4 0L12 9.6L21.6 0L24 2.4L14.4 12L24 21.6L21.6 24L12 14.4L2.4 24Z" fill="black" />
                        </svg>

                    </button>
                </div>
                <div className='mm'>
                    <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3636 25.3976C9.79167 25.3976 8.31439 25.0801 6.93182 24.4452C5.54924 23.8103 4.34659 22.9486 3.32386 21.8601C2.30114 20.7716 1.49148 19.4917 0.894886 18.0202C0.298295 16.5488 0 14.9765 0 13.3035C0 11.6305 0.298295 10.0583 0.894886 8.58681C1.49148 7.11536 2.30114 5.8354 3.32386 4.74693C4.34659 3.65847 5.54924 2.79676 6.93182 2.16182C8.31439 1.52688 9.79167 1.20941 11.3636 1.20941C12.178 1.20941 12.964 1.29508 13.7216 1.46641C14.4792 1.63774 15.2083 1.88466 15.9091 2.20717V4.92835C15.2462 4.52521 14.5312 4.20774 13.7642 3.97594C12.9972 3.74413 12.197 3.62823 11.3636 3.62823C8.8447 3.62823 6.69981 4.57056 4.92898 6.45523C3.15814 8.33989 2.27273 10.6227 2.27273 13.3035C2.27273 15.9844 3.15814 18.2671 4.92898 20.1518C6.69981 22.0365 8.8447 22.9788 11.3636 22.9788C13.8826 22.9788 16.0275 22.0365 17.7983 20.1518C19.5691 18.2671 20.4545 15.9844 20.4545 13.3035C20.4545 12.6585 20.393 12.0336 20.2699 11.4289C20.1468 10.8242 19.9811 10.2397 19.7727 9.67528H22.2159C22.3864 10.2598 22.5142 10.8494 22.5994 11.444C22.6847 12.0387 22.7273 12.6585 22.7273 13.3035C22.7273 14.9765 22.429 16.5488 21.8324 18.0202C21.2358 19.4917 20.4261 20.7716 19.4034 21.8601C18.3807 22.9486 17.178 23.8103 15.7955 24.4452C14.4129 25.0801 12.9356 25.3976 11.3636 25.3976ZM20.4545 7.25646V4.83764H18.1818V2.41882H20.4545V0H22.7273V2.41882H25V4.83764H22.7273V7.25646H20.4545ZM15.3409 12.0941C15.8144 12.0941 16.2169 11.9177 16.5483 11.565C16.8797 11.2122 17.0455 10.7839 17.0455 10.28C17.0455 9.77606 16.8797 9.34773 16.5483 8.99499C16.2169 8.64224 15.8144 8.46587 15.3409 8.46587C14.8674 8.46587 14.465 8.64224 14.1335 8.99499C13.8021 9.34773 13.6364 9.77606 13.6364 10.28C13.6364 10.7839 13.8021 11.2122 14.1335 11.565C14.465 11.9177 14.8674 12.0941 15.3409 12.0941ZM7.38636 12.0941C7.85985 12.0941 8.26231 11.9177 8.59375 11.565C8.92519 11.2122 9.09091 10.7839 9.09091 10.28C9.09091 9.77606 8.92519 9.34773 8.59375 8.99499C8.26231 8.64224 7.85985 8.46587 7.38636 8.46587C6.91288 8.46587 6.51042 8.64224 6.17898 8.99499C5.84754 9.34773 5.68182 9.77606 5.68182 10.28C5.68182 10.7839 5.84754 11.2122 6.17898 11.565C6.51042 11.9177 6.91288 12.0941 7.38636 12.0941ZM11.3636 19.9553C12.6515 19.9553 13.821 19.5672 14.8722 18.7912C15.9233 18.0152 16.6856 16.9922 17.1591 15.7223H5.56818C6.04167 16.9922 6.80398 18.0152 7.85511 18.7912C8.90625 19.5672 10.0758 19.9553 11.3636 19.9553Z" fill="black" />
                    </svg>
                    <input type="text" placeholder="Message" />
                    <button type='submit' style={{ backgroundColor: 'white' }}><svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25.5646V0.166992L25 12.8658L0 25.5646ZM2.63158 20.8026L18.2237 12.8658L2.63158 4.92904V10.4848L10.5263 12.8658L2.63158 15.2468V20.8026Z" fill="black" />
                    </svg>
                    </button>
                </div>
            </form>
            <div className="bLank">

            </div>
            <Navbar />
        </div>

    )
}
export default Home;