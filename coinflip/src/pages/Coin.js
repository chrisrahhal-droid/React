function Coin({side, className}){
    return(
        <div>
            <img src={side} className={className} alt="coin" />
        </div>
    );
}

export default Coin;