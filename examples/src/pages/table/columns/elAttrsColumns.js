export const fixedColumns = [
  { label: '序号', align: 'center', type: 'index', width: '50', fixed: true },
  { label: '姓名', align: 'center', prop: 'name', width: '100' },
  { label: '年龄', align: 'center', prop: 'age', width: '100' },
  {
    label: '职级',
    align: 'center',
    prop: 'title',
    width: '150',
    formatter(row) {
      const titles = ['初级程序员', '中级程序员', '高级程序员']
      return titles[row.title]
    }
  },
  { label: '身份证号', align: 'center', prop: 'idCard', width: '180' },
  { label: '出生日期', align: 'center', prop: 'date', width: '140' },
  { label: '个人描述', align: 'center', prop: 'desc', align: 'left', showOverflowTooltip: true }
]
export const elAttrsColumns = [
  { type: 'selection' },
  { label: '序号', align: 'center', type: 'index', width: '50' },
  { label: '姓名', align: 'center', prop: 'name', width: '100' },
  { label: '年龄', align: 'center', prop: 'age', width: '100' },
  {
    label: '职级',
    align: 'center',
    prop: 'title',
    width: '150',
    formatter(row) {
      const titles = ['初级程序员', '中级程序员', '高级程序员']
      return titles[row.title]
    }
  },
  { label: '身份证号', align: 'center', prop: 'idCard', width: '180' },
  { label: '出生日期', align: 'center', prop: 'date', width: '140' },
  { label: '个人描述', align: 'center', prop: 'desc', align: 'left', showOverflowTooltip: true }
]
export const tableMergeColumns = [
  { label: '姓名', align: 'center', prop: 'name', width: '100' },
  { label: '年龄', align: 'center', prop: 'age', width: '100' },
  {
    label: '职级',
    align: 'center',
    prop: 'title',
    formatter(row) {
      const titles = ['初级程序员', '中级程序员', '高级程序员']
      return titles[row.title]
    }
  },
  { label: '身份证号', align: 'center', prop: 'idCard' },
  { label: '出生日期', align: 'center', prop: 'date' }
]
