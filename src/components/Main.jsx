import { useNavigate } from 'react-router-dom';
import Countertimer from "./CountdownTimer";

const Main = () => {
    const navigate = useNavigate();
    const onOrder = () => {
      navigate('/order');
    }
    return (
        <div className="container">
        <h2 className="heading2">Promocja!</h2>
        <p className="wait">Nie zwlekaj i zyskaj Rabat</p>
        <div className="label">
            nawet 40%
        </div>
        <p className="buy">na kolejne zamówienie</p>
        <div className="box">
        <button onClick={onOrder} className="action">
        ZAMOW JUZ TERAZ
        </button>
        <div className="timer">DO KOŃCA AKCJI POZOSTAŁO </div>
        <div className="countdown">
          <Countertimer countdownTimestampMs={1643673600000}/>
        </div>
      </div>
    </div>
    )
}

export default Main;