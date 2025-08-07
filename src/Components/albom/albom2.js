import { useParams } from 'react-router-dom';

function Albom2() {
  const { id } = useParams();

  return (
    <>
      <h1>نمایش جزئیات آلبوم شماره: {id}</h1>
    </>
  );
}

export default Albom2;
