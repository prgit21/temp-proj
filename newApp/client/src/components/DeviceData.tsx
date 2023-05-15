
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from './devicedata.module.css';

interface FetchResult {
    temperature: string;
    humidity: string;
    distance: string;
}

export const DeviceData = () => {
    const [ran, setRan] = useState(Math.random())
    const [data, setData] = useState<FetchResult>();
    console.log(setRan)

    useEffect(() => {
        axios.get('http://localhost:5002/device/device-1')
            .then(function (res) {
                console.log(res.data, 'whatRes1');
            })
    }, [ran])
    useEffect(() => {
        axios.get('http://localhost:5002/lof')
            .then(function (res) {
                console.log(res.data, 'whatRes123');
            })
    }, [ran])

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:5002/device/${id}`).then(
            (res) => {
                setData(res.data);
            }
        )
    }, [])
    return (
        <div>
            <h3>{ }</h3>
            <div>
                {id && <>{id}</>}
                <div>
                    <div className={styles.subtitleContainer}>
                        <div className={styles.subtitle}>Distance :</div>
                        <div>{data?.distance}</div>
                    </div>
                    <div className={styles.subtitleContainer}>
                        <div className={styles.subtitle}>Temperature :</div>
                        <div>{data?.temperature}</div>
                    </div>
                    <div className={styles.subtitleContainer}>
                        <div className={styles.subtitle}>Humidity :</div>
                        <div>{data?.humidity}</div>
                    </div>
                </div>
            </div>
        </div>
    )

}