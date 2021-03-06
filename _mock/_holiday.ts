import { MockRequest } from '@knz/mock'

function getpagelist(req) {
  return {
    result: { code: 0, message: 'SUCCESS' },
    data: [
      {
        code: 'knx2009',
        id: 1,
        name: '那笙',
        gender: 'WOMAN',
        organizationName:
          '名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长名字够长',
        positionName: '研发工程师1',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
        selected: true,
      },
      {
        code: 'knx2003',
        name: '王慕烟',
        id: 2,
        gender: 'WOMANXZXCSZXCZXCZXCZXCZXCZX',
        organizationName: '天才少女团',
        positionName: '哇卡卡卡队',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 3,
        code: 'knx2002',
        name: '飞廉',
        gender: 'MAN',
        organizationName: '征天军团',
        positionName: '破军',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 4,
        code: 'knx2001',
        name: '云焕',
        gender: 'MAN',
        organizationName: '征天军团',
        positionName: '兆星',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 5,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 6,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 7,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 8,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 9,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 10,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
        disabled: true,
      },
      {
        id: 11,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 12,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 13,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'DISABLE',
      },
      {
        id: 14,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 15,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 16,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 17,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 18,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 19,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 20,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 21,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 22,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
        status: 'ENABLE',
      },
      {
        id: 23,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
        startTime: '2021-05-11T18:08:04.248+08:00',
        endTime: '2021-05-25T18:08:04.248+08:00',
      },
      {
        id: 24,
        code: 'knx2009',
        name: '苏摩AS',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'DISABLE',
      },
      {
        id: 25,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
      },
      {
        id: 26,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
      },
      {
        id: 27,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
      },
      {
        id: 28,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
      },
      {
        id: 29,
        code: 'knx2009',
        name: '苏摩',
        gender: 'MAN',
        organizationName: '碧海云天',
        positionName: '海皇',
        status: 'ENABLE',
      },
    ],
    page: { total: 29, pages: 1, size: 20, current: 1 },
  }
}

function tableList(req) {
  return {
    errorCode: '0',
    errorMsg: '',
    data: {
      listTotal: 5,
      listBody: [
        {
          empCode: 'Helen011',
          name: '自定义11',
          organizationalName: 'krystal057',
          positionName: 'krystal',
          staffingType: '在编人员',
        },
        {
          empCode: 'Helen012',
          name: '自定义12',
          organizationalName: 'krystal057',
          positionName: 'krystal1',
          staffingType: '在编人员',
        },
        {
          empCode: 'Helen013',
          name: '自定义13',
          organizationalName: 'krystal057',
          positionName: 'krystal1',
          staffingType: '在编人员',
        },
        {
          empCode: 'Helen014',
          name: '自定义14',
          organizationalName: 'krystal057',
          positionName: 'krystal',
          staffingType: '在编人员',
        },
        {
          empCode: 'Helen10',
          name: 'helen10',
          organizationalName: 'krystal057',
          positionName: 'krystal',
          staffingType: '在编人员',
        },
      ],
      listHeader: [
        {
          key: 'rowNo',
          name: '序号',
          width: 80,
          type: null,
          hide: false,
          format: null,
          action: false,
          sortField: null,
        },
        {
          key: 'empCode',
          name: '工号',
          width: 120,
          type: 'primary_key',
          hide: false,
          format: '',
          action: false,
          sortField: '',
        },
        {
          key: 'name',
          name: '姓名',
          width: 120,
          type: 'primary_name',
          hide: false,
          format: '',
          action: false,
          sortField: '',
        },
        {
          key: 'organizationalName',
          name: '部门',
          width: 120,
          type: '',
          hide: false,
          format: '',
          action: false,
          sortField: '',
        },
        {
          key: 'positionName',
          name: '职位',
          width: 120,
          type: '',
          hide: false,
          format: '',
          action: false,
          sortField: '',
        },
        {
          key: 'staffingType',
          name: '占编类型',
          width: 120,
          type: '',
          hide: false,
          format: '',
          action: false,
          sortField: '',
        },
      ],
      tableConfig: null,
    },
  }
}

export const holiday = {
  'POST /vx/holiday/listByPage': (req: MockRequest) => getpagelist(req),
  'POST /vx/holiday/tableDemo': (req: MockRequest) => tableList(req),
}
