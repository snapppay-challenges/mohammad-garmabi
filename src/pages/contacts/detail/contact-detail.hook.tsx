import { TelegramSVG } from '@/assets/svg';
import { useGetByIdPassenger } from '@/hooks/queries/usePassengerQueries';
import { usePassengerStore } from '@/stores/usePassengerStore';
import { Link } from '@mui/material';
import { Eye, Map1, Timer1, UserTick } from 'iconsax-react';
import { useEffect, useMemo } from 'react';
import { useNavigationType, useParams } from 'react-router-dom';

const useContactDetailLogical = () => {
  const { data, isLoading } = useGetByIdPassenger();
  const { setMostViewList, mostViewList } = usePassengerStore();
  const navigateType = useNavigationType() as 'POP' | 'PUSH';
  const { id } = useParams();

  const viewCount = useMemo(() => {
    return mostViewList.find((item) => item.id === data?.id)?.count;
  }, [mostViewList, data]);

  useEffect(() => {
    if (navigateType === 'PUSH') {
      if (id) {
        setMostViewList(+id);
      }
    }
  }, [id, setMostViewList, navigateType]);

  const renderDetails = useMemo(() => {
    return [
      {
        title: 'Gender:',
        value: data?.gender ?? '-',
        icon: <UserTick />,
      },
      {
        title: 'Address:',
        value: data?.address ?? '-',
        icon: <Map1 />,
      },
      {
        title: 'Telegram: ',
        value: <Link href={`https://t.me/${data?.telegram}`}>{data?.telegram ?? '-'}</Link>,
        icon: <img src={TelegramSVG} alt="telegram" style={{ width: 24 }} />,
      },
      {
        title: 'CreatedAt:',
        value: data?.createdAt ? new Date(data?.createdAt).toLocaleDateString() : '-',
        icon: <Timer1 />,
      },
      {
        title: 'UpdatedAt:',
        value: data?.createdAt ? new Date(data?.createdAt).toLocaleDateString() : '-',
        icon: <Timer1 />,
      },
      {
        title: 'View count:',
        value: viewCount ?? '-',
        icon: <Eye />,
      },
    ];
  }, [data?.address, data?.createdAt, data?.gender, data?.telegram, viewCount]);

  return {
    data,
    isLoading,
    renderDetails,
  };
};
export default useContactDetailLogical;
