import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { clearUserWarning, selectUserWarning } from '../game-state/GameStateSlice';

export const userWarningFactory = (text: string, duration = 2000): IUserWarning => {
   return { id: crypto.randomUUID(), text, duration };
};

export interface IUserWarning {
   id: string;
   text: string;
   duration: number;
}

// Watches for a trigger in the game state store
// and handles displaying and eventually clearing
// the error.
function UserWarning() {
   const dispatch = useAppDispatch();
   const warning = useAppSelector(selectUserWarning);
   const [activeWarning, setActiveWarning] = useState<IUserWarning | null>(null);

   // On a new warning appearing trigger the message
   // and begin a timeout to clear it
   useEffect(() => {
      if (!warning) return;

      //console.log({ warning });
      setActiveWarning(warning);

      // After the specified duration remove it if it's still active
      setTimeout(() => {
         setActiveWarning(current => (current?.id === warning.id ? null : current));
      }, warning.duration);

      // As soon as we've processed it we'll clear it from
      // the store so more warnings can be pushed
      dispatch(clearUserWarning());
   }, [warning]);

   useEffect(() => {
      console.log({ activeWarning });
   }, [activeWarning]);

   return (
      <>
         {activeWarning && (
            <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
               <div
                  className="bg-black rounded-lg p-4 mt-2 cursor-default"
                  key={activeWarning.id}
               >
                  {activeWarning.text}
               </div>
            </div>
         )}
      </>
   );
}

export default UserWarning;
