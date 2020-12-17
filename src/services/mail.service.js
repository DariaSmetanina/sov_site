import axios from 'axios';
import authHeader from './auth-header';

const MAILAPI_URL = 'http://localhost:8088/api/mail/';

class MailService {

    sendMail(mail) {
        return axios.post(MAILAPI_URL + 'newMail', {
                from: mail.from,
                to: mail.to,
                subject: mail.subject,
                text: mail.text
            },
            {headers: authHeader()});
    }

    sendNotification(mail) {
        return axios.post(MAILAPI_URL + 'notification', {
                from: mail.from,
                to: mail.to,
                importance: mail.importance,
                subject: mail.subject,
                text: mail.text
            },
            {headers: authHeader()});
    }


}

export default new MailService();
