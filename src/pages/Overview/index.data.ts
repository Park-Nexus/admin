import { trpc } from "@trpc/trpc";
import { TrpcOutput } from "@trpc/trpc.types";

export function useDailyRevenue() {
  const response = trpc.analytics.get.dailyRevenue.useQuery();
  const dailyRevenue = response.data || [];
  return Object.assign({ dailyRevenue }, response);
}
export type TDailyRevenueItem =
  TrpcOutput["analytics"]["get"]["dailyRevenue"][number];

export function useTopParkingLotsByRevenue() {
  const response = trpc.analytics.get.topParkingLotsByRevenue.useQuery();
  const topParkingLotsByRevenue = response.data || [];
  return Object.assign({ topParkingLotsByRevenue }, response);
}

export function useRevenueContributionByVehicleType() {
  const response =
    trpc.analytics.get.revenueContributionByVehicleType.useQuery();
  const revenueContributionByVehicleType = response.data || [];
  return Object.assign({ revenueContributionByVehicleType }, response);
}

export default function useParkingSpotUtilizationByWeekDay() {
  const response =
    trpc.analytics.get.parkingSpotUtilizationByWeekDay.useQuery();
  const parkingSpotUtilizationByWeekDay = response.data || [];
  return Object.assign({ parkingSpotUtilizationByWeekDay }, response);
}

export function usePlaceData() {
  const response = trpc.analytics.get.dataByPlace.useQuery();
  const dataByPlace = response.data || [];
  return Object.assign({ dataByPlace }, response);
}
