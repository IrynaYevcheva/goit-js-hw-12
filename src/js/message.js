import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function iziToastMessage(message) {
  iziToast.show({
    close: false,
    closeOnClick: true,
    message,
    messageColor: 'white',
    timeout: 3000,
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    position: 'topRight',
    backgroundColor: '#EF4040',
    progressBar: false,
  });
}
