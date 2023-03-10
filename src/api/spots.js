import { api } from ".";
import { errorNotify } from "../components/common/notification/NotificationToast";
import { spotsEndpoint } from "./routes/spots";

const getError = (error) => {
  if (error?.response) {
    return { message: "Error", description: error?.response?.data?.errors ?? error?.message }
  }
  return { message: error?.name, description: error?.message }
}

export const fetchSpots = async (sortOrder) => {
  try {
    return await api.get(`${spotsEndpoint}?price_order=${sortOrder}`);
  } catch (error) {
    errorNotify(getError(error));
    return error;
  }
}

export const createSpot = async (data) => {
  try {
    return await api.post(spotsEndpoint, data);
  } catch (error) {
    errorNotify(getError(error));
    return error;
  }
}

export const getSpot = async (id) => {
  try {
    return await api.get(`${spotsEndpoint}/${id}`);
  } catch (error) {
    errorNotify(getError(error));
    return error?.response;
  }
}

export const updateSpot = async (id, data) => {
  try {
    return await api.put(`${spotsEndpoint}/${id}`, data);
  } catch (error) {
    errorNotify(getError(error));
    return error;
  }
}