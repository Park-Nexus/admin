import { trpc } from "@trpc/trpc";

export function useCloudRunApiCpuUtilizations() {
  const response = trpc.metrics.get.cloudRunApiCpuUtilizations.useQuery();
  const cloudRunApiCpuUtilizations = response.data;
  return Object.assign({ cloudRunApiCpuUtilizations }, response);
}

export function useCloudRunApiMemoryUtilizations() {
  const response = trpc.metrics.get.cloudRunApiMemoryUtilizations.useQuery();
  const cloudRunApiMemoryUtilizations = response.data;
  return Object.assign({ cloudRunApiMemoryUtilizations }, response);
}

export function useCloudSqlCpuUtilizations() {
  const response = trpc.metrics.get.cloudSqlCpuUtilizations.useQuery();
  const cloudSqlCpuUtilizations = response.data;
  return Object.assign({ cloudSqlCpuUtilizations }, response);
}

export function useCloudSqlDataIo() {
  const response = trpc.metrics.get.cloudSqlDataIo.useQuery();
  const cloudSqlDataIo = response.data;
  return Object.assign({ cloudSqlDataIo }, response);
}

export function useCloudSqlStorageUsage() {
  const response = trpc.metrics.get.cloudSqlStorageUsage.useQuery();
  const cloudSqlStorageUsage = response.data;
  return Object.assign({ cloudSqlStorageUsage }, response);
}
