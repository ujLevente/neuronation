export function Score() {
    return (
        <div>
            <h1 className="h1">Score</h1>
            <div className="flex justify-around mt-12">
                <div className="flex-1">
                    <h3 className="h3 player-color">Player</h3>
                    <h2 className="h2 player-color">3</h2>
                </div>
                <div className="flex-1">
                    <h3 className="h3 opponent-color">Opponent</h3>
                    <h2 className="h2 opponent-color">3</h2>
                </div>
            </div>
        </div>
    );
}
