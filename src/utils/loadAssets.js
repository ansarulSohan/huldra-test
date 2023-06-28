import getConfig from "./handleStorageConfig";
import {
  fetchCases as fetchCasesFirebase,
  getAssetDownloadUrl as getAssetFirebase,
} from "../utils/firebase";
import {
  fetchCases as fetchCasesLocal,
  getAsset as getAssetLocal,
} from "../utils/loadLocalAssets";

const fetchCases = async (configExists, path, cases, shuffle) => {
  const config = getConfig();

  let validCases;

  if (config.assetsStorageType === "local") {
    validCases = await fetchCasesLocal(configExists, path, cases, shuffle);
  } else if (config.assetsStorageType === "firebase") {
    validCases = await fetchCasesFirebase(configExists, path, cases, shuffle);
  }

  return validCases;
};

const getAsset = async (path) => {
  const config = getConfig();

  let url;

  if (config.assetsStorageType === "local") {
    url = getAssetLocal(path);
  } else if (config.assetsStorageType === "firebase") {
    url = await getAssetFirebase(path);
  }

  return url;
};

export { fetchCases, getAsset };
