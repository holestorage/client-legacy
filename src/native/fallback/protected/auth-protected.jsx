import {useContext} from "react";
import {AccountContext} from "../../../provider/account-provider";
import LoadingWrapper from "../../../components/ui/skeleton/loading/wrapper/loading-wrapper";
import LoadCircle from "../../../components/skeleton/loading/circle/loading-circle";
import MainFallback from "../main/main-fallback";

export default function AuthProtected({fallback, children}) {
  const {loading, error} = useContext(AccountContext);

  if (loading) {
    return (
      <LoadingWrapper element={<LoadCircle/>}/>
    );
  }

  if (error) {
    return (
      fallback ?? <MainFallback title="Account is required"/>
    );
  }

  return children;
}
