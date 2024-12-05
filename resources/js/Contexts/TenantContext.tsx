import { createContext, ReactNode, useContext, useState } from "react";
import { types } from "util";

type TenantProviderType = {
    children: ReactNode;
}

const TenantContext = createContext({} as any);

export const TenantProvider = ({ children }: TenantProviderType) => {
const [ testeContext, setTesteContext] = useState<string>('Teste de context');
    return (
        <TenantContext.Provider value={{
            testeContext
        }}>
            {children}
        </TenantContext.Provider>
    )
};
export const useTenantContext = () => useContext(TenantContext);

