<template>
  <div>
    <h2>树形数据和懒加载</h2>
    <elsa-table
      row-key="id"
      default-expand-all
      lazy
      :indent="20"
      :load="load"
      :tree-props="{ children: 'children', hasChildren: 'hasChildren' }"
      v-loading="loading"
      :columns="columns"
      :dataSource="dataSource"
      :pagination="pagination"
    ></elsa-table>
  </div>
</template>

<script>
import { getUserList } from '@/mock/user';
import columns from './columns/pageColumns';

export default {
  data() {
    return {
      dataSource: [],
      columns,
      loading: false,
      pagination: {
        pageSize: 10,
        currentPage: 1,
        total: 0,
        currentChange: (currentPage) => {
          console.log('currentPage change', currentPage);
          this.pagination.currentPage = currentPage;
          this.getList();
        },
        sizeChange: (pageSize) => {
          console.log('pageSize change', pageSize);
          this.pagination.pageSize = pageSize;
          this.pagination.currentPage = 1;
          this.getList();
        },
      },
    };
  },
  methods: {
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        resolve(getUserList(5, tree.id));
      }, 1000);
    },
    getList() {
      console.log('currentPage:', this.pagination.currentPage, 'pageSize:', this.pagination.pageSize);
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.dataSource = getUserList(5);
        this.pagination.total = 40;
      }, 1000);
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style></style>
