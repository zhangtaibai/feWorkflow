import { List, Map } from 'immutable';

export const outputFolder = List([
  Map({
    index: 0,
    name: 'src',
    defaultValue: 'src',
    value: '',
    label: '源文件目录名称'
  }),
  Map({
    index: 1,
    name: 'dev',
    defaultValue: 'dev',
    value: '',
    label: '开发文件目录名称'
  }),
  Map({
    index: 2,
    name: 'dist',
    defaultValue: 'dist',
    value: '',
    label: '压缩文件目录名称'
  })
])
