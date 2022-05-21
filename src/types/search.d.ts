interface IHeader {
  resultCode: string;
  resultMsg: string;
}

interface IItem {
  sickCd: string;
  sickNm: string;
}

interface IItems {
  item: IItem[];
}

interface IBody {
  items: IItems;
  numOfRows: number;
  pageNo: number;
  totalCount: number;
}

interface IResponse {
  header: IHeader;
  body: IBody;
}

interface IDiseaseAPIRes {
  response: IResponse;
}
