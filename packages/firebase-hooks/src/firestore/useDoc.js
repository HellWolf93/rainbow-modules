import { useContext, useEffect, useState } from 'react';
import Context from '../context';

export default function useDoc(props) {
    const { path } = props;
    const { app } = useContext(Context);

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        if (app) {
            const ref = app.firestore().doc(path);
            setIsLoading(true);
            const unsubscribe = ref.onSnapshot(
                (doc) => {
                    if (doc.exists) {
                        setData({
                            id: doc.id,
                            data: doc.data(),
                        });
                    } else {
                        setData(null);
                    }
                    setIsLoading(false);
                },
                (err) => {
                    setIsLoading(false);
                    console.log(err);
                },
            );
            return () => {
                return unsubscribe();
            };
        }
        return null;
    }, [props.path]);
    return [data, isLoading];
}