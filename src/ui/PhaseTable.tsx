import { listWords, phaseColour, removeUnderscore } from "../services/Utility";

interface phaseInt {
  name: string;
  on: string;
  train_limit: string;
  tiles: Array<string>;
  operating_rounds: string;
  status: Array<string>;
}

function PhaseTable({ phases }: { phases: Array<phaseInt> }) {
  return (
    <table className="w-[95%] text-sm">
      <caption className="text-xl font-bold">Phase Table</caption>
      <thead>
        <tr className=" text-l font-semibold">
          <th>Phase name</th>
          <th>Phase trigger</th>
          <th>Train limit</th>
          <th>Operating rounds</th>
          <th>Available tiles</th>
          <th>Phase status</th>
        </tr>
      </thead>
      <tbody>
        {phases.map((phase: phaseInt, i) => {
          console.log(phaseColour(phase.tiles));
          return (
            <tr
              key={i}
              className="text-center"
              style={{
                backgroundColor: `${phaseColour(phase.tiles as Array<string>)}`,
              }}
            >
              <td>{phase.name}</td>
              <td>{phase.on || ""}</td>
              <td>{phase.train_limit}</td>
              <td>{phase.operating_rounds}</td>
              <td>
                {phase.tiles.map((tile, i) => listWords(tile, i, phase.tiles))}
              </td>
              <td className="capitalize">{removeUnderscore(phase.status)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PhaseTable;
