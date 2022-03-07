import React from "react";

export const useApis = (url) => {
    const [result, setResult] = React.useState(null);
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);

        fetch(url, {
            headers: {
                Accept: "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                setLoading(false);
                setResult(res);
            })
    }, []);

    return [result, isLoading];
};