import { useGetPassenger } from '@/hooks/queries/usePassengerQueries';
import useCustomMediaQuery from '@/hooks/useCustomMediaQuery';
import { usePassengerStore } from '@/stores/usePassengerStore';

const useContactLogical = () => {
  const { data, isLoading } = useGetPassenger();
  const { setFilter, filter } = usePassengerStore();
  const { isMobile } = useCustomMediaQuery();

  const handleChangePage = (_event: React.ChangeEvent<unknown>, page: number) => {
    setFilter({
      ...filter,
      offset: page,
    });
  };

  return {
    data,
    isLoading,
    handleChangePage,
    filter,
    isMobile,
  };
};

export default useContactLogical;
