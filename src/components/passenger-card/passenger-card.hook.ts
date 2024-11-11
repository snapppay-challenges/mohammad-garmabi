import paths from '@/routes/paths';
import { useNavigate } from 'react-router-dom';
import { PassengerCardProps } from './passenger-card.types';

const usePassengerCardLogical = (props: PassengerCardProps) => {
  const navigate = useNavigate();

  const handleNavigateToDetails = () => {
    navigate(paths['contactID'](String(props.id)));
  };

  const handleNavigateToTelegram = () => {
    window.open(`https://t.me/${props.telegram}`, '_blank');
  };

  const handleShareContent = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${props.first_name} ${props.last_name}`,
          text: `Phone Number: ${props.phone}`,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return {
    handleNavigateToDetails,
    handleNavigateToTelegram,
    handleShareContent,
  };
};

export default usePassengerCardLogical;
