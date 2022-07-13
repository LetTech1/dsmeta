import icon from '../../assets/img/notification-icon.svg'
import './styles.css'

function NotificationButton() {
    return (
    <div className="dsmeta-button-notification">
        <img src={icon} alt="Notificar" />
    </div>)
}

export default NotificationButton