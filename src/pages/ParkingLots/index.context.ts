import { useState } from "react";
import constate from "constate";

function useValue() {
  const [selectedLotId, setSelectedLotId] = useState<number>();

  return {
    selectedLotId,
    setSelectedLotId,
  };
}

export const [ParkingLotsContext, useParkingLotsContext] = constate(useValue);
