import React, { createContext, useMemo, useState } from 'react';
import axios from 'axios';
import ScopeOneStaticData from 'Helper/ScopeOneStaticData.json';
import { useNavigate } from 'react-router-dom';
import {
  contextType,
  ScopeOneDataType,
  ScopeThreeData,
  ScopeTwoAssetType,
  ScopeTwoDataType,
  ScopeTwoType,
  userType,
} from 'Types';

const intialContext: contextType = {
  user: null,
  scopeOneData: [],
  scopeTwoAsset: [],
  scopeTwoData: [],
  scopeThreeData: [],
  headText: <></>,
  loading: true,
  close: true,
  authToken: 'null',
};

const Context = createContext(intialContext);

interface Proptypes {
  children: React.ReactElement;
}

const ContextProvider: React.FC<Proptypes> = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    `Bearer ${localStorage.getItem('authToken')}`,
  );
  const navigate = useNavigate();
  const [user, setUser] = useState<userType | null>(null);
  const [close, setClose] = useState(true);
  const [scopeOneData, setScopeOneData] = useState<ScopeOneDataType[]>([]);
  const [scopeTwoData, setScopeTwoData] = useState<ScopeTwoType>([]);
  const [scopeTwoAsset, setscopeTwoAsset] = useState<ScopeTwoAssetType[]>([]);
  const [scopeThreeData, setScopeThreeData] = useState<ScopeThreeData[]>([]);
  const [loading, setLoading] = useState(true);
  const [headText, setHeadText] = useState<React.ReactNode>(<></>);

  const fetchAxios = useMemo(
    () =>
      axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        headers: {
          Accept: 'application/json',
          Authorization: authToken,
        },
      }),
    [authToken],
  );

  const getUser: contextType['getUser'] = async () => {
    setLoading(true);
    if (authToken.includes('null')) {
      return false;
    }
    let { data } = await fetchAxios.get('/api/users/me');

    if (data) {
      setUser({ ...data });
      return true;
    }
    setLoading(false);
    localStorage.removeItem('authToken');
    return false;
  };

  const getScopeOneData = async () => {
    setScopeOneData(ScopeOneStaticData);
  };

  const getScopeTwoData = async () => {
    let { data: asset }: { data: ScopeTwoAssetType[] } = await fetchAxios.get(
      `/api/asset/${71}`,
    );
    setscopeTwoAsset(asset);
    const dataScopeTwo = await Promise.all(
      asset.map(async (x) => {
        const { data: scopeData }: { data: ScopeTwoDataType[] } =
          await fetchAxios.post(
            `/api/getEmission?name=${x['asset_name']}&type=${'emission'}`,
          );
        return scopeData;
      }),
    );
    setScopeTwoData(dataScopeTwo);
  };

  const getScopeThreeData = async () => {
    setScopeThreeData([]);
  };

  const getAllScopeData = async () => {
    try {
      setLoading(true);
      await getUser();
      await getScopeOneData();
      await getScopeTwoData();
      await getScopeThreeData();
      setLoading(false);
    } catch (error) {
      navigate('/error');
    }
  };

  const getToken = async (username: string, password: string) => {
    try {
      const { data: token } = await axios({
        method: 'POST',
        headers: {},
        url: process.env.REACT_APP_API_URL + '/api/token',
        data: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
      });

      if (!token.access_token) {
        return false;
      }
      localStorage.setItem('authToken', token.access_token);
      setAuthToken(`Bearer ${token.access_token}`);
      return true;
    } catch (error) {
      return false;
    }
  };

  const setHead = (item: React.ReactNode) => {
    setHeadText(item);
  };
  const value: contextType = {
    getToken,
    getUser,
    user,
    getScopeOneData,
    getScopeTwoData,
    getScopeThreeData,
    getAllScopeData,
    setLoading,
    setClose,
    scopeOneData,
    scopeTwoAsset,
    scopeTwoData,
    scopeThreeData,
    loading,
    close,
    authToken,
    headText,
    setHead,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
export { Context, ContextProvider };
