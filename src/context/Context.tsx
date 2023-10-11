// import React, { useContext, useMemo, useState } from 'react';

// interface ValueProp {
//   userId: string;
//   setUserId: React.Dispatch<React.SetStateAction<string>>;
// }

// interface ContextProp {
//   children: React.ReactNode;
// }

// export const AppContext = React.createContext<ValueProp>({
//   userId: '',
//   setUserId: () => {},
// });

// export default function Context({ children }: ContextProp): React.JSX.Element {
//   const [userId, setUserId] = useState<string>('');
//   const value = useMemo(() => ({ userId, setUserId }), [userId, setUserId]);

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// }

// export const useGlobalContext = (): ValueProp => useContext(AppContext);
