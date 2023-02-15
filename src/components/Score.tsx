export function Score() {
    return (
        <div>
            <h1 className="text-5xl">Score</h1>
            <div className="flex justify-around mt-10">
                <div className="flex-1">
                    <h3 className="text-3xl">Player</h3>
                    <h2 className="text-4xl">3</h2>
                </div>
                <div className="flex-1">
                    <h3 className="text-3xl">Opponent</h3>
                    <h2 className="text-4xl">3</h2>
                </div>
            </div>
        </div>
    );
}
