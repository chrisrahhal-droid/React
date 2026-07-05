import { useState } from "react";
import Coin from "./Coin";
import headImg from "./head.jpeg";
import tailImg from "./tail.jpg";

function FlipCoin() {
    const coin = [headImg, tailImg];

    const [currentSide, setCurrentSide] = useState(headImg);
    const [flips, setFlips] = useState(0);
    const [heads, setHeads] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);

    const flipCoin = () => {
        if (isFlipping) return; // prevent spam clicking

        setIsFlipping(true);

        // choose result
        const randomIndex = Math.floor(Math.random() * coin.length);

        // wait until animation finishes
        setTimeout(() => {
            setCurrentSide(coin[randomIndex]);
            setFlips(prev => prev + 1);

            if (randomIndex === 0) {
                setHeads(prev => prev + 1);
            }

            setIsFlipping(false); // allow next flip
        }, 5000); // must match animation duration
    };

    return (
        <div>
            <Coin
                side={currentSide}
                className={isFlipping ? "flip" : ""}
            />
            <button onClick={flipCoin}>Flip Coin</button>
            <p>Total flips: {flips}</p>
            <p>Total heads: {heads}</p>
            <p>Total tails: {flips - heads}</p>
        </div>
    );
}

export default FlipCoin;
