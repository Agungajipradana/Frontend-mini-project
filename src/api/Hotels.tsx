import axios from "axios";

const GetData = async () => {
  try {
    const result = await axios.get("http://localhost:3002/hotels/");
    return result.data;
  } catch (error) {
    return error;
  }
};

const Create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/hotels/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const Update = async (data: any) => {
  try {
    const result = await axios.put("http://localhost:3002/hotels/" + data.id, data);
    return result;
  } catch (error) {
    return error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get("http://localhost:3002/hotels/" + id);
    return result.data;
  } catch (error) {
    return error;
  }
};

const deleted = async (id: any) => {
  try {
    const result = await axios.delete("http://localhost:3002/hotels/" + id);
    return result;
  } catch (error) {
    return await error;
  }
};

export default {
  GetData,
  Create,
  Update,
  findOne,
  deleted,
};
