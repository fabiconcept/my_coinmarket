import React, { useEffect, useState } from 'react'

const Converter = ({ symbol, name, current_price, image }) => {
    const [btc, setBtc] = useState(1);
    const [ngn, setNgn] = useState(0);
    const [main, setMain] = useState(false);

    function formatMoney(n) {
        return (n).toLocaleString();
    }

    useEffect(()=>{
        if (!main) {
            let convertedValue = formatMoney((btc*current_price));
            setNgn(convertedValue);
        }else{
            let convertedValue = formatMoney((ngn/current_price));
            console.log(convertedValue);
            setBtc(convertedValue);
        }
    }, [btc, name])
    
    useEffect(()=>{
        if (main) {
            let convertedValue = formatMoney((ngn/current_price));
            setBtc(convertedValue);
        }
    }, [ngn, name])

    return (
        <section className="converter">
            <div className="convert-from">
                <div className="con-txt">
                    <img src={image} alt="" />
                    <span>
                        <span>{(symbol).toUpperCase()}</span>
                        <span>{name}</span>
                    </span>
                </div>
                {!main ? <input type="number" placeholder={`Amount of ${(symbol).toUpperCase()}`} onChange={(e)=>setBtc(e.target.value)} value={btc} className="con_inp" /> : <input type="text" placeholder={`Amount of ${(symbol).toUpperCase()}`} onChange={(e)=>setBtc(e.target.value)} disabled value={btc} className="con_inp" />}
            </div>
            <div className="convert-to">
                <div className="con-txt">
                    <img src="../img/NGN.svg" alt="" />
                    <span>
                        <span>NGN</span>
                        <span>Naira</span>
                    </span>
                </div>
                {!main ? <input type="text" placeholder={`Amount of NGN`} value={ngn} disabled className="con_inp" /> : <input type="text" placeholder={`Amount of NGN`} onChange={(e)=>setNgn(e.target.value)} value={ngn} className="con_inp" />}
            </div>
            <div className="sort" onClick={()=>setMain(!main)}>
                <img src="../img/sort.png" alt="" />
            </div>
        </section>
    )
}

export default Converter