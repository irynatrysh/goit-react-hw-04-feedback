import PropTypes from 'prop-types';
import { NotificationDescription } from './Notification.styled';

export const Notification = ({ message }) =>{
return <NotificationDescription>{message}</NotificationDescription>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
  };