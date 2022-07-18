import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../Utils/request';
import './styles.css';

type Props = {
    saleId: number;
}

function handleClick(id: number) {
    axios(`${BASE_URL}/sales/${id}/notification`)
        .then(response => {
            console.log("Sucesso");
        });
}

function NotificationButton({ saleId }: Props) {
    return (
        <div className="dsmeta-button-notification" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>)
}

export default NotificationButton;