import { Oval } from "react-loader-spinner";
import * as C from './styles'

export const Load = () => {
  return (
    <C.Container>
      <Oval
        visible={true}
        height="150"
        width="150"
        color="#0F52BA"
        secondaryColor="#0F52BA"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      /> 
    </C.Container>
  );
};
