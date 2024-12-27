import { createContext, ReactNode, useContext, useState } from "react";
import { types } from "util";

type TenantProviderType = {
    children: ReactNode;
}

const TenantContext = createContext({} as any);

export const TenantProvider = ({ children }: TenantProviderType) => {
    const [colapseSideBar, setColapseSideBar] = useState<boolean>(true);
    const [colapseMobile, setColapseMobile] = useState<boolean>(false);
    const [sendOrderParts, setSendOrderParts] = useState<any>([]);
    return (
        <TenantContext.Provider value={{
            colapseSideBar,
            setColapseSideBar,
            colapseMobile,
            setColapseMobile,
            sendOrderParts, 
            setSendOrderParts
        }}>
            {children}
        </TenantContext.Provider>
    )
};
export const useTenantContext = () => useContext(TenantContext);

