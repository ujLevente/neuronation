export function CurrentBattle() {
    return (
        <div className="my-20 border-1 border-lightBorder py-4 rounded-md">
            <div className="flex justify-around mb-6">
                <div className="flex-1">
                    <p>Player&apos;s pick</p>
                    <p className="text-2xl player-color">Pikeman</p>
                </div>
                <div className="flex-1">
                    <p>Opponent&apos;s pick</p>
                    <p className="text-2xl opponent-color">Pikeman</p>
                </div>
            </div>
            <h3 className="h3 uppercase">lost</h3>
        </div>
    );
}
